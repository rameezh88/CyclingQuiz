import styled from 'styled-components/native';
import {colors} from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Placeholder = styled.Text`
  align-self: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  margin-horizontal: 30px;
`;

export const StartNewQuizButton = styled.Pressable`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  shadow-color: rgba(0, 0, 0, 0.24);
  shadow-offset: 0px 4px;
  z-index: 10;
  shadow-opacity: 1;
  background-color: ${colors.primary};
  position: absolute;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
`;
