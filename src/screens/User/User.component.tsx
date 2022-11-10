import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Menu} from '../../components/Menu.component';
import Logo from './../../assets/Logo.png';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);
const StyledScroll = styled(ScrollView);
const url = 'https://sosty-api.azurewebsites.net/api/User/GetProfileDetails';

export const User = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [birthData, setBirthDate] = useState('');
  const [docType, setDocType] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [userDataStorage, setUserDataStorage] = useState({});
  const [userId, setuserId] = useState('');
  const [userType, setuserType] = useState('');

  const getUserData = () => {
    AsyncStorage.getItem('userData').then(res => {
      const requestOptions = {
        method: 'GET',
        headers: {Authorization: 'Bearer ' + JSON.parse(res).accessToken},
      };
      const finalUrl =
        url +
        '?userID=' +
        JSON.parse(res).user.userID +
        '&userType=' +
        JSON.parse(res).user.userType;
      fetch(finalUrl, requestOptions).then(res =>
        res.status == 200
          ? res.json().then(data => {
              setUserName(data.firstName);
              setUserLastName(data.lastName);
              setDocType(data.documentType);
              setDocNumber(data.documentNumber);
            })
          : Alert.alert('Algo salio mal'),
      );
    });
  };

  useEffect(() => getUserData(), []);

  const logOut = () => {
    AsyncStorage.removeItem('userData');
    navigation.navigate('Login');
  };
  return (
    <StyledView className="w-full h-full flex justify-around items-center">
      <StyledScroll className="w-full">
        <StyledView className="w-full h-full flex justify-around items-center ">
          <StyledView className="flex justify-center">
            <Image
              source={Logo}
              style={{marginTop: 15, marginLeft: 45, marginBottom: 32}}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText className="text-base w-80">Nombre(s)</StyledText>
            <StyledTextInput
              placeholder="Jhon"
              value={userName}
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setUserName(value)}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText className="text-base w-80">Apellido(s)</StyledText>
            <StyledTextInput
              placeholder="Doe"
              value={userLastName}
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setUserLastName(value)}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText className="text-base w-80">
              Fecha de nacimiento
            </StyledText>
            <StyledTextInput
              placeholder="20/10/1999"
              value={birthData}
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setBirthDate(value)}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText className="text-base w-80">
              Tipo de documento
            </StyledText>
            <StyledTextInput
              placeholder="CC"
              value={docType}
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setDocType(value)}
            />
          </StyledView>

          <StyledView className="flex justify-center items-center">
            <StyledText className="text-base w-80">
              Numero de documento
            </StyledText>
            <StyledTextInput
              placeholder="12345678"
              value={docNumber}
              className="w-80  border-2 border-gray-300 rounded-lg mb-9"
              onChangeText={value => setDocNumber(value)}
            />
          </StyledView>

          <StyledView className="items-center">
            <StyledView className="w-80 mb-4">
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => logOut()}>
                <StyledText className="text-base" style={styles.registerText}>
                  Cerrar Sesion
                </StyledText>
              </TouchableOpacity>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledScroll>
      <Menu activeRoute="user"></Menu>
    </StyledView>
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
