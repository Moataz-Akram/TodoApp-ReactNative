import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

function TodoForm() {
  const buttonTitle = 'add item';

  function updateTodo() {}

  function addTodo() {}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.textInput, styles.multilineInput]}
          multiline
          numberOfLines={4}
        />
      </View>
      <Button title={buttonTitle} />
    </View>
  );
}

export default TodoForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    flex: 1,
    // justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  multilineInput: {
    height: '60%',
    textAlignVertical: 'top', // Ensures text starts at the top for multiline input
  },
});
