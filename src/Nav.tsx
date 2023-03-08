import { StyleSheet, Text, View } from 'react-native';

export default function Nav() {
  return (
    <View style={styles.nav}>
      <Text>My App</Text>
      <Text> here is Nav</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});
