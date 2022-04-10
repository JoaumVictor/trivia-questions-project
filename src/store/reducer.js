import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: 'o data sempre será um array de objetos, e nos objetos estarão todas as respostas, sendo que a primeira sempre será a correta!',
  data: [],
};

export const storeData = createSlice({
  name: 'storeData',
  initialState,
  reducers: {
    addQuestion: (state, { payload }) => {
      state.data = [ ...state.data, payload ];
    },
  },
});

export const { addQuestion } = storeData.actions;

export default storeData.reducer;