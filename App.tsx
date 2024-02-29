/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <RootNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
