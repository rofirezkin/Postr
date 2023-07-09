import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {GlobalContext} from '../../services/globalContext';
import {Colors} from '../../utils/colors';

interface LangProps {
  onPressEn: () => void;
  onPressIn: () => void;
}

const Lang = ({onPressEn, onPressIn}: LangProps) => {
  const {language} = useContext(GlobalContext);
  console.log('language ', language);

  const styleButtonEn = {
    backgroundColor: language === 'en' ? Colors.blue : Colors.border,
    paddingHorizontal: 20,
    paddingVertical: 10,
  };
  const styleButtonIn = {
    backgroundColor: language === 'in' ? Colors.blue : Colors.border,
    paddingHorizontal: 20,
    paddingVertical: 10,
  };

  return (
    <>
      <Text style={styles.title}>Language</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styleButtonEn}
          onPress={onPressEn}
          disabled={language === 'en'}>
          <Text style={{color: Colors.text}}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleButtonIn}
          disabled={language === 'ind'}
          onPress={onPressIn}>
          <Text style={{color: Colors.text}}>Indo</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default React.memo(Lang);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 5,
  },
});
