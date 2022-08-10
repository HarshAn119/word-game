import axios from 'axios';

const baseURL = 'https://fourtytwowords.herokuapp.com';
const apiKey =
  'be45adfee7c617ff1b22a4ffccdf2687a8b7f484d1fc0603388c9f5d51879871e6fa92b0cb6fa6915f86e5c59d2c815b45496db11041a065ff6339318c925201';

const format = (unformattedValues) => {
  let formattedValue = [];
  unformattedValues.map((unformattedValue) =>
    formattedValue.push(unformattedValue.text)
  );
  return formattedValue;
};

const getWordDefinition = async (word) => {
  try {
    const response = await axios.get(
      `${baseURL}/word/${word}/definitions?api_key=${apiKey}`
    );
    return format(response.data);
  } catch (err) {
    return handleAPIError(err);
  }
};
const getRelatedWord = async (word) => {
  try {
    const response = await axios.get(
      `${baseURL}/word/${word}/relatedWords?api_key=${apiKey}`
    );
    return response.data;
  } catch (err) {
    return handleAPIError(err);
  }
};

export const getWord = async () => {
  try {
    const res = await axios.get(
      `${baseURL}/words/randomWord?api_key=${apiKey}`
    );
    let output = {};

    const randomWord = res.data.word;
    const definitions = getWordDefinition(randomWord);
    const relatedWords = getRelatedWord(randomWord);

    const values = await Promise.all([definitions, relatedWords]);

    output['word'] = randomWord;
    output['definition'] = values[0];
    if (values[1].length > 1) {
      output['antonym'] = values[1][0].words;
      output['synonym'] = values[1][1].words;
    } else output['synonym'] = values[1][0].words;
    return output;
  } catch (err) {
    console.error(err);
  }
};

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error(
      'Invalid API key -Go to https://fourtytwowords.herokuapp.com'
    );
  } else if (err.response.status === 404) {
    throw new Error('Cannot reach the server, Try again later');
  } else {
    throw new Error('word not found');
  }
}
