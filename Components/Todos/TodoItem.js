import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const TodoItem = ({item, onPressHandler}) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(item?.key)}>
      <View style={Styles.item}>
        <Icon type="material" name="delete" size={18} color="#333" />
        <Text style={Styles.itemText}>{item.text}</Text>
      </View>
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
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
});
