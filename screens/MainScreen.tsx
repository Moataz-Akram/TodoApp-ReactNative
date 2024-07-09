import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createTodo, Todo} from '../model/Todo';
import {addTodo} from '../model/TodoState';
import {RootState} from '../store/store';
import TodoList from '../components/TodoList';
import {useNavigation} from '@react-navigation/native';

function MainScreen() {
  const todos = useSelector((state: RootState) => state.todosReducer).todos;
  //   console.log('todos list from main screen:', todos);

  const dispatch = useDispatch();
  const navigator = useNavigation();

  function addTodoItem() {
    // const item = createTodo('todo title', 'todo description');
    // dispatch(addTodo(item));

    navigator.navigate('Todo');
  }

  return (
    <View style={styles.container}>
      <TodoList />
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
    marginTop: 80,
    width: '100%',
    backgroundColor: '#ff2314',
  },
});
