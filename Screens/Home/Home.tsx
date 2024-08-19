import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {months, days} from '../Utils/Constants';
import TransactionCard from '../Components/TransactionCard';

const HomeScreen = () => {
  const date = new Date();
  const [transTitle, setTransTitle] = useState<string>('Today');
  const [transactions, setTransactions] = useState<
    {Type: string; Amount: number; Category: string; Description: string}[]
  >([]);

  const todayTrans = [
    {
      Type: 'Income',
      Amount: 1000,
      Category: 'salary',
      Description: 'salary',
    },
    {
      Type: 'Expense',
      Amount: 2000,
      Category: 'Food',
      Description: 'Food Purchase',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Shopping',
      Description: 'Shopping',
    },
    {
      Type: 'Income',
      Amount: 10000,
      Category: 'Win',
      Description: 'Win',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Subscriptions',
      Description: 'Recharge',
    },
  ];

  const weekTrans = [
    {
      Type: 'Income',
      Amount: 1000,
      Category: 'salary',
      Description: 'salary',
    },
    {
      Type: 'Expense',
      Amount: 2000,
      Category: 'Food',
      Description: 'Food Purchase',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Shopping',
      Description: 'Shopping',
    },
    {
      Type: 'Income',
      Amount: 10000,
      Category: 'Win',
      Description: 'Win',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Subscriptions',
      Description: 'Recharge',
    },
    {
      Type: 'Income',
      Amount: 1000,
      Category: 'salary',
      Description: 'salary',
    },
    {
      Type: 'Expense',
      Amount: 2000,
      Category: 'Food',
      Description: 'Food Purchase',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Shopping',
      Description: 'Shopping',
    },
    {
      Type: 'Income',
      Amount: 10000,
      Category: 'Win',
      Description: 'Win',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Subscriptions',
      Description: 'Recharge',
    },
  ];

  const monthTrans = [
    {
      Type: 'Income',
      Amount: 1000,
      Category: 'salary',
      Description: 'salary',
    },
    {
      Type: 'Expense',
      Amount: 2000,
      Category: 'Food',
      Description: 'Food Purchase',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Shopping',
      Description: 'Shopping',
    },
    {
      Type: 'Income',
      Amount: 10000,
      Category: 'Win',
      Description: 'Win',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Subscriptions',
      Description: 'Recharge',
    },
    {
      Type: 'Income',
      Amount: 1000,
      Category: 'salary',
      Description: 'salary',
    },
    {
      Type: 'Expense',
      Amount: 2000,
      Category: 'Food',
      Description: 'Food Purchase',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Shopping',
      Description: 'Shopping',
    },
    {
      Type: 'Income',
      Amount: 10000,
      Category: 'Win',
      Description: 'Win',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Subscriptions',
      Description: 'Recharge',
    },
    {
      Type: 'Income',
      Amount: 1000,
      Category: 'salary',
      Description: 'salary',
    },
    {
      Type: 'Expense',
      Amount: 2000,
      Category: 'Food',
      Description: 'Food Purchase',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Shopping',
      Description: 'Shopping',
    },
    {
      Type: 'Income',
      Amount: 10000,
      Category: 'Win',
      Description: 'Win',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Subscriptions',
      Description: 'Recharge',
    },
  ];

  const yearTrans = [
    {
      Type: 'Income',
      Amount: 1000,
      Category: 'salary',
      Description: 'salary',
    },
    {
      Type: 'Expense',
      Amount: 2000,
      Category: 'Food',
      Description: 'Food Purchase',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Shopping',
      Description: 'Shopping',
    },
    {
      Type: 'Income',
      Amount: 10000,
      Category: 'Win',
      Description: 'Win',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Subscriptions',
      Description: 'Recharge',
    },
    {
      Type: 'Income',
      Amount: 1000,
      Category: 'salary',
      Description: 'salary',
    },
    {
      Type: 'Expense',
      Amount: 2000,
      Category: 'Food',
      Description: 'Food Purchase',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Shopping',
      Description: 'Shopping',
    },
    {
      Type: 'Income',
      Amount: 10000,
      Category: 'Win',
      Description: 'Win',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Subscriptions',
      Description: 'Recharge',
    },
    {
      Type: 'Income',
      Amount: 1000,
      Category: 'salary',
      Description: 'salary',
    },
    {
      Type: 'Expense',
      Amount: 2000,
      Category: 'Food',
      Description: 'Food Purchase',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Shopping',
      Description: 'Shopping',
    },
    {
      Type: 'Income',
      Amount: 10000,
      Category: 'Win',
      Description: 'Win',
    },
    {
      Type: 'Expense',
      Amount: 1000,
      Category: 'Subscriptions',
      Description: 'Recharge',
    },
  ];

  useEffect(() => {
    if (transTitle === 'Today') {
      setTransactions(todayTrans);
    } else if (transTitle === 'Week') {
      setTransactions(weekTrans);
    } else if (transTitle === 'Month') {
      setTransactions(monthTrans);
    } else if (transTitle === 'Year') {
      setTransactions(yearTrans);
    }
  }, [transTitle]);

  return (
    <LinearGradient colors={['transparent', 'grey']} style={styles.container}>
      <View style={styles.headerView}>
        <View>
          <Text style={styles.dateText}>{`${
            days[date.getDay()]
          } ${date.getDate()}`}</Text>
          <Text style={styles.dateText}>{months[date.getMonth()]}</Text>
        </View>
        <View style={styles.profileView}>
          <View style={styles.profile}>
            <Image
              source={require('../../assets/profile.png')}
              style={styles.profileIcon}
            />
          </View>
          <Text style={styles.dateText}>Sekhar Mohanta</Text>
        </View>
      </View>

      <View style={styles.balanceView}>
        <Text style={styles.balanceText}>Total Balance</Text>
        <Text style={styles.balance}>{'₹ 9400.0'}</Text>
      </View>

      <View style={styles.expenseContainer}>
        <View style={styles.expenseView}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/income.png')}
              style={{height: 46, width: 46}}
            />
          </View>
          <View style={{marginLeft: 12}}>
            <Text style={styles.incomeText}>Income</Text>
            <Text style={styles.incomeAmt}>25000</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.expenseView,
            backgroundColor: '#FD3C4A',
          }}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/expense.png')}
              style={{height: 32, width: 32}}
            />
          </View>
          <View style={{marginLeft: 12}}>
            <Text style={styles.incomeText}>Expenses</Text>
            <Text style={styles.incomeAmt}>11200</Text>
          </View>
        </View>
      </View>

      <View style={styles.transToggle}>
        <Pressable
          style={{
            ...styles.pressable,
            backgroundColor: transTitle === 'Today' ? 'black' : 'transparent',
          }}
          onPress={() => setTransTitle('Today')}>
          <Text
            style={{
              ...styles.transTitleText,
              fontWeight: transTitle === 'Today' ? 'bold' : 'normal',
            }}>
            Today
          </Text>
        </Pressable>
        <Pressable
          style={{
            ...styles.pressable,
            backgroundColor: transTitle === 'Week' ? 'black' : 'transparent',
          }}
          onPress={() => setTransTitle('Week')}>
          <Text
            style={{
              ...styles.transTitleText,
              fontWeight: transTitle === 'Week' ? 'bold' : 'normal',
            }}>
            Week
          </Text>
        </Pressable>
        <Pressable
          style={{
            ...styles.pressable,
            backgroundColor: transTitle === 'Month' ? 'black' : 'transparent',
          }}
          onPress={() => setTransTitle('Month')}>
          <Text
            style={{
              ...styles.transTitleText,
              fontWeight: transTitle === 'Month' ? 'bold' : 'normal',
            }}>
            Month
          </Text>
        </Pressable>
        <Pressable
          style={{
            ...styles.pressable,
            backgroundColor: transTitle === 'Year' ? 'black' : 'transparent',
          }}
          onPress={() => setTransTitle('Year')}>
          <Text
            style={{
              ...styles.transTitleText,
              fontWeight: transTitle === 'Year' ? 'bold' : 'normal',
            }}>
            Year
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          marginHorizontal: 8,
          alignItems: 'center',
        }}>
        <Text style={styles.dateText}>Recent Transactions</Text>
        <Text style={styles.dateText}>View All</Text>
      </View>

      <ScrollView style={{marginTop: 20}}>
        {transactions.map((transaction, index) => (
          <TransactionCard
            key={index}
            Type={transaction.Type}
            Amount={transaction.Amount}
            Category={transaction.Category}
            Description={transaction.Description}
          />
        ))}
      </ScrollView>

      {/* <Text>Home Screen</Text> */}
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 16,
    paddingTop: 5,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 9,
  },
  dateText: {
    fontSize: 16,
    color: 'black',
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  balanceView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  balanceText: {
    color: '#91919F',
    fontSize: 16,
  },
  balance: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  pressable: {
    height: '100%',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  transTitleText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  transToggle: {
    width: '100%',
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 20,
  },
  expenseContainer: {
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  expenseView: {
    height: 90,
    width: '45%',
    borderRadius: 35,
    backgroundColor: '#00A86B',
    marginRight: 22,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    height: 48,
    width: 48,
    backgroundColor: 'white',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incomeText: {
    fontSize: 14,
    color: 'white',
  },
  incomeAmt: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});
