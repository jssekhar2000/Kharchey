import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Statistics = () => (
    <View style={styles.screenContainer}>
      <Text>Statistics Screen</Text>
    </View>
  );

export default Statistics;  

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    }
})