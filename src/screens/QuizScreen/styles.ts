import styled from 'styled-components/native';
import {colors} from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const TopContainer = styled.View`
  flex: 1;
  padding: 20px;
  width: 100%;
`;

export const BottomContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CloseButton = styled.Pressable``;

export const FinishButton = styled.Pressable`
  background-color: ${colors.primary};
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FinishButtonText = styled.Text`
  color: white;
`;
