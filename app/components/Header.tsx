import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../screens/Styles';

type HeaderProps = {
  incorrectAttempts: number;
  restartGame: () => void;
};

const Header = (props: HeaderProps) => {
  const {incorrectAttempts, restartGame} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.resultContainer}>
        <Text style={styles.txtResult}>
          Wrong Answers : {incorrectAttempts}
        </Text>
      </View>
      <View style={styles.btnRestart}>
        <TouchableOpacity onPress={restartGame}>
          <Text>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
