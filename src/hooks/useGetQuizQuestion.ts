import {useState} from 'react';
import {QuizQuestion} from '../common/types';
import questions from './questions.json';

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const useGetQuizQuestion = () => {
  const [currentQuizQuestion, setCurrentQuizQuestion] =
    useState<QuizQuestion | null>(null);

  const getNextQuestion = () => {
    // console.log('getNextQuestion');
    setCurrentQuizQuestion(getRandomElement(questions));
  };

  return {
    getNextQuestion,
    currentQuizQuestion,
  };
};

export default useGetQuizQuestion;
