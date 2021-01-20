import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function MoneyItemAdd(props) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)

  const handleAddItem = () => {
    setTitle('')
    setValue(0)
    props.addListMoneyItem({ title: title, value: value })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Title</Text>
      <TextInput style={[styles.textInput, styles.textInputTitle]}
        defaultValue={title} onChangeText={text => { setTitle(text) }}>
      </TextInput>
      <Text style={styles.titleText}>Value</Text>
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
    flexDirection: 'column',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    // borderBottomColor: 'grey',
    // borderBottomWidth: 1,
    backgroundColor: '#e5e6eb',
    marginBottom: 20,
  },
  textInputTitle: {
  },
  textInputValue: {
  },
  button: {
    marginVertical: 10,
    width: 200,
    alignSelf:'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor:'#ff6f69'
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
});
