import {Text ,TextInput, StyleSheet, View, Alert } from "react-native";
import { Button } from "react-native-paper";
import { useState, useEffect } from "react";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";

export default function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText)
  }


  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber < 1) {
      Alert.alert(
        "Invalid input",
        "Please enter number 1 - 99. ",
        [{text: "Okay",  color: "destructive"}]
      );
      resetInputHandler();
    } else {
      onPickNumber(chosenNumber)
    }
  }

  function resetInputHandler(){
    setEnteredNumber('')
  }


  return (
    <View>
      <Title>Guess The Number</Title>
      <Card>
        <TextInput
          maxLength={2}
          style={styles.numberInput}
          keyboardType={"number-pad"}
          autoCapitalize="none"
          autoCorrect= {false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
          <Button
              buttonColor="black"
              mode="contained"
              onPress={resetInputHandler}
            >
            Reset
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              buttonColor="black"
              mode="contained"
              onPress={confirmInputHandler}
            >
              Confirm
            </Button>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({


  buttonsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',

  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 24,
    textAlign: 'center',
  }

})
