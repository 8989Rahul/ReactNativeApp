import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Sample = () => {
  const [person, setPerson] = useState([
    {name: 'Rahul', id: 1},
    {name: 'Aahul', id: 2},
    {name: 'Bahul', id: 3},
    {name: 'Cahul', id: 4},
    {name: 'Dahul', id: 5},
    {name: 'Eahul', id: 6},
    {name: 'Fahul', id: 7},
    {name: 'Gahul', id: 8},
    {name: 'Hahul', id: 9},
  ]);

  const pressHandler = id => {
    console.log(id);
    setPerson(prevPerson => prevPerson.filter(person => person.id !== id));
  };

  return (
    <View style={Styles.container}>
      <FlatList
        numColumns={2}
        data={person}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={Styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default Sample;

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
    marginHorizontal: 20,
  },
});
