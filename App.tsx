import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainView}>
      <View>
        <Text style={{ backgroundColor: 'red', width: '100%' }}>
          Text for View1
        </Text>
      </View>
      <View>
        <Text>Text for View2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'skyblue',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
