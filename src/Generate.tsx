import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { addingNumberAtom } from './Generate.store';

export default function Generate() {
  //
  const [addingNumber, setAddingNumber] = useRecoilState(addingNumberAtom);

  return (
    <TouchableHighlight
      onPress={() => alert(addingNumber)}
      underlayColor="blue"
      activeOpacity={0.5}
      //   onHideUnderlay={() => alert('Hide')}
      //   onShowUnderlay={() => alert('Show')}
    >
      <View style={styles.nav}>
        <Text>Add Number</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});
