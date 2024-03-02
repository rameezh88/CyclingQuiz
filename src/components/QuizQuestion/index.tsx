import React, {memo, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {QuizAnswer, QuizQuestion} from '../../common/types';
import {Container, QuestionText, AnswerContainer, AnswerText} from './styles';

interface QuizQuestionProps {
  quizQuestion: QuizQuestion;
  onAnswerSelected?: (answer: QuizAnswer) => void;
}

const QuizQuestionComponent: React.FC<QuizQuestionProps> = ({
  quizQuestion,
  onAnswerSelected,
}) => {
  const {question, answers} = quizQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedAnswerCorrect, setSelectedAnswerCorrect] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    setSelectedAnswer(null);
    setSelectedAnswerCorrect(null);
  }, [quizQuestion]);

  const handleAnswerSelect = (index: number, answer: QuizAnswer) => {
    setSelectedAnswer(index);
    setSelectedAnswerCorrect(answer.correct);
    onAnswerSelected && onAnswerSelected(answer);
  };

  return (
    <Container>
      <QuestionText>{question}</QuestionText>
      {answers.map((answer, index) => (
        <AnswerContainer
          key={answer.answer}
          disabled={selectedAnswer !== null}
          onPress={() => {
            handleAnswerSelect(index, answer);
          }}>
          <AnswerText>{answer.answer}</AnswerText>
          {selectedAnswer === index && (
            <Ionicons
              name={selectedAnswerCorrect ? 'checkmark-outline' : 'close'}
              size={25}
              color={selectedAnswerCorrect ? 'green' : 'red'}
            />
          )}
        </AnswerContainer>
      ))}
    </Container>
  );
};

export default memo(QuizQuestionComponent);
