import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Screen = ({children, style}) => {
  return <SafeAreaProvider style={style}>{children}</SafeAreaProvider>;
};

export default Screen;
