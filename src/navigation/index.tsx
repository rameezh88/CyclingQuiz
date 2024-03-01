import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {colors} from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';
import QuizModalNavigator from './QuizModalNavigator';

export type RootStackParamList = {
  HomeScreen: undefined;
  QuizModal: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: 'All Quizzes',
        }}
      />
      <RootStack.Screen
        name="QuizModal"
        component={QuizModalNavigator}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
