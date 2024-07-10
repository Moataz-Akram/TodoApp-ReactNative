import {Button, StyleSheet, Text, View} from 'react-native';
import TodoList from '../components/TodoList';
import {useNavigation} from '@react-navigation/native';

function MainScreen() {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#CCCCCC',
    paddingBottom: 20,
  },
});
