import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconText from '../../components/IconText';
import QuizQuestionComponent from '../../components/QuizQuestion';
import useGetQuizQuestion from '../../hooks/useGetQuizQuestion';
import {CloseButton, Container, Header, HeaderLeftContainer} from './styles';
import {QuizAnswer} from '../../common/types';
import {
  CORRECT_ANSWER_POINTS,
  WRONG_ANSWER_POINTS,
} from '../../api/utils/constants';

const QuizScreen = () => {
  const navigation = useNavigation();
  const [points, setPoints] = useState(0);
  const [seconds, setSeconds] = useState(10);

  const {currentQuizQuestion, getNextQuestion} = useGetQuizQuestion();

  useEffect(() => {
    getNextQuestion();

    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      // Quiz ended
      // console.log('Quiz ended');
    }
  }, [seconds]);

  const handleClose = () => {
    navigation.goBack();
  };

  const formattedCountdownTime = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

  const onAnswerSelected = (answer: QuizAnswer) => {
    // console.log('selecting answer', answer);
    setPoints(prevPoints =>
      answer.correct
        ? prevPoints + CORRECT_ANSWER_POINTS
        : prevPoints - WRONG_ANSWER_POINTS,
    );

    setTimeout(() => {
      getNextQuestion();
    }, 200);
  };

  return (
    <Container>
      <Header>
        <HeaderLeftContainer>
          <IconText iconName="time-outline" text={formattedCountdownTime} />
          <IconText
            iconName="star-outline"
            text={`${points}`}
            iconColor="gold"
          />
        </HeaderLeftContainer>
        <CloseButton onPress={handleClose}>
          <Ionicons name="close" size={32} color="black" />
        </CloseButton>
      </Header>
      {currentQuizQuestion && (
        <QuizQuestionComponent
          quizQuestion={currentQuizQuestion}
          onAnswerSelected={onAnswerSelected}
        />
      )}
    </Container>
  );
};

export default QuizScreen;
