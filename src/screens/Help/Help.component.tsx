import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, { useState } from 'react';
import {Button, Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Logo from '../../assets/Logo.png';
import { TextStyle01 } from '../../components/BaseStyles';
import { Menu } from '../../components/Menu.component';
import { Separator } from '../../components/Separator';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);
const StyledScroll = styled(ScrollView);

export const Help = () => {
  const navigation = useNavigation();
  const [aboutSosty, setAboutSosty]= useState([false,false,false,false,false,false])
//   const [aboutSosty, setAboutSosty]= useState(false)
  const [aboutNeoGanader, setAboutNeoGanader]= useState(false)
  const [aboutProducer, setAboutProducer]= useState(false)
  const [aboutProyect, setAboutProyect]= useState(false)
  return (
    <StyledView className="w-full h-full flex justify-around items-center">
        <StyledScroll className='w-full'>
            <StyledView className="w-full h-full flex justify-around items-center bg-gray-300">


                <StyledView className="flex justify-center items-center w-80 p-5 rounded-xl bg-white m-5">
                    <StyledView className="w-full ">
                        <StyledText style={styles.textstyle} font-medium className="text-xl mb-6 ">Acerca de Sosty</StyledText>
                            <StyledView className="p-3.5">
                                <TouchableOpacity onPress={()=>aboutSosty[0]==false ? setAboutSosty([true,false,false,false,false,false]): setAboutSosty([false,false,false,false,false,false])}>
                                    <StyledText className="text-base" style={styles.textstyle}>
                                        Toca para abrir
                                    </StyledText>
                                </TouchableOpacity>
                                <StyledView className='p-3'>
                                    {aboutSosty[0] == true && 
                                    <TouchableOpacity onPress={()=>aboutSosty[1]==false ? setAboutSosty([true,true,false,false,false,false]): setAboutSosty([true,false,false,false,false,false])}>
                                        <StyledText className="text-base mb-3" style={styles.textstyle}>
                                            ¿Qué es Sosty?
                                        </StyledText>
                                    </TouchableOpacity>}

                                    {aboutSosty[1] == true && <StyledText className="mb-1 text-sm" style={styles.innerHelpText}>Sosty es una plataforma de ganadería colaborativa, permite conectar a productores con ganaderos digitales para que puedan comercializar ganado colaborativamente.</StyledText> }
                                    {aboutSosty[0] == true && <Separator></Separator>}
                                    {aboutSosty[0] == true && 
                                    <TouchableOpacity onPress={()=>aboutSosty[2]==false ? setAboutSosty([true,false,true,false,false,false]): setAboutSosty([true,false,false,false,false,false])}>
                                        <StyledText className="text-base mb-2" style={styles.textstyle}>
                                            ¿Cuál es el propósito de Sosty?
                                        </StyledText>
                                    </TouchableOpacity>}
                                    {aboutSosty[2] == true &&
                                    <StyledText  style={styles.innerHelpText} className='mb-1'>
                                        Democratizar la participación en proyectos de ganadería sostenible, conectando a consumidores con productores que implementen buenas prácticas.
                                    </StyledText>}
                                    {aboutSosty[0] == true && <Separator></Separator>}
                                    {aboutSosty[0] == true &&
                                    <TouchableOpacity onPress={()=>aboutSosty[3]==false ? setAboutSosty([true,false,false,true,false,false]): setAboutSosty([true,false,false,false,false,false])}>
                                        <StyledText className="text-base mb-2" style={styles.textstyle}>
                                            ¿Cómo funciona la plataforma Sosty?
                                        </StyledText>
                                    </TouchableOpacity>}
                                    {aboutSosty[3] == true &&
                                    <StyledText  style={styles.innerHelpText} className='mb-1'>
                                        Sosty es un medio para que puedas participar en proyectos de colaboración empresarial agropecuarios, enfocados en ganadería. Compra, hazle seguimiento y vende ganado a través de Sosty.
                                    </StyledText>}
                                    {aboutSosty[0] == true && <Separator></Separator>}
                                    {aboutSosty[0] == true &&
                                    <TouchableOpacity onPress={()=>aboutSosty[4]==false ? setAboutSosty([true,false,false,false,true,false]): setAboutSosty([true,false,false,false,false,false])}>
                                        <StyledText className="text-base mb-2" style={styles.textstyle}>
                                        ¿Sosty brinda asesorías o recomendaciones de inversión?
                                        </StyledText>
                                    </TouchableOpacity>}
                                    {aboutSosty[4] == true &&
                                    <StyledText  style={styles.innerHelpText} className='mb-1'>
                                        No, En Sosty no realizamos recomendaciones de inversión, somos una compañía comercializadora que facilita la conexión entre productores que están dispuestos a recibir ganado en participación, y personas que desean comprar ganado para llevarlos al aumento con Productores. Sosty brinda la información necesaria para que las partes decidan si quieren participar y crear un proyecto juntos.
                                    </StyledText>}
                                    {aboutSosty[0] == true && <Separator></Separator>}
                                    {aboutSosty[0] == true &&
                                    <TouchableOpacity onPress={()=>aboutSosty[5]==false ? setAboutSosty([true,false,false,false,false,true]): setAboutSosty([true,false,false,false,false,false])}>
                                        <StyledText className="text-base mb-2" style={styles.textstyle}>
                                        ¿Quién vigila a Sosty?
                                        </StyledText>
                                    </TouchableOpacity>}
                                    {aboutSosty[5] == true &&
                                    <StyledText  style={styles.innerHelpText} className='mb-1'>
                                        Sosty S.A.S. al igual que cualquier sociedad mercantil de Colombia es vigilada por la Superintendencia de Sociedades. Sosty S.A.S. no es vigilada por la Superintendencia Financiera porque no es una entidad financiera, aseguradora, establecimiento de crédito o de capitalización, sino una sociedad dedicada a la comercialización de ganado
                                    </StyledText>}
                                </StyledView>

                            </StyledView>
                    </StyledView>
                </StyledView>


                <StyledView className="flex justify-center items-center w-80 p-5 rounded-xl bg-white m-5">
                    <StyledView className="w-full">
                        <StyledText style={styles.textstyle} font-medium className="text-xl mb-6 ">Acerca de Neoganaderos</StyledText>
                        <StyledView className="p-3.5">
                            <TouchableOpacity onPress={()=>aboutNeoGanader==false ? setAboutNeoGanader(true): setAboutNeoGanader(false)}>
                                <StyledText className="text-base" style={styles.textstyle}>
                                    Toca para abrir
                                </StyledText>
                            </TouchableOpacity>
                            {aboutNeoGanader == true && <StyledText style={styles.innerHelpText} className='mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledText>}
                        </StyledView>
                    </StyledView>
                </StyledView>

                <StyledView className="flex justify-center items-center w-80 p-5 rounded-xl bg-white m-5">
                    <StyledView className="w-full ">
                        <StyledText style={styles.textstyle} font-medium className="text-xl mb-6 ">Acerca de los Productores</StyledText>
                        <StyledView className="p-3.5">
                            <TouchableOpacity onPress={()=>aboutProducer==false ? setAboutProducer(true): setAboutProducer(false)}>
                                <StyledText className="text-base" style={styles.textstyle}>
                                    Toca para abrir
                                </StyledText>
                            </TouchableOpacity>
                            {aboutProducer == true && <StyledText style={styles.innerHelpText} className='mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledText>}
                        </StyledView>
                    </StyledView>
                </StyledView>

                <StyledView className="flex justify-center items-center w-80 p-5 rounded-xl bg-white m-5">
                    <StyledView className="w-full">                    
                        <StyledText style={styles.textstyle} font-medium className="text-xl mb-6">Acerca de los Proyectos Sosty</StyledText>
                        <StyledView className="p-3.5">
                            <TouchableOpacity onPress={()=>aboutProyect==false ? setAboutProyect(true): setAboutProyect(false)}>
                                <StyledText className="text-base" style={styles.textstyle}>
                                    Toca para abrir
                                </StyledText>
                            </TouchableOpacity>
                            {aboutProyect == true && <StyledText style={styles.innerHelpText} className='mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledText>}
                        </StyledView>
                    </StyledView>
                </StyledView>

                <StyledView className="flex justify-center items-center w-80 p-5 rounded-xl bg-white m-5">
                    <StyledView className="w-full ">                        
                        <StyledText style={styles.textstyle} font-medium className="text-xl mb-6 text-slate-500" >Contactanos</StyledText>
                        <StyledView className='flex flex-row'>
                            <TouchableOpacity style={styles.primaryButton} onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=573204357649')}>
                                <FontAwesomeIcon icon={faComment} size={14} style={{ color: 'white' , width:'30%'}} />
                                <StyledText className="text-base ml-2 text-slate-800" style={styles.textstyle}>
                                    Vía Whatsapp
                                </StyledText>
                            </TouchableOpacity>
                        </StyledView>
                        <StyledView className='flex flex-row'>
                            <StyledText style={styles.textstyle} className="text-base text-slate-500">Celular: </StyledText>
                            <StyledText style={styles.textstyle} className='text-base font-bold text-slate-500'>3204357649</StyledText>
                        </StyledView>
                        <StyledView className='flex flex-row'>
                            <StyledText style={styles.textstyle} className="text-base text-slate-500">Email: </StyledText>
                            <StyledText style={styles.textstyle} className='text-base font-bold text-slate-800'>hola@sosty.co</StyledText>
                        </StyledView>
                    </StyledView>
                
                </StyledView>

            </StyledView>

        </StyledScroll>
        <Menu></Menu>
      

      
    </StyledView>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#6e6b7b'
    },
    cards:{
        minHeight:154
    },
    primaryButton: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#00BD56',
        borderRadius: 12,
        padding: 10,
        width:'100%',
        marginBottom:5
      },
    textstyle:{
        ...TextStyle01.text,
        color: '#6E6B7B'
    },
    innerHelpText:{
        ...TextStyle01.text,
        color: '#6E6B7B',
        fontSize: 15

    }
})