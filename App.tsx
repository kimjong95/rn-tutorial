import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import Generate from './src/Generate';
import Nav from './src/Nav';

export default function App() {
  //

  return (
    <RecoilRoot>
      <View style={styles.mainView}>
        <Nav />
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Text for View1</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Text for View2</Text>
        </View>
        <Generate />
      </View>
    </RecoilRoot>
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
  basicView: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5,
  },
  basicText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 20,
  },
});
