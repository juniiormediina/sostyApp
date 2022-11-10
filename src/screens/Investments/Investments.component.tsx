import {
  faCloudArrowDown,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Row, Rows, Table} from 'react-native-table-component';
import Logo from '../../assets/Logo.png';
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

  const currentInv = {
    tableHead: [
      'CÓDIGO',
      'PROYECTO',
      'PRODUCTOR',
      'PROGRESO',
      'FASE',
      'PAGO CONFIRMADO',
      'MONTO INVERTIDO',
      'PORCENTAJE',
      'PARTICIPACIÓN',
      'FECHA DE INVERSIÓN',
    ],
    tableData: [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ],
  };

  const FinalInv = {
    tableHead: [
      'CÓDIGO',
      'PROYECTO',
      'PRODUCTOR',
      'FASE',
      'PAGO CONFIRMADO',
      'MONTO INVERTIDO',
      'TOTAL RECIBIDO',
      'TOTAL GANADO',
      'FECHA DE INVERSIÓN',
    ],
    tableData: [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ],
  };

  return (
    <>
      <StyledView className="w-full h-full flex justify-around items-center">
        <StyledScroll className="w-full">
          <StyledView className="w-full h-full flex justify-around items-center bg-gray-300">
            <StyledView className="flex justify-center">
              <Image
                source={Logo}
                style={{marginTop: 15, marginLeft: 45, marginBottom: 32}}
              />
            </StyledView>

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
                  icon={faCloudArrowDown}
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

            <StyledView className="w-full bg-white mb-5">
              <StyledText className="text-xl pl-4">
                Inversiones Actuales
              </StyledText>
              <ScrollView horizontal={true}>
                <View style={styles.container}>
                  <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row
                      data={currentInv.tableHead}
                      style={styles.head}
                      textStyle={styles.text}
                    />
                    <Rows data={currentInv.tableData} textStyle={styles.text} />
                  </Table>
                </View>
              </ScrollView>
            </StyledView>

            <StyledView className="w-full bg-white mb-5">
              <StyledText className="text-xl pl-4">
                Inversiones Finalizadas
              </StyledText>
              <ScrollView horizontal={true}>
                <View style={styles.container}>
                  <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row
                      data={FinalInv.tableHead}
                      style={styles.head}
                      textStyle={styles.text}
                    />
                    <Rows data={FinalInv.tableData} textStyle={styles.text} />
                  </Table>
                </View>
              </ScrollView>
            </StyledView>
          </StyledView>
        </StyledScroll>
        <FloatButton />
        <Menu activeRoute="investment"></Menu>
      </StyledView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});
