import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import SafeArea from '../../utils/SafeArea';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router';
import Padding from '../../utils/Padding';
import Feed from '../../components/Feed/Feed';
import Button from '../../components/Botton/Button';
import Profile from '../../components/Profile/Profile';
import {FlatList} from 'react-native-gesture-handler';
import {Colors} from '../../utils/colors';
import TextPoster from '../../components/TextPoster/TextPoster';
import Lang from '../../components/Lang/Lang';
import {GlobalContext} from '../../services/globalContext';
import i18n from '../../locale/i18n';
import {useFeeds} from '../../services/useFeeds';
type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({navigation}: Props) => {
  const [dataFeeds, user, pageHandling, endList] = useFeeds();
  const {moreLoading} = useContext(GlobalContext);
  const {languageHandling} = useContext(GlobalContext);

  const fetchMoreData = () => {
    if (!moreLoading && !endList) {
      pageHandling();
    }
  };
  useEffect(() => {
    console.log('sdata feed');
  }, [dataFeeds]);

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {moreLoading && <ActivityIndicator color="red" />}
        {endList && (
          <Text style={{color: Colors.text}}>{i18n.t('general.endList')}</Text>
        )}
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <>
        <TextPoster name={user?.name} />
        <Padding>
          <Lang
            onPressEn={() => languageHandling('en')}
            onPressIn={() => languageHandling('in')}
          />
          <Profile
            avatar={user?.avatar}
            name={user?.name}
            username={user?.username}
          />
        </Padding>
      </>
    );
  };

  return (
    <SafeArea>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={dataFeeds}
        renderItem={item => (
          <Feed
            key={item.index}
            dataFeed={item.item}
            onPress={() => navigation.navigate('ReplyScreen', item.item)}
          />
        )}
        ListFooterComponent={renderFooter}
        onEndReached={fetchMoreData}
      />
      <Button onPress={() => navigation.navigate('PostScreen', user)} />
    </SafeArea>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  footer: {flex: 1, alignItems: 'center', padding: 20},
});
