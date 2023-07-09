import {StyleSheet, TextInput as TextInputRN} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';

interface TextInputProps {
  onChangeText: (value: string) => void;
  value: string;
  placeholder: string;
  autoFocus?: boolean;
}

const TextInput = ({
  onChangeText,
  value,
  placeholder,
  autoFocus,
}: TextInputProps) => {
  return (
    <TextInputRN
      textAlignVertical="top"
      value={value}
      onChangeText={onChangeText}
      editable
      multiline
      numberOfLines={4}
      autoFocus={autoFocus}
      placeholder={placeholder}
      placeholderTextColor={Colors.text}
      maxLength={100}
      style={styles.input}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
    color: Colors.text,
    height: 100,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
  },
});
