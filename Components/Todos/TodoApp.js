import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem';
import AddTodos from './AddTodos';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {text: 'Buy Coffee', key: 1},
    {text: 'Create an app', key: 2},
    {text: 'play on the switch', key: 3},
  ]);

  const onPressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos?.filter(item => item.key !== key);
    });
  };

  const onSubmitHandler = val => {
    if (val.length > 3) {
      setTodos(prevTodos => {
        return [{text: val, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OPPS!', 'Todos must be over 3 char long', [
        {text: 'Understuood', onPress: () => console.log('Alert closed')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodos onSubmitHandler={onSubmitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={item => item.key}
              renderItem={({item}) => (
                <TodoItem item={item} onPressHandler={onPressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {flex: 1, padding: 40},
  list: {flex: 1, marginTop: 20},
});
