import {styled} from 'nativewind';
import React from 'react';
import {Button, Image, Text, TextInput, View} from 'react-native';
import Logo from '../../assets/Logo.png';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);

export const Login = () => {
  return (
    <StyledView className="w-full h-full flex justify-around items-center">
      <StyledView className="flex justify-center ">
        <Image source={Logo} />
      </StyledView>

      <StyledView className="flex items-center">
        <StyledText className="w-80 mb-12 text-center text-xl">
          !Bienvenido a Sosty!
        </StyledText>
        <StyledText className="w-80 text-center text-xl">
          Por favor, entra con tu email y contraseña
        </StyledText>
      </StyledView>

      <StyledView className="flex justify-center">
        <StyledText>Email</StyledText>
        <StyledTextInput
          className="border-2 border-gray-300 rounded-lg w-80 "
          placeholder="email@example.com"
        />
      </StyledView>

      <StyledView className="flex justify-center">
        <StyledView className="flex flex-row justify-between">
          <StyledText>Contraseña</StyledText>
          <StyledText style={{color: '#00BD56'}}>
            ¿Olvido su contraseña?
          </StyledText>
        </StyledView>
        <StyledTextInput
          className="border-2 border-gray-300 rounded-lg w-80 "
          textContentType="password"
          placeholder="********"
          secureTextEntry={true}
        />
      </StyledView>

      <StyledView className="flex justify-center w-80">
        <StyledView className="flex flex-row justify-between pb-4">
          <StyledText>¿Nuevo en Sosty?</StyledText>
          <StyledText style={{color: '#00BD56'}}>
            Crea una cuenta aquí
          </StyledText>
        </StyledView>
        <StyledButton
          color="#00BD56"
          className="rounded-lg w-80 "
          title={'Ingresar'}></StyledButton>
      </StyledView>
    </StyledView>
  );
};
