import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoItem = ({item, onPressHandler}) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(item?.key)}>
      <Text style={Styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const Styles = StyleSheet.create({
  item: {
    marginTop: 16,
    padding: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});
