import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from '../screens/Login/Login.component';
import {useRoutes} from './hooks/useIndex.routes';

export const Routes = () => {
  const {Stack} = useRoutes();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
