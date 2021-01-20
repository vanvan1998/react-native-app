import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function MoneyItemAdd(props) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)

  useEffect(() => {
    try {
      props.getListMoneyItem()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleAddItem = () => {
    setTitle('')
    setValue(0)
    props.addListMoneyItem({ title: title, value: value })
  }

  return (
    <View style={styles.container}>
      <TextInput style={[styles.textInput, styles.textInputTitle]}
        defaultValue={title} onChangeText={text => { setTitle(text) }}>
      </TextInput>
      <TextInput keyboardType='numeric' autoCompleteType='cc-number'
        style={[styles.textInput, styles.textInputValue]}
        defaultValue={value} onChangeText={text => { setValue(text) }}>
      </TextInput>
      <TouchableOpacity onPress={handleAddItem}
        style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MoneyItemAdd;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    marginStart: 5,
    borderRadius: 5,
  },
  textInputTitle: {
    flex: 4,
  },
  textInputValue: {
    flex: 2
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
});
