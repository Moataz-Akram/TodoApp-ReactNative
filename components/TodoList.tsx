import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((state: RootState) => state.todosReducer).todos;

  return (
    <FlatList
      style={style.container}
      data={todos}
      renderItem={({item}) => (
        <View>
          <TodoItem item={item} />
        </View>
      )}
    />
  );
}

export default TodoList;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
});
