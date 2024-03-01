import React from 'react';
import {Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CloseButton({handleClose}: {handleClose: () => void}) {
  return (
    <Pressable onPress={handleClose}>
      <Ionicons name="close" size={32} color="black" />
    </Pressable>
  );
}
