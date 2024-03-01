import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming Ionicons is used as the vector icon library
import {QuizResults} from '../../common/types';
import {
  BorderBottom,
  Container,
  ResultText,
  RetakeQuizButton,
  RetakeQuizButtonText,
  ScoreContainer,
  ScoreText,
  Subtitle,
  Title,
} from './styles';

interface QuizAttemptHeaderItemProps {
  quizAttempt: QuizResults;
  index: number;
  onRetakePress?: () => void;
}

const QuizAttemptHeaderItem = ({
  quizAttempt,
  index,
  onRetakePress,
}: QuizAttemptHeaderItemProps) => {
  const correctAnswerCount = quizAttempt.answeredQuestions.filter(
    answer => answer.selectedAnswer.correct,
  ).length;
  const wrongAnswerCount =
    quizAttempt.answeredQuestions.length - correctAnswerCount;

  return (
    <Container>
      <Title>
        {quizAttempt.won ? (
          <>
            You won! <Ionicons name="happy-outline" size={24} color="green" />
          </>
        ) : (
          <>
            You lost! <Ionicons name="sad-outline" size={24} color="red" />
          </>
        )}
      </Title>
      <Subtitle>{`Quiz #${index + 1}`}</Subtitle>
      <ScoreContainer>
        <ScoreText>{`Correct Answers: ${correctAnswerCount}`}</ScoreText>
        <ScoreText>{`Wrong Answers: ${wrongAnswerCount}`}</ScoreText>
        <ScoreText>Total Score: {quizAttempt.points}</ScoreText>
      </ScoreContainer>
      <RetakeQuizButton onPress={onRetakePress}>
        <RetakeQuizButtonText>Retake quiz</RetakeQuizButtonText>
      </RetakeQuizButton>
      <ResultText>All attempts:</ResultText>
      <BorderBottom />
    </Container>
  );
};

export default QuizAttemptHeaderItem;
