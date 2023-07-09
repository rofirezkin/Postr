import {StyleSheet, Text} from 'react-native';
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
import {urlApi} from '../../config/Api';
import {Colors} from '../../utils/colors';
import {ScrollView} from 'react-native-gesture-handler';
import NetInfo from '@react-native-community/netinfo';
import {showMessage} from 'react-native-flash-message';

// interface ReplyHandlingProps {
//   description: string | undefined;
//   name: string | undefined;
//   avatar: string | undefined;
//   username: string | undefined;
//   feedId: number | undefined;
// }
type Props = NativeStackScreenProps<RootStackParamList, 'ReplyScreen'>;
const ReplyScreen = ({navigation, route}: Props) => {
  const [reply, setReply] = useState<string>('');
  const [data, setData] = useState<string[]>([]);
  const [handleReply, setHandleReply] = useState<string>();
  const param = route.params;

  useEffect(() => {
    axios.get(`${urlApi}/${param?.id}/reply`).then(res => {
      console.log('dataa ', res.data);
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
    NetInfo.fetch().then(state => {
      setHandleReply(reply);
      if (state.isConnected) {
        axios.post(`${urlApi}/${param?.id}/reply`, dataReply).then(res => {
          setReply('');
          console.log('dataa ', res.data);
        });
      } else {
        showMessage({
          message: i18n.t('general.general.noInternet'),
          type: 'danger',
        });
      }
    });
  };

  return (
    <SafeArea>
      <Header onPress={() => navigation.goBack()} title="Reply Screen" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Feed dataFeed={param} />

        <Padding>
          <Text style={styles.location}>
            {' '}
            lat :{param?.latitude} long : {param?.longitude}
          </Text>
          {data.length > 0 && (
            <Text style={styles.reply}>{i18n.t('general.reply')}</Text>
          )}
        </Padding>
        {data.map((res: any, index) => {
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
          <Button
            title="Reply"
            submitInput={true}
            onPressInput={replyHandling}
          />
        </Padding>
      </ScrollView>
    </SafeArea>
  );
};

export default ReplyScreen;

const styles = StyleSheet.create({
  reply: {color: 'white', fontSize: 16},
  location: {color: Colors.text, marginTop: 5, fontSize: 12},
  scroll: {flexGrow: 1},
});
