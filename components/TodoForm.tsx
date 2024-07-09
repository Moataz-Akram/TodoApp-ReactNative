import {useEffect, useLayoutEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {createTodo, Todo} from '../model/Todo';
import {addTodo, removeTodo, updateTodo} from '../model/TodoState';
import {useNavigation, useRoute} from '@react-navigation/native';

interface TodoFormProps {
  isEditing: boolean;
}

function TodoForm() {
  const route = useRoute();
  const isEditing = route?.params?.isEditing ?? false;
  const item: Todo = route?.params?.todo ?? {title: '', description: ''};

  const [title, updateTitle] = useState('');
  const [description, updateDescription] = useState('');

  const dispatch = useDispatch();
  const navigator = useNavigation();

  const buttonTitle = isEditing ? 'update item' : 'add item';

  useLayoutEffect(() => {
    navigator.setOptions({
      title: isEditing ? 'Edit Todo Item' : 'Add Todo Item',
    });
  }, [navigator, isEditing]);

  useEffect(() => {
    if (isEditing) {
      updateTitle(item.title);
      updateDescription(item.description);
    }
  }, [isEditing, item]);

  function popToMainScreen() {
    navigator.navigate('Main Screen');
  }

  function updateTodoItem() {
    const updatedItem: Todo = {...item, title: title, description: description};
    dispatch(updateTodo(updatedItem));
    popToMainScreen();
  }

  function addTodoItem() {
    const item = createTodo(title, description);
    dispatch(addTodo(item));
    popToMainScreen();
  }

  function deleteItem() {
    dispatch(removeTodo(item.id));
    popToMainScreen();
  }

  const mainAction = isEditing ? updateTodoItem : addTodoItem;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={updateTitle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.textInput, styles.multilineInput]}
          value={description}
          onChangeText={updateDescription}
          multiline
          numberOfLines={4}
        />
      </View>
      <Button title={buttonTitle} onPress={mainAction} />
      {isEditing && <Button title="Delete item" onPress={deleteItem} />}
    </View>
  );
}

export default TodoForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    flex: 1,
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
    textAlignVertical: 'top',
  },
});
