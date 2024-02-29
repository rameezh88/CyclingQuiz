import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useReducer, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {QuizAnswer} from '../../common/types';
import IconText from '../../components/IconText';
import QuizQuestionComponent from '../../components/QuizQuestion';
import useGetQuizQuestion from '../../hooks/useGetQuizQuestion';
import {quizResultsReducer} from './reducer';
import {CloseButton, Container, Header, HeaderLeftContainer} from './styles';
import {useDispatch} from 'react-redux';
import {addAttempt} from '../../redux/reducers/quiz';

const QuizScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(10);
  const [quizResults, quizResultsDispatch] = useReducer(quizResultsReducer, {
    points: 0,
    won: false,
    answeredQuestions: [],
  });

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
      if (quizResults.points >= 0) {
        quizResultsDispatch({type: 'SET_WON'});
      }

      dispatch(
        addAttempt({
          ...quizResults,
          won: quizResults.points >= 0,
        }),
      );
    }
  }, [seconds, quizResults.points]);

  const handleClose = () => {
    navigation.goBack();
  };

  const formattedCountdownTime = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

  const onAnswerSelected = (answer: QuizAnswer) => {
    quizResultsDispatch({
      type: 'ANSWER_SELECTED',
      question: currentQuizQuestion?.question,
      selectedAnswer: answer,
    });

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
            text={`${quizResults.points}`}
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
