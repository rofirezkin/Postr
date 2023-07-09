import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Padding from '../../utils/Padding';

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
      <View
        style={{
          borderBottomColor: '#303336',
          borderBottomWidth: 1,
        }}>
        <Padding flexDirection>
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 50 / 2,
              marginRight: 10,
            }}
            source={{uri: dataFeed?.avatar}}
          />
          <View style={{flex: 1}}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              {dataFeed?.name} {dataFeed?.username}
            </Text>
            <Text style={{color: 'white'}}>{dataFeed?.description}</Text>
          </View>
        </Padding>
      </View>
    </TouchableOpacity>
  );
};

export default Feed;

const styles = StyleSheet.create({});
