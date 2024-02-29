import React from 'react';
import {Text} from 'react-native';
import {Container, Icon} from './styles';

const IconText = ({
  iconName,
  text,
  iconColor = 'black',
}: {
  iconName: string;
  text: string;
  iconColor?: string;
}) => {
  return (
    <Container>
      <Icon name={iconName} size={24} color={iconColor} />
      <Text>{text}</Text>
    </Container>
  );
};

export default IconText;
