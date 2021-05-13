import React from 'react';
import {View, Modal, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from '../screens/Styles';

type OptionsModalProps = {
  wordsMap: any;
  showModal: boolean;
  selectWordToPlay: (item: any) => void;
  handleCloseModal: () => void;
};

const OptionsModal = (props: OptionsModalProps) => {
  const {wordsMap, showModal, selectWordToPlay, handleCloseModal} = props;
  return (
    <Modal transparent visible={showModal} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.txtModalTitle}>Select number of letters</Text>
          </View>

          {wordsMap && (
            <FlatList
              contentContainerStyle={styles.contentContainerStyle}
              data={Object.keys(wordsMap)}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.rowOptions}
                    onPress={() => selectWordToPlay(item)}>
                    <Text style={styles.txtList}>{item}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item}
            />
          )}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnCloseModal}
            onPress={handleCloseModal}>
            <Text style={styles.txtBtnCloseModal}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default OptionsModal;
