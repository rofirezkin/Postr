import React, {useCallback, useEffect, useState} from 'react';
import SafeArea from '../../utils/SafeArea';
import Header from '../../components/Header/Header';
import Padding from '../../utils/Padding';
import Geolocation from 'react-native-geolocation-service';
import Button from '../../components/Botton/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router';
import TextInput from '../../components/TextInput/TextInput';
import Avatar from '../../components/Avatar/Avatar';
import axios from 'axios';
import {urlApi} from '../../config/Api';
import i18n from '../../locale/i18n';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  Text,
  ToastAndroid,
} from 'react-native';
import {Colors} from '../../utils/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'PostScreen'>;
const PostScreen = ({navigation, route}: Props) => {
  const [description, setDescription] = useState('');
  const [position, setPosition] = useState<any>({
    coords: {latitude: '', longitude: ''},
  });
  const param = route.params;

  const hasLocationPermission = useCallback(async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: i18n.t('general.androidPermission.title'),
        message: i18n.t('general.androidPermission.message'),
        buttonNeutral: i18n.t('general.androidPermission.askMe'),
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  }, []);

  const getLocation = useCallback(async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }
    Geolocation.getCurrentPosition(
      position => {
        setPosition(position);
        console.log('position idudduu', position);
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
        setPosition(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },

        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  }, [hasLocationPermission]);
  useEffect(() => {
    getLocation();
  }, [getLocation]);
  const submitData = () => {
    const dataSubmit = {
      username: param?.username,
      description: description,
      name: param?.name,
      avatar: param?.avatar,
      latitude: position?.coords?.latitude,
      longitude: position?.coords?.longitude,
    };

    axios.post(urlApi, dataSubmit).then(() => {
      navigation.replace('HomeScreen');
    });
  };

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert(i18n.t('general.iosPermission.denied'));
    }

    if (status === 'disabled') {
      Alert.alert(i18n.t('general.iosPermission.disable'), '', [
        {
          text: i18n.t('general.iosPermission.goToSetting'),
          onPress: openSetting,
        },
        {text: i18n.t('general.iosPermission.cancel'), onPress: () => {}},
      ]);
    }

    return false;
  };

  return (
    <SafeArea>
      <Header onPress={() => navigation.goBack()} title="Post Screen" />
      <Padding flexDirection>
        <Avatar avatar={param?.avatar} />
        <TextInput
          placeholder={`${i18n.t('general.placeholderSubmit')} ${
            param?.name
          } ?`}
          value={description}
          onChangeText={value => setDescription(value)}
        />
      </Padding>
      <Padding>
        <Text style={{color: Colors.text, marginTop: 5, fontSize: 12}}>
          {' '}
          lat :{position?.coords?.latitude} long : {position?.coords?.longitude}
        </Text>
      </Padding>
      <Padding>
        <Button
          title={i18n.t('general.submit')}
          submitInput={true}
          onPressInput={submitData}
        />
      </Padding>
    </SafeArea>
  );
};

export default PostScreen;
