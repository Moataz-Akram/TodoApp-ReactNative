import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {createTodo, Todo} from '../model/Todo';
import {addTodo} from '../model/TodoState';

function MainScreen() {
  const dispatch = useDispatch();

  function addTodoItem() {
    const item = createTodo('todo title', 'todo description');
    dispatch(addTodo(item));
  }

  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Button title="Add todo" onPress={addTodoItem} />
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
