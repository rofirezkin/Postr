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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: language === 'en' ? Colors.blue : Colors.border,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
        onPress={onPressEn}
        disabled={language === 'en'}>
        <Text style={{color: Colors.text}}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: language === 'in' ? Colors.blue : Colors.border,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
        disabled={language === 'ind'}
        onPress={onPressIn}>
        <Text style={{color: Colors.text}}>Indo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lang;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
