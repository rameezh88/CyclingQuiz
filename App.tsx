/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './src/navigation';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    flex: 1,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        {/* <View style={{flex: 1, backgroundColor: '#fff'}}> */}
        <StatusBar
          barStyle="dark-content"
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {/* <HomeScreen /> */}
        <RootNavigator />
        {/* </View> */}
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
