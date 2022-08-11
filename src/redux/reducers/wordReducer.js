import { createSlice } from '@reduxjs/toolkit';

const wordReducer = createSlice({
  name: 'wordData',
  initialState: {
    data: { history: [], revealState: [], word: '', apiData: {}, score: 0 },
  },
  reducers: {
    updateWordData: (state, action) => {
      state.data.apiData = action.payload;
      state.data.word = action.payload.word;
      let n = 0;
      if (action.payload?.definition?.length >= 0)
        n += action.payload?.definition?.length;
      if (action.payload?.synonym?.length >= 0)
        n += action.payload?.synonym?.length;
      if (action.payload?.antonym?.length >= 0)
        n += action.payload?.antonym?.length;

      state.data.revealState = Array.from({ length: n }).map((ele) => false);
      state.data.revealState[0] = true;
    },
    updateReveal: (state, action) => {
      state.data.revealState[action.payload.ind] = action.payload.val;
    },
    saveState: (state, action) => {
      state.data.history.push({
        word: state.data.word,
        revealState: state.data.revealState,
        apiData: state.data.apiData,
        score: state.data.score,
      });
    },
    setHistory: (state, action) => {
      let loadHistory = state.data.history[action.payload.ind];
      state.data.word = loadHistory.word;
      state.data.revealState = loadHistory.revealState;
      state.data.apiData = loadHistory.apiData;
      state.data.score = loadHistory.score;
    },
    updateScore: (state, action) => {
      let result = 0;
      switch (action.payload) {
        case 'CORRECT_GUESS':
          result = 10;
          break;
        case 'REVEAL_DEFINITION':
          result = -3;
          break;
        case 'REVEAL_SYNONYM':
          result = -2;
          break;
        case 'REVEAL_ANTONYM':
          result = -2;
          break;
        case 'WRONG_GUESS':
          result = -2;
          break;
        case 'GET_NEW_WORD':
          result = -5;
          break;
      }
      state.data.score += result;
    },
  },
});

export const {
  updateWordData,
  updateReveal,
  saveState,
  setHistory,
  updateScore,
} = wordReducer.actions;
export default wordReducer.reducer;
