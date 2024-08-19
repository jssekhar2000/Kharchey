import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Transactions = () => {
    return (
    <View style={styles.screenContainer}>
      <Text>Transactions Screen</Text>
    </View>
  )
};

export default Transactions

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    }
})