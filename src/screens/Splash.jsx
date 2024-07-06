import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MenuTab');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.bg}>
      <Image
        source={require('../assets/image.png')}
        style={styles.logo}></Image>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 110,
  },
});