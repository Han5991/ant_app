import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const input = props => {
  let style = null;
  
  if (props.type === 'textinput') {
    style = styles.input;
  }

  if (props.type === 'textinputRevised') {
    style = styles.inputRevised;
  }

  return <TextInput {...props} style={style} />;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
  inputRevised: {
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
});

export default input;
