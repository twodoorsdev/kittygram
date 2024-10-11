import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export const UploadButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          setModalVisible(true);
        }}
        // buttonStyle={styles.buttonStyle}
      >
        <FontAwesome size={28} name="plus-circle" color="blue" />
      </Pressable>
      <View style={styles.container}>
        <Modal
          // backdropOpacity={0.3}}
          visible={modalVisible}
          // onBackdropPress={() => setModalVisible(false)}
          // style={styles.contentView}
        >
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Text>Hello from Overlay!</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,
  },
  container: {},
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttonStyle: {
    height: 90,
    width: 90,
    backgroundColor: 'red',
    borderRadius: 100,
    marginVertical: -45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
