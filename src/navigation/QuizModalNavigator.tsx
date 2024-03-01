import {createStackNavigator} from '@react-navigation/stack';
import QuizScreen from '../screens/QuizScreen';
import QuizDoneScreen from '../screens/QuizDoneScreen';

export type QuizStackParamList = {
  QuizScreen: undefined;
  QuizDone: undefined;
};

const QuizStack = createStackNavigator<QuizStackParamList>();

const QuizModalNavigator = () => {
  return (
    <QuizStack.Navigator
      initialRouteName="QuizScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <QuizStack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
      />
      <QuizStack.Screen
        name="QuizDone"
        component={QuizDoneScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </QuizStack.Navigator>
  );
};

export default QuizModalNavigator;
