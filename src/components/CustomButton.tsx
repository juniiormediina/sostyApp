import {Text, TouchableOpacity} from 'react-native';
import {PrimaryButtonStyle, SecondaryButtonStyle} from './BaseStyles';
import React from 'react';

interface ButtonProps {
  onPress?: any;
  title: string;
  secondaryBtn?: boolean;
}

export const CustomButton = ({onPress, title, secondaryBtn}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        secondaryBtn ? SecondaryButtonStyle.button : PrimaryButtonStyle.button
      }>
      <Text
        style={
          secondaryBtn ? SecondaryButtonStyle.text : PrimaryButtonStyle.text
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
