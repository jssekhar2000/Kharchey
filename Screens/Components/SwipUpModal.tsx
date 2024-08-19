import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

interface SwipeUpModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode; // Allows you to pass React elements as children
}

const SwipeUpModal: React.FC<SwipeUpModalProps> = ({ isVisible, onClose, children }) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 200,
  },
});

export default SwipeUpModal;
