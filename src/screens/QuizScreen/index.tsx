import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useReducer, useState} from 'react';
import {useDispatch} from 'react-redux';
import {makeId} from '../../api/utils';
import {Header, HeaderLeftContainer} from '../../common/styles';
import {QuizAnswer} from '../../common/types';
import CloseButton from '../../components/CloseButton';
import IconText from '../../components/IconText';
import QuizQuestionComponent from '../../components/QuizQuestion';
import useGetQuizQuestion from '../../hooks/useGetQuizQuestion';
import {QuizStackParamList} from '../../navigation/QuizModalNavigator';
import {addAttempt} from '../../redux/reducers/quiz';
import {quizResultsReducer} from './reducer';
import {Container, LoadingText, TopContainer} from './styles';

const QuizScreen = () => {
  const navigation = useNavigation<StackNavigationProp<QuizStackParamList>>();
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(10);
  const [quizResults, quizResultsDispatch] = useReducer(quizResultsReducer, {
    points: 0,
    won: false,
    answeredQuestions: [],
  });

  const {
    currentQuizQuestion,
    getNextQuestion,
    isLoading: isQuestionLoading,
  } = useGetQuizQuestion();

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
      if (quizResults.answeredQuestions.length > 0) {
        if (quizResults.points >= 0) {
          quizResultsDispatch({type: 'SET_WON'});
        }

        dispatch(
          addAttempt({
            ...quizResults,
            id: makeId(5),
            won: quizResults.points >= 0,
          }),
        );
      }

      setTimeout(() => {
        navigation.navigate('QuizDone');
      }, 150);
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
        <CloseButton handleClose={handleClose} />
      </Header>
      <TopContainer>
        {isQuestionLoading && <LoadingText>Loading question...</LoadingText>}
        {currentQuizQuestion && !isQuestionLoading && (
          <QuizQuestionComponent
            quizQuestion={currentQuizQuestion}
            onAnswerSelected={onAnswerSelected}
          />
        )}
      </TopContainer>
    </Container>
  );
};

export default QuizScreen;
