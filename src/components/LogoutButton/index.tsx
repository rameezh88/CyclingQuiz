import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const CustomPressable = styled.Pressable`
  margin-right: 10px;
`;

export default function LogoutButton({handlePress}: {handlePress: () => void}) {
  return (
    <CustomPressable onPress={handlePress}>
      <Ionicons name="exit-outline" size={32} color="white" />
    </CustomPressable>
  );
}
