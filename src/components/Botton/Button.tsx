import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  title?: string;
  submitInput?: boolean;
  onPress?: () => void;
  onPressInput?: () => void;
}

const Button = ({submitInput, title, onPress, onPressInput}: ButtonProps) => {
  if (submitInput) {
    return (
      <TouchableOpacity onPress={onPressInput} style={styles.containerInput}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.containerAddPost}>
      <Text style={styles.iconAddPost}>+</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  containerAddPost: {
    position: 'absolute',
    bottom: 60,
    right: 40,
    backgroundColor: '#4A99E9',
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
  },
  iconAddPost: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
    textAlignVertical: 'center',
  },

  title: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  containerInput: {
    backgroundColor: '#4A99E9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 70 / 2,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
});
