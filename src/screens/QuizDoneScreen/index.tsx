import {CommonActions, useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {useSelector} from 'react-redux';
import {Header} from '../../common/styles';
import CloseButton from '../../components/CloseButton';
import QuizAttemptHeaderItem from '../../components/QuizAttemptHeaderItem';
import QuizAttemptListItem from '../../components/QuizAttemptListItem';
import {selectQuizAttempts} from '../../redux/reducers/quiz/selectors';
import {Container} from './styles';

const QuizDoneScreen = () => {
  const navigation = useNavigation();
  const attempts = useSelector(selectQuizAttempts);

  const handleClose = () => {
    navigation.navigate('HomeScreen');
  };

  const handleRetakePress = () => {
    navigation.dispatch(state => {
      return CommonActions.reset({
        ...state,
        routes: [
          {
            name: 'QuizScreen',
          },
        ],
        index: 0,
      });
    });
  };

  return (
    <Container>
      <Header>
        <CloseButton handleClose={handleClose} />
      </Header>
      {attempts && (
        <FlashList
          data={attempts}
          ListHeaderComponent={() => (
            <QuizAttemptHeaderItem
              index={attempts.length - 1}
              quizAttempt={attempts[attempts.length - 1]}
              onRetakePress={handleRetakePress}
            />
          )}
          renderItem={({item, index}) => (
            <QuizAttemptListItem
              key={item.id}
              quizAttempt={item}
              index={index}
            />
          )}
          estimatedItemSize={200}
        />
      )}
    </Container>
  );
};

export default QuizDoneScreen;
