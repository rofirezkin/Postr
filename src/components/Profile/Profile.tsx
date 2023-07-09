import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PropfileProps {
  avatar: string | undefined;
  name: string | undefined;
  username: string | undefined;
}

const Profile = ({avatar, name, username}: PropfileProps) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center'}}
      onPress={() => AsyncStorage.clear()}>
      <Avatar avatar={avatar} />
      <View>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
          {name}
        </Text>
        <Text style={{color: 'white', fontSize: 13}}>{username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({});
