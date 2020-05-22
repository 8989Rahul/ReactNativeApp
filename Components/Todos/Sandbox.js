import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Sandbox = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.boxOne}>One</Text>
      <Text style={Styles.boxTwo}>Two</Text>
      <Text style={Styles.boxThree}>Three</Text>
      <Text style={Styles.boxFour}>Four</Text>
    </View>
  );
};

export default Sandbox;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  boxOne: {
    padding: 10,
    backgroundColor: 'violet',
  },
  boxTwo: {padding: 10, backgroundColor: 'gold'},
  boxThree: {padding: 10, backgroundColor: 'coral'},
  boxFour: {padding: 10, backgroundColor: 'skyblue'},
});
