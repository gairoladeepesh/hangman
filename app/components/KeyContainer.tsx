import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../screens/Styles';

type KeyContainerProps = {
  alphabets: Array<any>;
  processInput: (alphabet: string) => void;
};
const KeyContainer = (props: KeyContainerProps) => {
  const {alphabets, processInput} = props;
  return (
    <View style={styles.keysContainer}>
      {alphabets &&
        alphabets.map((alphabetArray, index) => {
          return (
            <View key={index} style={styles.rowKeys}>
              {alphabetArray.map((alphabet: String) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      processInput(`${alphabet}`);
                    }}
                    style={styles.btnKeys}>
                    <Text style={styles.textKeys}>{alphabet}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
    </View>
  );
};
export default KeyContainer;
