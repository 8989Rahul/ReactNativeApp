import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

const Todo = () => {
  const [todos, setTodos] = useState([
    {text: 'Buy Coffee', key: 1},
    {text: 'Create an app', key: 2},
    {text: 'play on the switch', key: 3},
  ]);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        {/*LIst  */}
        <FlatList
          data={todos}
          keyExtractor={item => item.key}
          renderItem={({item}) => <Text>{item.text}</Text>}
        />
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
