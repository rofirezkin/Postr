import {StyleSheet, TextInput as TextInputRN} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';

interface TextInputProps {
  onChangeText: (value: string) => void;
  value: string;
  placeholder: string;
}

const TextInput = ({onChangeText, value, placeholder}: TextInputProps) => {
  return (
    <TextInputRN
      value={value}
      onChangeText={onChangeText}
      editable
      multiline
      numberOfLines={4}
      autoFocus={true}
      placeholder={placeholder}
      placeholderTextColor={Colors.text}
      maxLength={100}
      style={{
        flex: 1,
        padding: 10,
        color: Colors.text,
        height: 100,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 10,
      }}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({});
