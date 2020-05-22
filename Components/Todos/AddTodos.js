import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, View, Button} from 'react-native';

const AddTodos = props => {
  const [text, setText] = useState();
  const changeHandler = val => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={Styles.input}
        placeholder="new todos..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => props.onSubmitHandler(text)}
        title="Add Todos"
        color="coral"
      />
    </View>
  );
};

export default AddTodos;

const Styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
