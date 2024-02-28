import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import QuizScreen from '../screens/QuizScreen';
import {colors} from '../constants/colors';

export type RootStackParamList = {
  HomeScreen: undefined;
  QuizScreen: undefined;
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
        name="QuizScreen"
        component={QuizScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
