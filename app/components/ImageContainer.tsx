import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';

type ImageContainerProps = {
  incorrectAttempts: number;
};

const ImageContainer = (props: ImageContainerProps) => {
  const {incorrectAttempts} = props;
  const [imagePath, setImagePath] = useState<any>(require('../assets/1.png'));

  useEffect(() => {
    if (incorrectAttempts > 0) {
      var imgLocalPath;
      switch (incorrectAttempts) {
        case 2:
          imgLocalPath = require('../assets/2.png');
          break;
        case 3:
          imgLocalPath = require('../assets/3.png');
          break;
        case 4:
          imgLocalPath = require('../assets/4.png');
          break;
        case 5:
          imgLocalPath = require('../assets/5.png');
          break;
        case 6:
          imgLocalPath = require('../assets/6.png');
          break;
        default:
          imgLocalPath = require('../assets/1.png');
          break;
      }
      setImagePath(imgLocalPath);
    }
  }, [incorrectAttempts]);

  return <View>{incorrectAttempts ? <Image source={imagePath} /> : null}</View>;
};

export default ImageContainer;
