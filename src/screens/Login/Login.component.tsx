import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useState} from 'react';
import {Alert, Button, Image, Text, TextInput, View} from 'react-native';
import Logo from '../../assets/Logo.png';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);
const url = 'https://sosty-api.azurewebsites.net/api/User/Login';

const userData = {
  email: '',
  password: '',
};

export const Login = () => {
  const [emailUSer, setEmail] = useState('');
  const [passwordUser, setPassword] = useState('');
  const navigation = useNavigation();
  const getSostyToken = () => {
    // fetch(url).
    console.log('Login');
    // console.log(email)
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: emailUSer,
        password: passwordUser,
      }),
    };

    fetch(url, requestOptions)
      .then(res =>
        res.status == 200
          ? res.json().then(data => {
              console.log(data.accessToken);
              if (data.accessToken) {
                AsyncStorage.setItem('userData', JSON.stringify(data));
                navigation.navigate('Investments');
              }
            })
          : Alert.alert('Email o contraseña incorrectos'),
      )
      .catch(e => console.log(e));
  };
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
          onChangeText={value => setEmail(value)}
        />
      </StyledView>

      <StyledView className="flex justify-center">
        <StyledView className="flex flex-row justify-between">
          <StyledText>Contraseña</StyledText>
          <StyledText
            style={{color: '#00BD56'}}
            onPress={() => navigation.navigate('ForgotPassword')}>
            ¿Olvido su contraseña?
          </StyledText>
        </StyledView>
        <StyledTextInput
          className="border-2 border-gray-300 rounded-lg w-80 "
          textContentType="password"
          placeholder="********"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
      </StyledView>

      <StyledView className="flex justify-center w-80">
        <StyledView className="flex flex-row justify-between pb-4">
          <StyledText>¿Nuevo en Sosty?</StyledText>
          <StyledText
            style={{color: '#00BD56'}}
            onPress={() => navigation.navigate('CreateAccount')}>
            Crea una cuenta aquí
          </StyledText>
        </StyledView>
        <StyledButton
          color="#00BD56"
          className="rounded-lg w-80 "
          title={'Ingresar'}
          onPress={() => getSostyToken()}></StyledButton>
      </StyledView>
    </StyledView>
  );
};
