import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

const App = () => {
  const [person, setPerson] = useState([
    {name: 'Rahul'},
    {name: 'Rahul'},
    {name: 'Rahul'},
    {name: 'Rahul'},
    {name: 'Rahul'},
    {name: 'Rahul'},
    {name: 'Rahul'},
    {name: 'Rahul'},
    {name: 'Rahul'},
  ]);

  return (
    <View style={Styles.container}>
      <ScrollView>
        {person.map((item, i) => {
          return (
            <Text style={Styles.item} key={i}>
              {item.name}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
