import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const Loading = () => {
  return (
    <View style={style.container}>
      <ActivityIndicator size="large" />
    </View>
  )
};

export default Loading;