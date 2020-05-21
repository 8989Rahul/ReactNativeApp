import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.title}>My Todos</Text>
    </View>
  );
};
export default Header;

const Styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
