import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FloatButton} from '../../components/FloatButton/FloatButton.component';
import Logo from './../../assets/Logo.png';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledScroll = styled(ScrollView);
const url = 'https://sosty-api.azurewebsites.net/api/User/Register';

export const CreateAccount = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [user, setUser] = useState('');
  const [userAcceptance, setUserAcceptance] = useState('false');

  const registerUser = () => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        userType: user,
        firstName: userName,
        lastName: userLastname,
        phoneNumber: userPhone,
        origin: 'register',
      }),
    };

    if (userAcceptance == 'true') {
      fetch(url, requestOptions)
        .then(res => {
          if (res.status == 200) {
            res.json().then(data => {
              console.log(data.user);
              if (data.user) {
                Alert.alert('Registro Exitoso');
                navigation.navigate('Login');
              }
            });
          } else if (res.status == 400) {
            Alert.alert('Datos incorrectos o faltantes');
          } else {
            Alert.alert('Ocurrion un error en el proceso de registro');
          }
        })
        .catch(e => console.log(e));
    } else {
      Alert.alert(
        'Debe aceptar los terminos y condiciones para poder continuar',
      );
    }
  };
  return (
    <>
      <StyledScroll>
        <StyledView className="w-full h-full flex justify-around bg-white">
          <StyledView className="flex justify-center">
            <Image
              source={Logo}
              style={{marginTop: 15, marginLeft: 45, marginBottom: 32}}
            />
            <StyledView className="flex justify-center items-center">
              <StyledText className="text-xl w-80 mb-8">
                Por favor, crea una cuenta con tu email y contraseña
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText className="text-base w-80">Email</StyledText>
            <StyledTextInput
              placeholder="example@example.com"
              textContentType="emailAddress"
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setUserEmail(value)}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText className="text-base w-80">Contraseña</StyledText>
            <StyledTextInput
              placeholder="***********"
              textContentType="password"
              secureTextEntry={true}
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setUserPassword(value)}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText className="text-base w-80">Nombre(s)</StyledText>
            <StyledTextInput
              placeholder="Jhon"
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setUserName(value)}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText className="text-base w-80">Apellido(s)</StyledText>
            <StyledTextInput
              placeholder="Smith"
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setUserLastname(value)}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText className="text-base w-80">Celular</StyledText>
            <StyledTextInput
              placeholder="314 376 1024"
              keyboardType="numeric"
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setUserPhone(value)}
            />
          </StyledView>

          <StyledView className="flex justify-center mb-5 flex-row w-80 ml-14">
            <TouchableOpacity
              style={styles.outterRadio}
              onPress={() =>
                user == 'Inversionista' ? setUser('') : setUser('Inversionista')
              }>
              {user == 'Inversionista' && (
                <View style={styles.innerRadio}></View>
              )}
            </TouchableOpacity>
            <StyledText className="text-base w-80">
              Soy NeoGanadero - Quiero Invertir Dinero
            </StyledText>
          </StyledView>

          <StyledView className="flex justify-center  mb-5 flex-row w-80 ml-14">
            <TouchableOpacity
              style={styles.outterRadio}
              onPress={() =>
                user == 'Productor' ? setUser('') : setUser('Productor')
              }>
              {user == 'Productor' && <View style={styles.innerRadio}></View>}
            </TouchableOpacity>
            <StyledText className="text-base w-80">
              Soy Productor - Tengo Finca y Necesito Inversión
            </StyledText>
          </StyledView>

          <StyledView className="flex justify-center mb-5 flex-row w-80 ml-14">
            <TouchableOpacity
              style={styles.outterCB}
              onPress={() =>
                userAcceptance == 'false'
                  ? setUserAcceptance('true')
                  : setUserAcceptance('false')
              }>
              {userAcceptance == 'true' && <View style={styles.innerCB}></View>}
            </TouchableOpacity>
            <StyledText className="text-base w-80">
              Acepto
              <StyledText
                style={styles.greenText}
                onPress={() => Linking.openURL('http://google.com')}>
                {' '}
                Politica de privacidad{' '}
              </StyledText>
              <StyledText>y </StyledText>
              <StyledText
                style={styles.greenText}
                onPress={() => Linking.openURL('http://google.com')}>
                Terminos y Condiciones
              </StyledText>
            </StyledText>
          </StyledView>

          <StyledView className="items-center">
            <StyledView className="w-80 mb-4">
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => registerUser()}>
                <StyledText className="text-base" style={styles.registerText}>
                  Registrarme
                </StyledText>
              </TouchableOpacity>
            </StyledView>
          </StyledView>

          <StyledView className="items-center">
            <StyledView className="w-80 mb-4">
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                <StyledText className="text-base" style={styles.greenText}>
                  Cancelar
                </StyledText>
              </TouchableOpacity>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledScroll>
      <FloatButton />
    </>
  );
};

const styles = StyleSheet.create({
  outterRadio: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 4,
  },
  innerRadio: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#00BD56',
  },
  outterCB: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
  },
  innerCB: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#00BD56',
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#00BD56',
    borderRadius: 12,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#00BD56',
    borderRadius: 12,
    borderWidth: 2,
    padding: 10,
  },
  registerText: {
    color: '#FFFFFF',
  },
  greenText: {
    color: '#00BD56',
  },
});
// https://fonts.google.com/specimen/Montserrat
