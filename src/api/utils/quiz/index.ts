import {shuffleArray} from '..';
import {QuizAnswer} from '../../../common/types';
import generateNumberOfBikesQuestion from './generateNumberOfBikesQuestion';
import {QuizQuestionGenerator} from './types';

// - How many total rental bikes are available to rent in the following cities right now: `[city]`?
// - How many bikes in the following cities are disabled: `[city]`?
// - What is the average charge of all available bikes right now in the following cities: `[city]`?
// - How many bikes have charge above `x`% in the following cities: `[city]`?
// - What is the average distance between free bikes in the following cities right now: `[city]`?
// - How many more kilometers are the electric bikes currently capable of running in the following cities: `[city]`?
// - On an average, what is the distance between stations in `area_name`?

export const quizQuestionGeneratorTemplates: Array<QuizQuestionGenerator> = [
  {
    type: 1,
    text: 'How many total rental bikes are available to rent in the following cities right now: {{cities}}?',
    options: ['cities'],
    quizQuestionGeneratorFunction: generateNumberOfBikesQuestion,
  },
];

export function getRandomQuizGenerator() {
  const randomIndex = Math.floor(
    Math.random() * quizQuestionGeneratorTemplates.length,
  );
  return quizQuestionGeneratorTemplates[randomIndex];
}

export function generateAnswers(baseNumber: number) {
  const answers: QuizAnswer[] = [{answer: baseNumber, correct: true}];

  // Generate 3 random numbers based on the baseNumber
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * baseNumber * 2); // Adjust the range as needed
    answers.push({
      answer: randomNumber,
      correct: false,
    });
  }

  return shuffleArray(answers);
}
