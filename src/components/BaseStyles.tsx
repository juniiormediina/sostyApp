import {StyleSheet} from 'react-native';

const BaseButtonStyle = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    height: 48,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
});

export const PrimaryButtonStyle = StyleSheet.create({
  button: {
    ...BaseButtonStyle.button,
    borderColor: '#D3D3D3',
    backgroundColor: '#00BD56',
  },
  text: {
    ...BaseButtonStyle.text,
    color: '#FFFFFF',
  },
});

export const SecondaryButtonStyle = StyleSheet.create({
  button: {
    ...BaseButtonStyle.button,
    borderColor: '#00BD56',
    backgroundColor: '#FFFFFF',
  },
  text: {
    ...BaseButtonStyle.text,
    color: '#00BD56',
  },
});

const BaseTextStyle = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: '#000000',
  },
});

export const TextStyle01 = StyleSheet.create({
  text: {
    ...BaseTextStyle.text,
  },
});

export const TextStyle02 = StyleSheet.create({
  text: {
    ...BaseTextStyle.text,
    color: '#D3D3D3',
    fontSize: 18,
  },
});

export const TextStyle03 = StyleSheet.create({
  text: {
    ...BaseTextStyle.text,
    fontSize: 15,
  },
});

const BaseInputStyle = StyleSheet.create({
  input: {
    fontFamily: 'Montserrat-Regular',
    borderRadius: 12,
    borderColor: '#D3D3D3',
    height: 48,
    borderWidth: 1,
    paddingLeft: 16,
    color: '#000000',
    textAlignVertical: 'center',
  },
});

export const InputStyle01 = StyleSheet.create({
  input: {
    ...BaseInputStyle.input,
    fontSize: 16,
  },
});
