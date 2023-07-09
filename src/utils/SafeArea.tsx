import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
interface SafeAreaProps {
  children: ReactNode;
}

const SafeArea = ({children}: SafeAreaProps) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};

export default SafeArea;

const styles = StyleSheet.create({
  safeArea: {
    marginTop:
      StatusBar.currentHeight && Platform.OS === 'ios'
        ? StatusBar.currentHeight
        : 0,
    backgroundColor: '#000000',
    flex: 1,
  },
});
