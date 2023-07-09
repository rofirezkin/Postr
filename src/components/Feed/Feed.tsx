import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Padding from '../../utils/Padding';
import {Colors} from '../../utils/colors';

interface FeedProps {
  onPress?: () => void;
  dataFeed:
    | {
        name: string;
        description: string;
        avatar: string;
        username: string;
      }
    | undefined;
}
const Feed = ({onPress, dataFeed}: FeedProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.border}>
        <Padding flexDirection>
          <Image style={styles.avatar} source={{uri: dataFeed?.avatar}} />
          <View style={styles.flex}>
            <View style={styles.containerText}>
              <Text style={styles.name}>{dataFeed?.name}</Text>
              <Text style={styles.username}>{dataFeed?.username}</Text>
            </View>
            <Text style={styles.text}>{dataFeed?.description}</Text>
          </View>
        </Padding>
      </View>
    </TouchableOpacity>
  );
};

export default Feed;

const styles = StyleSheet.create({
  border: {
    borderBottomColor: '#303336',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  flex: {flex: 1},
  containerText: {flexDirection: 'row', alignItems: 'flex-end'},
  name: {color: Colors.text, fontSize: 15, fontWeight: 'bold'},
  username: {
    color: Colors.text,
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 5,
  },
  text: {
    color: Colors.text,
    fontSize: 16,
    marginTop: 5,
  },
});
