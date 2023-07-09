import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SafeArea from '../../utils/SafeArea';
import Header from '../../components/Header/Header';
import Padding from '../../utils/Padding';
import Button from '../../components/Botton/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router';
import Feed from '../../components/Feed/Feed';
import Avatar from '../../components/Avatar/Avatar';
import TextInput from '../../components/TextInput/TextInput';
import axios from 'axios';
import i18n from '../../locale/i18n';
type Props = NativeStackScreenProps<RootStackParamList, 'ReplyScreen'>;
const ReplyScreen = ({navigation, route}: Props) => {
  const [reply, setReply] = useState('');
  const [data, setData] = useState<string[]>([]);
  const [handleReply, setHandleReply] = useState();
  const param = route.params;

  useEffect(() => {
    axios
      .get(
        `https://64aa65800c6d844abede69a9.mockapi.io/postr/feeds/${param?.id}/reply`,
      )
      .then(res => {
        console.log('dataa ', res.data);
        // const dataFilter = res.data.filter(
        //   response => response.feedId === param?.id,
        // );
        // console.log('data filter', dataFilter);
        setData(res.data);
      });
  }, [param, handleReply]);

  const replyHandling = () => {
    const dataReply = {
      description: reply,
      name: param?.name,
      avatar: param?.avatar,
      username: param?.username,
      feedId: param?.id,
    };
    setHandleReply(dataReply);

    axios
      .post(
        `https://64aa65800c6d844abede69a9.mockapi.io/postr/feeds/${param?.id}/reply`,
        dataReply,
      )
      .then(res => {
        setReply('');
        console.log('dataa ', res.data);
      });
  };

  return (
    <SafeArea>
      <Header onPress={() => navigation.goBack()} title="Reply Screen" />
      <Feed dataFeed={param} />
      <Padding>
        {data.length > 0 && (
          <Text style={{color: 'white', fontSize: 16}}>Reply</Text>
        )}
      </Padding>
      {data.map((res, index) => {
        return <Feed key={index} dataFeed={res} />;
      })}
      {/* <Feed dataFeed={dataReply} /> */}
      <Padding flexDirection>
        <Avatar avatar={param?.avatar} />
        <TextInput
          placeholder={i18n.t('general.placeholderReply')}
          value={reply}
          onChangeText={value => setReply(value)}
        />
      </Padding>
      <Padding>
        <Button title="Reply" submitInput={true} onPressInput={replyHandling} />
      </Padding>
    </SafeArea>
  );
};

export default ReplyScreen;

const styles = StyleSheet.create({});
