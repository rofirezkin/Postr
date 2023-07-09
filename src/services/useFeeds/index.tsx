import {useState, useEffect, useCallback, useContext} from 'react';

import {getData, storeData} from '../../utils/Stroage';
import {urlApi} from '../../config/Api';
import axios from 'axios';
import {GlobalContext} from '../globalContext';

import {useNavigation} from '@react-navigation/native';

type UserType =
  | {
      name: string;
      avatar: string;
      username: string;
    }
  | undefined;

export const useFeeds = () => {
  const navigation = useNavigation();
  const {moreLoadingHandling} = useContext(GlobalContext);
  const [dataFeeds, setDataFeeds] = useState<any>([]);
  const [user, setUser] = useState<UserType>();
  const [page, setPage] = useState<number>(1);
  const [endList, setEndList] = useState<boolean>(false);

  const pageHandling = () => {
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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      moreLoadingHandling(true);
      const url = `${urlApi}?page=${page}&limit=10`;
      axios
        .get(url)
        .then(res => {
          if (res.data.length === 0) {
            setEndList(true);
          } else {
            setDataFeeds((prevState: any) => [
              ...prevState,
              ...res.data.reverse(),
            ]);
          }
          moreLoadingHandling(false);
        })
        .catch(err => {
          moreLoadingHandling(false);
          console.log(err);
        });
    });
    return unsubscribe;
  }, [page, navigation]);

  return [dataFeeds, user, pageHandling, endList];
};
