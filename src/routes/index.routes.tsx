import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from '../screens/Login/Login.component';
import {useRoutes} from './hooks/useIndex.routes';
import {ForgotPassword} from '../screens/Login/ForgotPassword.component';
import {CreateAccount} from '../screens/Login/CreateAccount.component';
import Investments from '../screens/Investments/Investments.component';
import { Menu } from '../components/Menu.component';

export const Routes = () => {
  const {Stack} = useRoutes();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Investments" component={Investments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
