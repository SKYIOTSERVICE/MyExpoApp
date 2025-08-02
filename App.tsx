import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Alert } from 'react-native';

import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';
import CanteenScreen from './src/CanteenScreen';
import Office from './src/Office';
import MillScreen from './src/MillScreen';
import BathroomScreen from './src/BathroomScreen';
import BoilerScreen from './src/BoilerScreen';
import Hatchery1 from './src/Hatchery1';
import Hatchery2 from './src/Hatchery2';
import Villa from './src/Villa';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Canteen: undefined;
  Office:undefined
  Mill: undefined;
  Bathroom: undefined;
  Boiler: undefined;
  Hatchery1: undefined;
  Hatchery2: undefined;
  Villa: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const withLogout = (navigation: any) => ({
  headerBackVisible: false,
  gestureEnabled: false,
  headerRight: () => (
    <Button
      onPress={() =>
        Alert.alert('Logout', 'Are you sure you want to logout?', [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Logout',
            style: 'destructive',
            onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Login' }] }),
          },
        ])
      }
      title="Logout"
      color="#FF3B30"
    />
  ),
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => withLogout(navigation)} />
        <Stack.Screen name="Canteen" component={CanteenScreen}/>
        <Stack.Screen name="Office" component={Office}/>
        <Stack.Screen name="Mill" component={MillScreen}/>
        <Stack.Screen name="Bathroom" component={BathroomScreen}/>
        <Stack.Screen name="Boiler" component={BoilerScreen}/>
        <Stack.Screen name="Hatchery1" component={Hatchery1}/>
        <Stack.Screen name="Hatchery2" component={Hatchery2}/>
        <Stack.Screen name="Villa" component={Villa}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
