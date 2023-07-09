import {Image, StyleSheet} from 'react-native';
import React from 'react';

interface AvatarProps {
  avatar: string | undefined;
}
const Avatar = ({avatar}: AvatarProps) => {
  return <Image style={styles.avatar} source={{uri: avatar}} />;
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
});
