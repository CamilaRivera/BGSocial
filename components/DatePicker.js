import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Button, Icon } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import useVisbility from '../hooks/useVisibility';

export default function DatePicker() {
  const {visible, showModal, closeModal} = useVisbility();

  const getPickedDate = (date) => {
    console.log("A date has been picked: ", date);
    closeDatePicker();
  }

  return (
    <>
      <Button
        onPress={showModal}
        buttonStyle={styles.buttonContainer}
        icon={
          <Icon
          name='edit'
          type='material-icons'
          color='white'
          />
        }
      />
      <DateTimePicker
        mode={'datetime'}
        isVisible={visible}
        onConfirm={getPickedDate}
        onCancel={closeModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10
  }
})