import React from 'react';
import {TextInput, View} from 'react-native';
import styles from '../screens/Styles';

type TFInputsProps = {
  matchedAlphabets: any;
};
const TFInputs = (props: TFInputsProps) => {
  const {matchedAlphabets} = props;
  return (
    <View style={styles.textContainer}>
      {matchedAlphabets &&
        matchedAlphabets.map((alphabet: string) => {
          return (
            <TextInput
              textAlign="center"
              editable={false}
              style={styles.txtAlphabets}>
              {alphabet}
            </TextInput>
          );
        })}
    </View>
  );
};

export default TFInputs;
