import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Card } from '../../components/Card';
import { images } from '../../fixtures/images';

export default function Tab() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <GestureHandlerRootView>
          <FlatList
            // style={styles.list}
            contentContainerStyle={styles.list}
            data={images}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => item.id}
          />
        </GestureHandlerRootView>
        {/*<Text>Tab [Home|Settings]</Text>*/}
      </View>

      <View style={styles.bottomActions}>
        <Pressable style={styles.button}>
          <Text>Upload new photo</Text>
        </Pressable>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listContainer: {
    // flex: 1,
    // backgroundColor: 'blue',
    width: '100%',
    height: '100%',
  },
  list: {
    // rowGap: 10,
    // flex: 1,
    // width: '100%',
  },
  bottomActions: {
    backgroundColor: 'red',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
});
