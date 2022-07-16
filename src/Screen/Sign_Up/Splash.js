import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import logo from '../../Image/Karkoon_Logo.png';
import logo_title from '../../Image/Karkoon_Logo-1.png';

const Splash = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={logo} style={styles.logo}></Image>
      <Image source={logo_title} style={styles.logo2}></Image>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  logo2: {
    marginTop: -30,
    height: 110,
    width: 110,
    resizeMode: 'contain',
  },
  wrapper: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 650,
  },
});
