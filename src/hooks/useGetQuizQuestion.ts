import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getRandomQuizGenerator} from '../api/utils/quiz';
import {QuizQuestion} from '../common/types';
import {selectAllServices} from '../redux/reducers/gbfs/selectors';

const useGetQuizQuestion = () => {
  const [currentQuizQuestion, setCurrentQuizQuestion] =
    useState<QuizQuestion | null>(null);
  const allGbfsServices = useSelector(selectAllServices);

  useEffect(() => {
    getNextQuestion();
  }, [allGbfsServices]);

  const getNextQuestion = () => {
    const {
      text,
      options,
      quizQuestionGeneratorFunction: generateQuestion,
    } = getRandomQuizGenerator();

    generateQuestion({text, options}, allGbfsServices).then(question => {
      setCurrentQuizQuestion(question);
    });
  };

  return {
    getNextQuestion,
    currentQuizQuestion,
  };
};

export default useGetQuizQuestion;
