import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const TransactionCard = ({
  Type = '',
  Amount = 0,
  Category = '',
  Description = '',
}) => {
  return (
    <View
      style={{...styles.container,opacity: Type === 'Income' ? 0.5 : 1}}>
      <View style={styles.imageContainer}>
        <Image
          source={
            Type === 'Income'
              ? require('../../assets/incomeTrans.png')
              : require('../../assets/expenseTrans.png')
          }
          style={{width: 45, height: 45}}
          resizeMode='contain'
        />
        <Text style={{marginLeft: 10,fontSize:26,color:'black'}}>₹ {Amount}</Text>
      </View>
      <Text style={{marginRight:16,fontSize:18,color:'grey'}}>{Category}</Text>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 64,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:22,
        borderRadius:5
      },
      imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        justifyContent:'center'
      }
});
