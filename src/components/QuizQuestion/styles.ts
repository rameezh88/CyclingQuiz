import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const QuestionText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AnswerContainer = styled.Pressable`
  flex-direction: row;
  height: 40px;
  align-items: center;
  margin-right: 40px;
`;

export const AnswerText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;
