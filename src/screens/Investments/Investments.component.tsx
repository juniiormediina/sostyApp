import {faDollarSign} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {FloatButton} from '../../components/FloatButton/FloatButton.component';
import {Menu} from '../../components/Menu.component';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScroll = styled(ScrollView);

export default function Investments() {
  const navigation = useNavigation();
  const getUserData = () => {
    AsyncStorage.getItem('userData').then(res => console.log(JSON.parse(res)));
  };

  useEffect(() => getUserData(), []);

  return (
    <>
      <StyledView className="w-full h-full flex justify-around items-center">
        <StyledScroll className="w-full">
          <StyledView className="w-full h-full flex justify-around items-center bg-gray-300">
            <StyledView className="w-80 h-28 p-5 m-5 rousnded-lg bg-white flex flex-row justify-center items-center">
              <StyledView
                className="bg-slate-500 p-3 rounded-full"
                style={{backgroundColor: '#e0f7ea'}}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size={30}
                  style={{color: '#00BD56'}}
                />
              </StyledView>
              <StyledView className="w-3/4 flex flex-col items-center">
                <StyledText className="text-xl font-bold">
                  $ 2,400,000
                </StyledText>
                <StyledText>Total Invertido</StyledText>
              </StyledView>
            </StyledView>

            <StyledView className="w-80 h-28 p-5 m-5 rounded-lg bg-white flex flex-row justify-center items-center">
              <StyledView
                className="bg-slate-500 p-3 rounded-full"
                style={{backgroundColor: '#e0f7ea'}}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size={30}
                  style={{color: '#00BD56'}}
                />
              </StyledView>
              <StyledView className="w-3/4 flex flex-col items-center">
                <StyledText className="text-xl font-bold">$ 0</StyledText>
                <StyledText>Total Recibido</StyledText>
              </StyledView>
            </StyledView>

            <StyledView className="w-80 h-28 p-5 m-5 rounded-lg bg-white flex flex-row justify-center items-center">
              <StyledView
                className="bg-slate-500 p-3 rounded-full"
                style={{backgroundColor: '#e0f7ea'}}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size={30}
                  style={{color: '#00BD56'}}
                />
              </StyledView>
              <StyledView className="w-3/4 flex flex-col items-center">
                <StyledText className="text-xl font-bold">$ 0,00</StyledText>
                <StyledText>Ganancia Total</StyledText>
              </StyledView>
            </StyledView>

            <StyledView className="w-80 h-28 p-5 m-5 rounded-lg bg-white flex flex-row justify-center items-center">
              <StyledView
                className="bg-slate-500 p-3 rounded-full"
                style={{backgroundColor: '#e0f7ea'}}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size={30}
                  style={{color: '#00BD56'}}
                />
              </StyledView>
              <StyledView className="w-3/4 flex flex-col items-center">
                <StyledText className="text-xl font-bold">
                  $ 1,000,000
                </StyledText>
                <StyledText>Saldo Sosty</StyledText>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledScroll>
        <FloatButton />
        <Menu activeRoute="investment"></Menu>
      </StyledView>
    </>
  );
}
