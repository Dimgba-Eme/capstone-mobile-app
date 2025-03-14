import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Onboarding' component={Onboarding} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
