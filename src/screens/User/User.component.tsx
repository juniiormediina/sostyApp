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

export const User = () => {
  const navigation = useNavigation();
  const [aboutSosty, setAboutSosty]= useState([false,false,false,false,false,false])
//   const [aboutSosty, setAboutSosty]= useState(false)
  const [aboutNeoGanader, setAboutNeoGanader]= useState(false)
  const [aboutProducer, setAboutProducer]= useState(false)
  const [aboutProyect, setAboutProyect]= useState(false)
  return (
    <StyledView className="w-full h-full flex justify-around items-center">
        <StyledScroll className='w-full'>

        </StyledScroll>
        <Menu activeRoute='user'></Menu>
      

      
    </StyledView>
  );
};

