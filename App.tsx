import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import WelcomeScreen from './Screens/Welcome/WelcomeScreen';

const Tab = createBottomTabNavigator();

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const date = new Date();

const getFormattedDate = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = new Date();
  const dayName = days[date.getDay()]; // Get the name of the day
  const dayNumber = date.getDate(); // Get the day number

  return `${dayName} ${dayNumber}`;
};

//console.log(getFormattedDate());

// const HomeScreen = () => (
//   <View style={{flex: 1}}>
//     <View style={{
//         height: '100%',
//         overflow: 'hidden',
//         backgroundColor: '#fff',
//          // Ensure the border respects the radius
//       }}>
//       <LinearGradient
//         colors={['#FFF6E5', '#F8EDD8','#0000']}
//         locations={[0, 0.5, 1]}
//         style={{
//           borderBottomRightRadius: 100,
//           borderBottomLeftRadius: 100,
//           flex:1,
//           backgroundColor:'#F8EDD8'
//         }} // Use percentage height directly
//       >
//         <View>
//           <Text>Home Screen</Text>
//         </View>
//       </LinearGradient>
//     </View>
//     <LinearGradient
//       colors={['transparent', 'grey']}
//       style={{height: '60%'}} // Use percentage height directly
//     >
//       <View>
//         <Text>Home Screen</Text>
//       </View>
//     </LinearGradient>
//   </View>
// );

const HomeScreen = () => (
  <LinearGradient
    colors={['transparent', 'grey']}
    style={{height: '100%', padding: 16, paddingTop: 5}} // Use percentage height directly
  >
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingHorizontal: 9,
        //backgroundColor: 'red',
      }}>
      <View>
        <Text style={{fontSize: 16, color: 'black'}}>{`${
          days[date.getDay()]
        } ${date.getDate()}`}</Text>
        <Text style={{fontSize: 16, color: 'black'}}>
          {months[date.getMonth()]}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            //backgroundColor: 'black',
            borderRadius: 50,
            borderColor: 'black',
            borderWidth: 1,
            height: 32,
            width: 32,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Image
            source={require('./assets/profile.png')}
            style={{width: 30, height: 30}}
          />
        </View>
        <Text style={{fontSize: 16, color: 'black'}}>Sekhar Mohanta</Text>
      </View>
    </View>
    {/* <Text>Home Screen</Text> */}
  </LinearGradient>
);
const TransactionsScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Transactions Screen</Text>
  </View>
);

const AddExpensesScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Add Expenses Screen</Text>
  </View>
);

const StatisticsScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Statistics Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Profile Screen</Text>
  </View>
);

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
        <Tab.Screen name="Transactions" component={TransactionsScreen} />
        <Tab.Screen
          name="Add Expenses"
          component={AddExpensesScreen}
          options={{tabBarLabel: () => null}}
        />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
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
