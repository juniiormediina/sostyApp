import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Help} from '../screens/Help/Help.component';
import Investments from '../screens/Investments/Investments.component';
import {CreateAccount} from '../screens/Login/CreateAccount.component';
import {ForgotPassword} from '../screens/Login/ForgotPassword.component';
import {Login} from '../screens/Login/Login.component';
import {SearchProyect} from '../screens/Search/SearchProyect.component';
import {User} from '../screens/User/User.component';
import {useRoutes} from './hooks/useIndex.routes';

export const Routes = () => {
  const {Stack} = useRoutes();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Investments" component={Investments} />
        <Stack.Screen name="SearchProyect" component={SearchProyect} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="User" component={User} />
        {/* <Stack.Screen name="Menu" component={Menu} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
