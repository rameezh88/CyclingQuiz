import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuizQuestionComponent from './';

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

// Sample QuizQuestion data for testing
const quizQuestion = {
  question: 'What is the capital of France?',
  answers: [
    {answer: 'Paris', correct: true},
    {answer: 'Berlin', correct: false},
    {answer: 'London', correct: false},
    {answer: 'Rome', correct: false},
  ],
};

test('renders quiz question and answers', () => {
  const {getByText} = render(
    <QuizQuestionComponent quizQuestion={quizQuestion} />,
  );

  const questionElement = getByText(quizQuestion.question);
  expect(questionElement).toBeTruthy();

  quizQuestion.answers.forEach(answer => {
    const answerElement = getByText(answer.answer);
    expect(answerElement).toBeTruthy();
  });
});

test('selects answer correctly', () => {
  const onAnswerSelectedMock = jest.fn();
  const {getByText} = render(
    <QuizQuestionComponent
      quizQuestion={quizQuestion}
      onAnswerSelected={onAnswerSelectedMock}
    />,
  );

  const answerIndex = 0; // Select the first answer
  const answerText = quizQuestion.answers[answerIndex].answer;
  const answerElement = getByText(answerText);

  fireEvent.press(answerElement);

  expect(onAnswerSelectedMock).toHaveBeenCalledWith(
    quizQuestion.answers[answerIndex],
  );
});
