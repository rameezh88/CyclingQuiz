import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {CloseButton, Container, Header, HeaderLeftContainer} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconText from '../../components/IconText';

const QuizScreen = () => {
  const navigation = useNavigation();
  const [points, setPoints] = useState(0);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
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

  const formattedCountdownTime = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

  const handleClose = () => {
    navigation.goBack();
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
    </Container>
  );
};

export default QuizScreen;
