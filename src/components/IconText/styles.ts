import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming Ionicons is used as the vector icon library
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Icon = styled(Ionicons)`
  margin-right: 10px;
`;
