import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => (
    <View style={styles.screenContainer}>
      <Text>Profile Screen</Text>
    </View>
  );

export default Profile;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    }
})