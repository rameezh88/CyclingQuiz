import {formatString, shuffleArray} from '..';
import {QuizAnswer} from '../../../common/types';
import generateAverageDistanceBetweenBikesQuestion from './generateAverageDistanceBetweenBikesQuestion';
import generateDisabledBikesQuestion from './generateDisabledBikesQuestion';
import generateNumberOfBikesQuestion from './generateNumberOfBikesQuestion';
import {QuizQuestionGenerator} from './types';

// Possible Questions:
// - How many total rental bikes are available to rent in the following cities right now: `[city]`?
// - How many bikes in the following cities are disabled: `[city]`?
// - What is the average charge of all available bikes right now in the following cities: `[city]`?
// - How many bikes have charge above `x`% in the following cities: `[city]`?
// - What is the average distance between free bikes in the following cities right now: `[city]`?
// - How many more kilometers are the electric bikes currently capable of running in the following cities: `[city]`?
// - On an average, what is the distance between stations in `area_name`?

const quizQuestionGeneratorTemplates: Array<QuizQuestionGenerator> = [
  {
    text: 'How many total bikes are available to rent in the following cities right now: {{cities}}?',
    quizQuestionGeneratorFunction: generateNumberOfBikesQuestion,
  },
  {
    text: 'How many bikes in the following cities are disabled: {{cities}}?',
    quizQuestionGeneratorFunction: generateDisabledBikesQuestion,
  },
  {
    text: 'What is the average distance between free bikes in {{city}} right now (in km)?',
    quizQuestionGeneratorFunction: generateAverageDistanceBetweenBikesQuestion,
  },
];

export function getRandomQuizGenerator() {
  const randomIndex = Math.floor(
    Math.random() * quizQuestionGeneratorTemplates.length,
  );
  return quizQuestionGeneratorTemplates[randomIndex];
}

export function generateAnswers(baseNumber: number) {
  const answers: QuizAnswer[] = [
    {answer: Math.floor(baseNumber), correct: true},
  ];
  let i = 0;
  while (i < 3) {
    const randomNumber = Math.floor(Math.random() * baseNumber * 4);
    if (!answers.some(answer => answer.answer === randomNumber)) {
      answers.push({
        answer: randomNumber,
        correct: false,
      });
      i += 1;
    }
  }

  return shuffleArray(answers);
}

export const getFormattedQuizQuestion = (
  questionText: string | undefined,
  answerValue: number,
  questionFormattingOptions: any,
) => {
  const question = questionText
    ? formatString(questionText, questionFormattingOptions)
    : '';
  return {
    question,
    answers: generateAnswers(answerValue),
  };
};
