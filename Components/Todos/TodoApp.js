import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem';

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

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* To form */}
        <View style={styles.list}>
          {/*LIst  */}
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
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {padding: 40},
  list: {marginTop: 20},
});
