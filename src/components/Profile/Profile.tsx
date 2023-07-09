import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from '../../utils/colors';

interface PropfileProps {
  avatar: string | undefined;
  name: string | undefined;
  username: string | undefined;
}

const Profile = ({avatar, name, username}: PropfileProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => AsyncStorage.clear()}>
      <Avatar avatar={avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    padding: 10,
    borderRadius: 10,
  },
  name: {color: 'white', fontWeight: 'bold', fontSize: 15},
  username: {color: 'white', fontSize: 13},
});
