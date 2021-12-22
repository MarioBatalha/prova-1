import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './routeNavigations';

import Home from '../screen/Home';
import List from '../screen/List';
import Details from '../screen/Details';


const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="List"
        component={List}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
