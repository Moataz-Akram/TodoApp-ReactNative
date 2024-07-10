import 'react-native-gesture-handler';

import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainScreen from './screens/MainScreen';
import {Provider} from 'react-redux';
import {todoStore} from './store/store';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoForm from './screens/TodoForm';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={todoStore}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#858585',
            },
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            component={MainScreen}
            name="Main Screen"
            options={({navigation}) => ({
              title: 'Todo List',
              headerRight: () => {
                const navigateToAddItem = () => {
                  navigation.navigate('Todo');
                };

                return (
                  <View>
                    <Button
                      title="add item"
                      onPress={navigateToAddItem}
                      color={'black'}
                    />
                  </View>
                );
              },
            })}
          />
          <Stack.Screen component={TodoForm} name="Todo" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
