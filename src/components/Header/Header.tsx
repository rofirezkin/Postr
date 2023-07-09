import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';

interface HeaderProps {
  title: string;
  onPress: () => void;
}

const Header = ({title, onPress}: HeaderProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.icon}>X</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {color: 'white', fontSize: 20},
  title: {
    color: 'white',
    textAlignVertical: 'center',
    marginLeft: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
});
