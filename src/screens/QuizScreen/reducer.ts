import {
  CORRECT_ANSWER_POINTS,
  WRONG_ANSWER_POINTS,
} from '../../api/utils/constants';

export const quizResultsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ANSWER_SELECTED':
      return {
        ...state,
        points: action.selectedAnswer.correct
          ? state.points + CORRECT_ANSWER_POINTS
          : state.points - WRONG_ANSWER_POINTS,
        answeredQuestions: [
          ...state.answeredQuestions,
          {question: action.question, selectedAnswer: action.selectedAnswer},
        ],
      };
    case 'SET_WON':
      return {
        ...state,
        won: action.won,
      };
    default:
      return state;
  }
};
