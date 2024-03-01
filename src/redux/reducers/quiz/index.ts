import {createSlice} from '@reduxjs/toolkit';
import {QuizResults} from '../../../common/types';

export interface QuizState {
  attempts: QuizResults[];
}

const initialState: QuizState = {
  attempts: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addAttempt: (state, action) => {
      state.attempts.push(action.payload);
    },
  },
});

export const {addAttempt} = quizSlice.actions;

export default quizSlice.reducer;
