import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: start;
  align-items: start;
  margin: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ScoreContainer = styled.View`
  margin-bottom: 20px;
`;

export const ScoreText = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ResultText = styled.Text`
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
