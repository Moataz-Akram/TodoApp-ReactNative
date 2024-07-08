import {StyleSheet, Text, View} from 'react-native';

function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
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
