import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Investments() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Investments.component</Text>
    </View>
  );
}
