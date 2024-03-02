import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming Ionicons is used as the vector icon library
import {QuizResults} from '../../common/types';
import {
  BorderBottom,
  Container,
  ResultText,
  ScoreContainer,
  ScoreText,
} from './styles';
import {Title} from '../../common/styles';

const QuizAttemptListItem = ({
  quizAttempt,
  index,
}: {
  quizAttempt: QuizResults;
  index: number;
}) => {
  const correctAnswerCount = quizAttempt.answeredQuestions.filter(
    answer => answer.selectedAnswer.correct,
  ).length;
  const wrongAnswerCount =
    quizAttempt.answeredQuestions.length - correctAnswerCount;

  return (
    <Container>
      <Title>{`Quiz #${index + 1}`}</Title>
      <ScoreContainer>
        <ScoreText>{`Correct Answers: ${correctAnswerCount}`}</ScoreText>
        <ScoreText>{`Wrong Answers: ${wrongAnswerCount}`}</ScoreText>
        <ScoreText>Total Score: {quizAttempt.points}</ScoreText>
      </ScoreContainer>
      <ResultText>
        {quizAttempt.won ? (
          <>
            You won! <Ionicons name="happy-outline" size={24} color="green" />
          </>
        ) : (
          <>
            You lost! <Ionicons name="sad-outline" size={24} color="red" />
          </>
        )}
      </ResultText>
      <BorderBottom />
    </Container>
  );
};

export default QuizAttemptListItem;
