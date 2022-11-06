import { faChartColumn, faQuestion, faQuestionCircle, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import {styled} from 'nativewind';
import React, { useState } from 'react';
import { StyleSheet, Text,  View} from 'react-native';

const StyledView = styled(View);

export const Menu = () => {
  const navigation = useNavigation();
  const [colorIconInv, setColorIconInv] = useState('#00BD56');
  const [colorIconSearch, setColorIconSearch] = useState('#D3D3D3');
  const [colorIconQuestion, setColorIconQuestion] = useState('#D3D3D3');
  const [colorIconUser, setColorIconUser] = useState('#D3D3D3');
  return (
    <StyledView style={styles.menuBar} className="w-full flex justify-around items-center">
        <StyledView style={styles.menuBody} className='w-full h-full flex items-center flex-row justify-around bg-slate-500'>
                
                <Text onPress={()=>[setColorIconInv("#00BD56"),setColorIconSearch('#D3D3D3'),setColorIconQuestion('#D3D3D3'),setColorIconUser('#D3D3D3')]}>
                    <FontAwesomeIcon icon={faChartColumn} size={30} style={{ color: colorIconInv }} />
                </Text>
                <Text onPress={()=>[setColorIconInv("#D3D3D3"),setColorIconSearch('#00BD56'),setColorIconQuestion('#D3D3D3'),setColorIconUser('#D3D3D3')]}>
                <FontAwesomeIcon icon={faSearch} size={30} style={{ color: colorIconSearch }} />
                </Text>
                <Text onPress={()=>[setColorIconInv("#D3D3D3"),setColorIconSearch('#D3D3D3'),setColorIconQuestion('#00BD56'),setColorIconUser('#D3D3D3')]}>
                    <FontAwesomeIcon icon={faQuestionCircle} size={30} style={{ color: colorIconQuestion }} />
                </Text>
                <Text onPress={()=>[setColorIconInv("#D3D3D3"),setColorIconSearch('#D3D3D3'),setColorIconQuestion('#D3D3D3'),setColorIconUser('#00BD56')]}>
                    <FontAwesomeIcon icon={faUser} size={30} style={{ color: colorIconUser }} />
                </Text>
                    

            </StyledView>
      
    </StyledView>
  );
};

const styles = StyleSheet.create({
    menuBar:{
        height:86,
        maxHeight:86
    },
    menuBody:{
        borderTopLeftRadius:22,
        borderTopRightRadius: 22,
        borderWidth: 2,
        borderColor: "#D3D3D3",
        backgroundColor: "#FFFFFF",
    }
})