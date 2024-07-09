import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Todo} from '../model/Todo';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateTodo} from '../model/TodoState';
import {useState} from 'react';

interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({item}) => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(item.isDone);
  function navigateToEditItem() {
    navigator.navigate('Todo', {isEditing: true, todo: item});
  }

  function checkBoxDidPress() {
    const updatedItem: Todo = {...item, isDone: !isChecked};
    setIsChecked(!isChecked);
    dispatch(updateTodo(updatedItem));
  }

  return (
    <Pressable onPress={navigateToEditItem}>
      <View style={[styles.container, isChecked && styles.checkBoxPressed]}>
        <Text>{item.title}</Text>
        <Pressable
          onPress={checkBoxDidPress}
          style={({pressed}) => pressed && styles.checkBoxPressed}>
          <View style={[styles.checkBox, isChecked && styles.checked]}>
            {isChecked && (
              <Image
                source={require('../src/tick.jpg')}
                style={styles.checkBoxIcon}
              />
            )}
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
    borderRadius: 6,
    padding: 8,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    height: 18,
    width: 18,
  },
  checked: {
    backgroundColor: 'cyan',
  },
  checkBoxPressed: {
    opacity: 0.5,
  },
  checkBoxIcon: {
    height: 16,
    width: 16,
  },
});
