import {faMessage} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {styled} from 'nativewind';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);

export const FloatButton = () => {
  return (
    <StyledView style={styles.container}>
      <StyledView>
        <TouchableOpacity>
          <StyledText className="text-base ">
            <FontAwesomeIcon
              icon={faMessage}
              size={30}
              style={{color: 'white', width: '30%'}}
            />
          </StyledText>
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 70,
    height: 70,
    right: 0,
    bottom: 180,
    zIndex: 100,
    backgroundColor: '#00BD56',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#D3D3D3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
