import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

const WelcomeScreen = ({onFinish = () => {}}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/welcomeImage.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <View
        style={styles.content}>
        <Text
          style={styles.header}>
          Simple solution for your budget.
        </Text>
        <Text
          style={styles.text}>
          Hello! Let's make managing your money easier together....
        </Text>
        <Pressable
          onPress={onFinish}
          style={styles.btn}>
          <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '54%',
  },
  content: {
    margin: 26,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '30%',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 24,
  },
  btn: {
    width: 195,
    height: 40,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default WelcomeScreen;
