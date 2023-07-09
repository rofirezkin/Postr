import {useState, useEffect, useCallback, useContext} from 'react';

import {getData, storeData} from '../../utils/Stroage';
import {urlApi} from '../../config/Api';
import axios from 'axios';
import {GlobalContext} from '../globalContext';
import NetInfo from '@react-native-community/netinfo';
import {showMessage} from 'react-native-flash-message';

type UserType =
  | {
      name: string;
      avatar: string;
      username: string;
    }
  | undefined;

export const useFeeds = () => {
  const {moreLoadingHandling, endListHandling} = useContext(GlobalContext);
  const [dataFeeds, setDataFeeds] = useState<any>([]);
  const [user, setUser] = useState<UserType>();
  const [page, setPage] = useState<number>(1);

  const pageHandling = () => {
    console.log('page handlinggggg');
    setPage(prevState => prevState + 1);
  };

  function generateHandler() {
    const randomString = Math.random().toString(36).substring(2, 8);
    const timestamp = Date.now().toString(36);
    const handler = '@' + randomString + timestamp;

    return handler;
  }

  const getUser = useCallback(async () => {
    const data = await getData('user');
    if (!data) {
      const dataGet = {
        avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
        username: generateHandler(),
        name: 'Rofi aqa',
      };

      storeData('user', {value: dataGet});
      setUser(dataGet);
    } else {
      setUser(data.value);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const getDataFeeds = () => {
    moreLoadingHandling(true);
    const url = `${urlApi}?page=${page}&limit=10`;
    axios
      .get(url)
      .then(res => {
        if (res.data.length === 0) {
          endListHandling(true);
        } else {
          setDataFeeds((prevState: any) => [
            ...prevState,
            ...res.data.reverse(),
          ]);
        }
        storeData('listData', {value: dataFeeds});
        moreLoadingHandling(false);
      })
      .catch(err => {
        moreLoadingHandling(false);
        console.log(err);
      });
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      if (state.isConnected) {
        getDataFeeds();
      } else {
        showMessage({
          message: 'Tidak ada koneksi internet',
          type: 'danger',
        });
        getData('listData').then(res => {
          setDataFeeds(res.value);
        });
      }
      console.log('Is connected?', state.isConnected);
    });

    return unsubscribe();
  }, [page]);

  return [dataFeeds, user, pageHandling];
};
