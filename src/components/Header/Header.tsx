import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';

interface HeaderProps {
  title: string;
  onPress: () => void;
}

const Header = ({title, onPress}: HeaderProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderBottomColor: Colors.border,
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 20,
        flexDirection: 'row',

        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 20}}>X</Text>
      <Text
        style={{
          color: 'white',
          textAlignVertical: 'center',
          marginLeft: 10,
          alignItems: 'center',
          fontWeight: 'bold',
          flex: 1,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({});
