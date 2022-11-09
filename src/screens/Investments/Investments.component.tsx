import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import { Menu } from '../../components/Menu.component';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Investments() {
  const navigation = useNavigation();
  const getUserData = () =>{
    AsyncStorage.getItem("userData").then(
      res => console.log(JSON.parse(res))
    )
  }

  useEffect(() => getUserData(),[])

  return (
    
    <View>
      <Text>Investments.component</Text>
      <Menu activeRoute='investment'></Menu>
    </View>
  );
}
