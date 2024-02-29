import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Container, Placeholder, StartNewQuizButton} from './styles';
import {RootStackParamList} from '../../navigation';
import useFetchGBFSData from '../../api/hooks/useFetchGBFSData';

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, 'HomeScreen'>;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation();

  useFetchGBFSData();

  return (
    <Container>
      {/* Show a placeholder when we have no attempts */}
      {/* {!attempts ||
        (attempts.length === 0 && ( */}
      <Placeholder>
        {`This is where your quiz attempts are shown.\n\nClick on the button below to start a new quiz!`}{' '}
      </Placeholder>
      {/* ))} */}
      {/* Add symptom button that navigates to the symptom-tracker modal */}
      <StartNewQuizButton onPress={() => navigation.navigate('QuizScreen')}>
        <Entypo name="plus" size={32} color="white" />
      </StartNewQuizButton>
    </Container>
  );
};

export default HomeScreen;
