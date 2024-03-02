import {CommonActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useRef, useState} from 'react';
import {Alert, TextInput} from 'react-native';
import {RootStackParamList} from '../../navigation';
import {
  Container,
  LoginButton,
  LoginButtonText,
  LoginTitle,
  CustomTextInput,
} from './styles';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/reducers/user';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const passwordInput = useRef<TextInput>(null);

  const handleLogin = () => {
    if (!username.trim()) {
      Alert.alert('Error', 'Please enter a username without spaces');
      return;
    } else {
      dispatch(login({username}));
      navigation.dispatch(state => {
        return CommonActions.reset({
          ...state,
          routes: [
            {
              name: 'HomeScreen',
            },
          ],
          index: 0,
        });
      });
    }
  };

  return (
    <Container>
      <LoginTitle>Welcome to The Cycling Quiz!</LoginTitle>
      <CustomTextInput
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
        autoCapitalize="none"
        autoComplete="username"
        textContentType="username"
        returnKeyType="next"
        onSubmitEditing={() => passwordInput.current?.focus()}
      />
      <CustomTextInput
        ref={passwordInput}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
        autoComplete="password"
        textContentType="password"
        returnKeyType="done"
        onSubmitEditing={handleLogin}
      />
      <LoginButton onPress={handleLogin}>
        <LoginButtonText>Login</LoginButtonText>
      </LoginButton>
    </Container>
  );
};

export default LoginScreen;
