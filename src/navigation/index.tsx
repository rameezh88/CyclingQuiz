import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LogoutButton from '../components/LogoutButton';
import {colors} from '../constants/colors';
import {logout} from '../redux/reducers/user';
import {selectUsername} from '../redux/reducers/user/selectors';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import QuizModalNavigator from './QuizModalNavigator';

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  QuizModal: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    dispatch(logout());
    navigation.dispatch(state => {
      return CommonActions.reset({
        ...state,
        routes: [
          {
            name: 'LoginScreen',
          },
        ],
        index: 0,
      });
    });
  };

  return (
    <RootStack.Navigator
      initialRouteName={username ? 'HomeScreen' : 'LoginScreen'}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <RootStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
        }}
      />
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: 'All Quizzes',
          headerRight: () => <LogoutButton handlePress={handleLogout} />,
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
