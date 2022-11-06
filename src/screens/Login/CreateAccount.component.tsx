import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import {styled} from 'nativewind';
import Logo from './../../assets/Logo.png';
import { ScrollView } from 'react-native';
import { LinkingContext, useNavigation } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledScroll = styled(ScrollView);


export const CreateAccount = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState('');
    const [userAcceptance, setUserAcceptance] = useState('false');
  return (
    <StyledScroll >
    
        <StyledView className="w-full h-full flex justify-around bg-white">
            <StyledView className="flex justify-center">
                <Image source={Logo} style={{marginTop: 15, marginLeft:45, marginBottom:32}}/>
                <StyledView className="flex justify-center items-center">
                    <StyledText className="text-xl w-80 mb-8" >
                        Por favor, crea una cuenta con tu email y contraseña
                    </StyledText>
                </StyledView>
            </StyledView>

        
            <StyledView className="flex justify-center items-center">
                <StyledText className="text-base w-80">
                Email
                </StyledText>
                <StyledTextInput placeholder="example@example.com" textContentType="emailAddress" className="w-80  border-2 border-gray-300 rounded-lg mb-9" />
            </StyledView>

            <StyledView className="flex justify-center items-center">
                <StyledText className="text-base w-80">
                Contraseña
                </StyledText>
                <StyledTextInput placeholder="***********" textContentType="password" secureTextEntry={true} className="w-80  border-2 border-gray-300 rounded-lg mb-9" />
            </StyledView>

            <StyledView className="flex justify-center items-center">
                <StyledText className="text-base w-80">
                Nombre(s)
                </StyledText>
                <StyledTextInput placeholder="Jhon" className="w-80  border-2 border-gray-300 rounded-lg mb-9" />
            </StyledView>

            <StyledView className="flex justify-center items-center">
                <StyledText className="text-base w-80">
                Apellido(s)
                </StyledText>
                <StyledTextInput placeholder="Smith" className="w-80  border-2 border-gray-300 rounded-lg mb-9" />
            </StyledView>

            <StyledView className="flex justify-center items-center">
                <StyledText className="text-base w-80">
                Celular
                </StyledText>
                <StyledTextInput placeholder="314 376 1024" keyboardType="numeric" className="w-80  border-2 border-gray-300 rounded-lg mb-9" />
            </StyledView>

            <StyledView className="flex justify-center mb-5 flex-row w-80 ml-14">
                <TouchableOpacity style={styles.outterRadio} onPress={() => user == "Investor" ? setUser('') : setUser("Investor")}>
                    {user == "Investor" && <View style={styles.innerRadio}></View>}
                </TouchableOpacity>
                <StyledText className="text-base w-80">
                Soy NeoGanadero - Quiero Invertir Dinero
                </StyledText>
            </StyledView>

            <StyledView className="flex justify-center  mb-5 flex-row w-80 ml-14">
                <TouchableOpacity style={styles.outterRadio } onPress={() => user == "Producer" ? setUser('') : setUser("Producer")}>
                {user == "Producer" && <View style={styles.innerRadio}></View>}
                </TouchableOpacity>
                <StyledText className="text-base w-80">
                Soy Productor - Tengo Finca y Necesito Inversión
                </StyledText>
            </StyledView>

            <StyledView className="flex justify-center mb-5 flex-row w-80 ml-14">
                <TouchableOpacity style={styles.outterCB} onPress={() => userAcceptance=='false' ? setUserAcceptance("true") : setUserAcceptance("false")}>
                {userAcceptance == "true" && <View style={styles.innerCB}></View>}
                </TouchableOpacity>
                <StyledText className="text-base w-80">
                    Acepto 
                    <StyledText style={styles.greenText} onPress={()=>Linking.openURL('http://google.com')}> Politica de privacidad </StyledText>
                    <StyledText>y </StyledText>
                    <StyledText style={styles.greenText} onPress={()=>Linking.openURL('http://google.com')} >Terminos y Condiciones</StyledText> 
                </StyledText>
            </StyledView>

        
            <StyledView className='items-center'>
                <StyledView className='w-80 mb-4'>
                    <TouchableOpacity style={styles.primaryButton} disabled={user=='' || userAcceptance!='true'}>
                        <StyledText className="text-base" style={styles.registerText}>Registrarme</StyledText>
                    </TouchableOpacity>
                </StyledView>
            </StyledView>

            <StyledView className='items-center'>
                <StyledView className='w-80 mb-4' >
                        <TouchableOpacity style={styles.button} onPress={() =>
            navigation.navigate('Login')
          }>
                            <StyledText className="text-base" style={styles.greenText}>Cancelar</StyledText>
                        </TouchableOpacity>
                </StyledView>
            </StyledView>

        </StyledView>
    </StyledScroll>
  );
};



const styles = StyleSheet.create({

    outterRadio:{
        width:20,
        height:20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#D3D3D3",
        justifyContent: "center",
        alignItems: "center",
        marginRight:5,
        marginTop:4
    },
    innerRadio:{
        width:12,
        height:12,
        borderRadius: 12,
        backgroundColor: "#00BD56"
    },
    outterCB:{
        width:20,
        height:20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#D3D3D3",
        justifyContent: "center",
        alignItems: "center",
        marginRight:5,
        marginTop: 5
    },
    innerCB:{
        width:12,
        height:12,
        borderRadius: 3,
        backgroundColor: "#00BD56"
    },
    primaryButton: {
      alignItems: "center",
      backgroundColor: "#00BD56",
      borderRadius: 12,
      padding: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderColor : "#00BD56",
      borderRadius: 12,
      borderWidth: 2,
      padding: 10
    },
    registerText:{
        color: "#FFFFFF"
    },
    greenText:{
        color: "#00BD56"
    }
})
// https://fonts.google.com/specimen/Montserrat