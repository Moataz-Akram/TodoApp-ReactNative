import {StyleSheet, Text, View} from 'react-native';
import {Todo} from '../model/Todo';

interface TodoItemProps {
  item: Todo;
  //   onPress: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.id}</Text>
      {/* <Text>{item.description}</Text> */}
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: 6,
    padding: 8,
    marginTop: 8,
  },
});
