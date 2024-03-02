import styled from 'styled-components/native';
import {colors} from '../../constants/colors';
import {Title} from '../../common/styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginTitle = styled(Title)`
  margin-bottom: 20px;
  padding: 20px;
  width: 80%;
  text-align: center;
`;

export const TextInput = styled.TextInput`
  height: 45px;
  width: 80%;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 20px;
  padding-horizontal: 10px;
`;

export const LoginButton = styled.Pressable`
  background-color: ${colors.primary};
  height: 50px;
  width: 80%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
  margin-bottom: 20px;
`;

export const LoginButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;
