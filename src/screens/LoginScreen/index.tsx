import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {RootStackParamList} from '../../navigation';
import {
  Container,
  LoginButton,
  LoginButtonText,
  LoginTitle,
  TextInput,
} from './styles';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username.trim()) {
      Alert.alert('Error', 'Please enter a username without spaces');
      return;
    } else {
      navigation.replace('HomeScreen');
    }
  };

  return (
    <Container>
      <LoginTitle>Welcome to The Cycling Quiz!</LoginTitle>
      <TextInput
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
        autoCapitalize="none"
        autoComplete="username"
        textContentType="username"
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
        autoComplete="password"
        textContentType="password"
      />
      <LoginButton onPress={handleLogin}>
        <LoginButtonText>Login</LoginButtonText>
      </LoginButton>
    </Container>
  );
};

export default LoginScreen;
