import {
  faChartColumn,
  faQuestionCircle,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StyledView = styled(View);

interface MenuProps {
  activeRoute: string;
}
export const Menu = (props: MenuProps) => {
  const navigation = useNavigation();
  const [colorIconInv, setColorIconInv] =
    props.activeRoute == 'investment'
      ? useState('#00BD56')
      : useState('#D3D3D3');
  const [colorIconSearch, setColorIconSearch] =
    props.activeRoute == 'search' ? useState('#00BD56') : useState('#D3D3D3');
  const [colorIconQuestion, setColorIconQuestion] =
    props.activeRoute == 'help' ? useState('#00BD56') : useState('#D3D3D3');
  const [colorIconUser, setColorIconUser] =
    props.activeRoute == 'user' ? useState('#00BD56') : useState('#D3D3D3');
  return (
    <StyledView
      style={styles.menuBar}
      className="w-full flex justify-around items-center">
      <StyledView
        style={styles.menuBody}
        className="w-full h-full flex items-center flex-row justify-around bg-slate-500">
        <Text onPress={() => [navigation.navigate('Investments')]}>
          <FontAwesomeIcon
            icon={faChartColumn}
            size={30}
            style={{color: colorIconInv}}
          />
        </Text>
        <Text onPress={() => [navigation.navigate('SearchProyect')]}>
          <FontAwesomeIcon
            icon={faSearch}
            size={30}
            style={{color: colorIconSearch}}
          />
        </Text>
        <Text onPress={() => [navigation.navigate('Help')]}>
          <FontAwesomeIcon
            icon={faQuestionCircle}
            size={30}
            style={{color: colorIconQuestion}}
          />
        </Text>
        <Text onPress={() => [navigation.navigate('User')]}>
          <FontAwesomeIcon
            icon={faUser}
            size={30}
            style={{color: colorIconUser}}
          />
        </Text>
      </StyledView>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  menuBar: {
    height: 86,
    maxHeight: 86,
  },
  menuBody: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderWidth: 2,
    borderColor: '#D3D3D3',
    backgroundColor: '#FFFFFF',
  },
});
