import React,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import SwipeUpModal from "../Components/SwipUpModal";



const AddExpenses = () =>{
    const [isModalVisible, setModalVisible] = useState<boolean>(true);
console.log('-------------');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
      console.log(isModalVisible);
      
    return (
        <View style={styles.screenContainer}>
            <Text>Add Expenses Screen</Text>
            <SwipeUpModal isVisible={isModalVisible} onClose={toggleModal}>
                {/* Pass any content you want to render inside the modal */}
                <Text>Add Your Expense Details Here</Text>
                {/* <Button title="Close" onPress={toggleModal} /> */}
            </SwipeUpModal>
        </View>
    )
};

export default AddExpenses

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
})