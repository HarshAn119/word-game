import { createSlice } from '@reduxjs/toolkit';

const wordReducer = createSlice({
  name: 'wordData',
  initialState: { data: {} },
  reducers: {
    updateWordData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateWordData } = wordReducer.actions;
export default wordReducer.reducer;
