import {useEffect, useLayoutEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {createTodo, Todo} from '../model/Todo';
import {addTodo, removeTodo, updateTodo} from '../model/TodoState';
import {useNavigation, useRoute} from '@react-navigation/native';

function TodoForm() {
  const route = useRoute();
  const isEditing = route?.params?.isEditing ?? false;
  const item: Todo = route?.params?.todo ?? {title: '', description: ''};

  const [title, updateTitle] = useState('');
  const [description, updateDescription] = useState('');
  const [showTitleError, setShowTitleError] = useState(false);
  const [showDescriptionError, setShowDescriptionError] = useState(false);

  const dispatch = useDispatch();
  const navigator = useNavigation();

  const mainAction = isEditing ? updateTodoItem : addTodoItem;
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
    if (!validateInputs()) {
      return;
    }

    const updatedItem: Todo = {...item, title: title, description: description};
    dispatch(updateTodo(updatedItem));
    popToMainScreen();
  }

  function addTodoItem() {
    if (!validateInputs()) {
      return;
    }
    const item = createTodo(title, description);
    dispatch(addTodo(item));
    popToMainScreen();
  }

  function deleteItem() {
    dispatch(removeTodo(item.id));
    popToMainScreen();
  }

  function validateInputs() {
    let isValid = true;
    if (title.trim() === '') {
      setShowTitleError(true);
      isValid = false;
    }
    if (description.trim() === '') {
      setShowDescriptionError(true);
      isValid = false;
    }

    return isValid;
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={text => {
            updateTitle(text);
            setShowTitleError(false);
          }}
        />
        {showTitleError && (
          <Text style={styles.errorText}>
            Title is Empty, please fill the field
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.textInput, styles.multilineInput]}
          value={description}
          onChangeText={text => {
            updateDescription(text);
            setShowDescriptionError(false);
          }}
          multiline
          numberOfLines={4}
        />
        {showDescriptionError && (
          <Text style={styles.errorText}>
            Description is Empty, please fill the field
          </Text>
        )}
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
  errorText: {
    color: 'red',
  },
});
