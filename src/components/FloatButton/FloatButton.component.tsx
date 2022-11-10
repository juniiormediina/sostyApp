import {faMessage} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {styled} from 'nativewind';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const StyledView = styled(View);
// const StyledButton = styled(Button);
const StyledText = styled(Text);

export const FloatButton = () => {
  return (
    <StyledView className="bg-slate-500 w-5 h-5 m-6 relative rounded-lg">
      <StyledView className="w-4">
        <TouchableOpacity>
          <StyledText className="text-base ">
            <FontAwesomeIcon icon={faMessage} size={30} />
          </StyledText>
        </TouchableOpacity>
      </StyledView>
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
