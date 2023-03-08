import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Inputs() {
  //
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = (e: string) => {
    setInputValue(e);
  };

  return (
    <TextInput
      style={styles.input}
      value={inputValue}
      onChangeText={e => onChangeInput(e)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    marginTop: 20,
    padding: 10,
    fontSize: 20,
  },
});
