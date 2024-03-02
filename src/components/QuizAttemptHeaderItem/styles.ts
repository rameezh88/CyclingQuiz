import styled from 'styled-components/native';
import {colors} from '../../constants/colors';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const ScoreContainer = styled.View`
  margin-bottom: 20px;
`;

export const ScoreText = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ResultText = styled.Text`
  align-self: flex-start;
  font-size: 20px;
  font-weight: bold;
`;

export const BorderBottom = styled.View`
  height: 1px;
  width: 100%;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: grey;
`;

export const RetakeQuizButton = styled.Pressable`
  background-color: ${colors.primary};
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
  margin-bottom: 20px;
`;

export const RetakeQuizButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;
