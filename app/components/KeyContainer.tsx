import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../screens/Styles";

type KeyContainerProps = {
  alphabets: Array<any>;
  processInput: (alphabet: string) => void;
};
const KeyContainer = (props: KeyContainerProps) => {
  const { alphabets, processInput } = props;
  const [alreadySelectedAlpha, setSelectedAlpha] = useState<Array<string>>([]);

  const selectedAlphabets = (alpha: string) => {
    var arrayAlpha = [...alreadySelectedAlpha];
    arrayAlpha.push(alpha);
    setSelectedAlpha(arrayAlpha);
  };

  return (
    <View style={styles.keysContainer}>
      {alphabets &&
        alphabets.map((alphabetArray, index) => {
          return (
            <View key={index} style={styles.rowKeys}>
              {alphabetArray.map((alphabet: string, index: number) => {
                return (
                  <TouchableOpacity
                    disabled={
                      alreadySelectedAlpha.includes(alphabet) ? true : false
                    }
                    activeOpacity={0.8}
                    onPress={() => {
                      selectedAlphabets(alphabet);
                      processInput(`${alphabet}`);
                    }}
                    style={[styles.btnKeys, {
                      backgroundColor: alreadySelectedAlpha.includes(
                        alphabet
                      )
                        ? "grey"
                        : "white"
                    }]}>
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
