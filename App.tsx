import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './Screens/Welcome/WelcomeScreen';
import HomeScreen from './Screens/Home/Home';
import Transactions from './Screens/Transactions/Transactions';
import AddExpenses from './Screens/Add/AddExpenses';
import Statistics from './Screens/Statistics/Statistics';
import Profile from './Screens/Profile/Profile';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem('hasLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('hasLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === true) {
    return <WelcomeScreen onFinish={() => setIsFirstLaunch(false)} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: styles.tabBar, // Apply the global tabBar style
          tabBarIcon: ({focused}) => {
            let iconSource;
            switch (route.name) {
              case 'Home':
                iconSource = focused
                  ? require('./assets/home_active.png')
                  : require('./assets/home.png');
                break;
              case 'Transactions':
                iconSource = focused
                  ? require('./assets/transaction_active.png')
                  : require('./assets/transaction.png');
                break;
              case 'Add Expenses':
                iconSource = require('./assets/add.png');
                break;
              case 'Statistics':
                iconSource = focused
                  ? require('./assets/statistics_active.png')
                  : require('./assets/statistics.png');
                break;
              case 'Profile':
                iconSource = focused
                  ? require('./assets/profile_active.png')
                  : require('./assets/profile.png');
                break;
            }
            return (
              <Image
                source={iconSource}
                resizeMode="contain"
                style={
                  route.name == 'Add Expenses'
                    ? styles.bigTabIcon
                    : styles.tabIcon
                }
              />
            );
          },
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                ...styles.tabLabel,
                color: focused ? '#7F3DFF' : '#C6C6C6',
              }}>
              {route.name}
            </Text>
          ),
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Transactions" component={Transactions} />
        <Tab.Screen
          name="Add Expenses"
          component={AddExpenses}
          options={{tabBarLabel: () => null}}
        />
        <Tab.Screen name="Statistics" component={Statistics} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabLabel: {
    fontSize: 12,
  },
  bigTabIcon: {
    height: 60,
    width: 60,
    marginBottom: 15,
  },
  tabBar: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    elevation: 0,
    backgroundColor: '#FFFFFF', // Change background color to red
    borderRadius: 15,
    height: 60,
    paddingBottom: 5,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
});

export default App;
