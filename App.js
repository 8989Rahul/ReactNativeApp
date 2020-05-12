import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Rahul');
  const [person, setPerson] = useState({name: 'hey', age: 23});

  const onclickHandler = () => {
    setName('Rahul Daghale');
    setPerson({name: 'Rahul', age: 24});
  };

  return (
    <View style={Styles.container}>
      <Text>My name is {name} !</Text>
      <Text>
        This is {person.name} and the AGE is {person.age}
      </Text>
      <View style={Styles.buttonContainer}>
        <Button title="Update State" onPress={onclickHandler} />
      </View>
    </View>
  );
};
export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingTop: 40,
  },
});
