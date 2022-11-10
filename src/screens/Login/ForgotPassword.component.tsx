import {styled} from 'nativewind';
import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import Logo from '../../assets/Logo.png';
import {
  InputStyle01,
  TextStyle01,
  TextStyle02,
  TextStyle03,
} from '../../components/BaseStyles';
import {CustomButton} from '../../components/CustomButton';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

export const ForgotPassword = () => {
  return (
    <StyledView className="w-full h-full flex justify-around items-center">
      <StyledView className="flex justify-center w-3/4">
        <Image source={Logo} />
      </StyledView>

      <StyledView className="flex w-3/4">
        <StyledText style={TextStyle01.text} className="text-center mb-5">
          ¿Olvidaste tu contraseña?
        </StyledText>

        <StyledText style={TextStyle02.text} className="text-center mb-8">
          Por favor digita tu correo electronico y a continuacion te enviaremos
          un codigo de confirmacion
        </StyledText>

        <StyledText style={TextStyle03.text} className={'mb-3'}>
          Correo Electronico
        </StyledText>

        <StyledTextInput
          style={InputStyle01.input}
          placeholder={'correo@mail.com'}
          textContentType={'emailAddress'}
          placeholderTextColor={'#D3D3D3'}
        />
      </StyledView>

      <StyledView className="flex w-3/4">
        <StyledView className={'my-2'}>
          <CustomButton title={'Enviar Codigo'} />
        </StyledView>

        <StyledView className={'my-2'}>
          <CustomButton title={'Cancelar'} secondaryBtn />
        </StyledView>
      </StyledView>
    </StyledView>
  );
};
