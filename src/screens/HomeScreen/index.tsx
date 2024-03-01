import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import useFetchGBFSData from '../../api/hooks/useFetchGBFSData';
import {selectQuizAttempts} from '../../redux/reducers/quiz/selectors';
import {Container, Placeholder, StartNewQuizButton} from './styles';
import QuizAttemptListItem from '../../components/QuizAttemptListItem';
import {FlashList} from '@shopify/flash-list';

const HomeScreen = () => {
  const navigation = useNavigation();
  const attempts = useSelector(selectQuizAttempts);

  useFetchGBFSData();

  return (
    <Container>
      {/* Show a placeholder when we have no attempts */}
      {!attempts ||
        (attempts.length === 0 && (
          <Placeholder>
            {`This is where your quiz attempts are shown.\n\nClick on the button below to start a new quiz!`}{' '}
          </Placeholder>
        ))}
      {attempts && (
        <FlashList
          data={attempts}
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
      <StartNewQuizButton onPress={() => navigation.navigate('QuizModal')}>
        <Entypo name="plus" size={32} color="white" />
      </StartNewQuizButton>
    </Container>
  );
};

export default HomeScreen;
