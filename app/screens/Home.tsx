import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
// Style Inclusion
import styles from './Styles';
// Components inclusion
import Header from '../components/Header';
import ImageContainer from '../components/ImageContainer';
import KeyContainer from '../components/KeyContainer';
import OptionsModal from '../components/OptionsModal';
import TFInputs from '../components/TFInputs';
import {AlphaBets, WordsArray, offset} from '../Constants';

const Home = () => {
  const [alphabets, setAlphabets] = useState<Array<any>>();
  const [wordsMap, setWordsMap] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [wordToPlay, setWordToPlay] = useState<string>('');
  const [gameAlphabets, setGameAlphabets] = useState<Array<any>>();
  const [matchedAlphabets, setMatchedAlphabets] = useState<Array<any>>();
  const [incorrectAttempts, setIncorrectAttempts] = useState<number>(0);

  useEffect(() => {
    processWords();
    prepareWordsMap();
  }, []);

  useEffect(() => {
    // Whenever word changes prepare the fields to enter characters
    preparePlay(wordToPlay);
    setShowModal(!showModal);
  }, [wordToPlay]);

  useEffect(() => {
    if (incorrectAttempts == 6) {
      Alert.alert(
        'Level Failed',
        'You have failed this level. Press Ok to restart.',
        [
          {
            text: 'Ok',
            onPress: () => restartGame(),
            style: 'cancel',
          },
        ],
      );
    }
  }, [incorrectAttempts]);
  const restartGame = () => {
    setShowModal(!showModal);
  };

  const processWords = () => {
    const alphabetArray = AlphaBets.split('');

    var results = [];

    while (alphabetArray.length) {
      results.push(alphabetArray.splice(0, offset));
    }

    setAlphabets(results);
  };

  const processInput = (alphabet: string) => {
    if (!gameAlphabets?.includes(alphabet)) {
      let incorrectCount = incorrectAttempts + 1;
      setIncorrectAttempts(incorrectCount);
    } else {
      var tempArray: any = [];
      tempArray.push(...matchedAlphabets);
      gameAlphabets.map((character, index) => {
        if (alphabet === character) {
          tempArray[index] = alphabet;
        } else {
        }
      });
      setMatchedAlphabets(tempArray);
    }
  };

  const prepareWordsMap = () => {
    type Dict = {[key: string]: []};
    var wordsMap: Dict = {};

    WordsArray.map(word => {
      const wordCount = word.length;
      if (!wordsMap[wordCount]) {
        wordsMap[wordCount] = [];
      }
      wordsMap[wordCount].push(word);
    });
    setWordsMap(wordsMap);
  };

  const selectWordToPlay = (item: any) => {
    const wordsArray = wordsMap[item];
    const randomWordToPlay: string =
      wordsArray[Math.floor(Math.random() * wordsArray.length)];
    setWordToPlay(randomWordToPlay.toUpperCase());
    setIncorrectAttempts(0);
  };

  const preparePlay = (word: string) => {
    const wordArray = word.split('');
    var blankArray: any = [];
    wordArray.map(() => {
      blankArray.push('');
    });
    setMatchedAlphabets(blankArray);
    setGameAlphabets(wordArray);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={styles.container}>
      <Header incorrectAttempts={incorrectAttempts} restartGame={restartGame} />

      <View style={styles.imgContainer}>
        <ImageContainer incorrectAttempts={incorrectAttempts} />
        <TFInputs matchedAlphabets={matchedAlphabets} />
      </View>
      {alphabets && (
        <KeyContainer alphabets={alphabets} processInput={processInput} />
      )}
      <OptionsModal
        wordsMap={wordsMap}
        showModal={showModal}
        selectWordToPlay={selectWordToPlay}
        handleCloseModal={handleCloseModal}
      />
    </View>
  );
};

export default Home;
