import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {Menu} from '../../components/Menu.component';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledScroll = styled(ScrollView);

export const SearchProyect = () => {
  const navigation = useNavigation();
  const [aboutSosty, setAboutSosty] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  //   const [aboutSosty, setAboutSosty]= useState(false)
  const [aboutNeoGanader, setAboutNeoGanader] = useState(false);
  const [aboutProducer, setAboutProducer] = useState(false);
  const [aboutProyect, setAboutProyect] = useState(false);
  return (
    <StyledView className="w-full h-full flex justify-around items-center">
      <StyledScroll className="w-full"></StyledScroll>
      <Menu activeRoute="search"></Menu>
    </StyledView>
  );
};
