import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Padding from '../../utils/Padding';
import i18n from '../../locale/i18n';
import {Colors} from '../../utils/colors';

interface TextPosterProps {
  name: string | undefined;
}
const TextPoster = ({name}: TextPosterProps) => {
  return (
    <Padding justifyContent="center" flexDirection>
      <Text style={styles.generalText}>{i18n.t('general.homeTitle')}</Text>
      <Text style={styles.paramText}> {name} !</Text>
    </Padding>
  );
};

export default TextPoster;

const styles = StyleSheet.create({
  generalText: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  paramText: {
    color: Colors.blue,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
});
