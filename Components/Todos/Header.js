import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const Header = () => {
  return (
    <View style={Styles.header}>
      <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
      <Text style={Styles.title}>My Todos</Text>
    </View>
  );
};
export default Header;

const Styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 15,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
