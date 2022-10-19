import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {styled} from 'nativewind';
import Logo from './../../assets/Logo.png';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

export const Login = () => {
  return (
    <StyledView className="w-full h-full flex justify-center">
      <StyledView className="flex justify-center">
        <Image source={Logo} />
      </StyledView>
      <StyledView className="flex justify-center">
        <StyledText className="text-center">Bienvenido a Sosty!</StyledText>
        <StyledText className="text-center">
          Por favor, entra con tu email y contraseña
        </StyledText>
      </StyledView>
      <StyledView className="flex justify-center">
        <StyledTextInput className="bg-slate-900" />
      </StyledView>
    </StyledView>
  );
};
