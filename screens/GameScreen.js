import { View, Text, StyleSheet, Alert } from "react-native";

import Card from "../components/ui/Card";
import { Button } from "react-native-paper";
import Title from "../components/ui/Title";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState, useEffect } from "react";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;



export default function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] =useState([initialGuess]);


  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsLIstLength = guessRounds.length;


  return (
  <View>
    <Title>Opponent's Guess</Title>
    <View style={styles.guessNumContainer}>
      <Text style={styles.guessNum}>{currentGuess}</Text>
    </View>
    <Card>
      <Text style={styles.hlText}>Hiher or Lower?</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            buttonColor="black"
            mode="contained"
            onPress={nextGuessHandler.bind(this, 'lower')}
          >
            <Ionicons name="md-remove" size={24} color="white" />
          </Button>
        </View>
        <View style={styles.buttonContainer}>
        <Button
          buttonColor="black"
          mode="contained"
          onPress={nextGuessHandler.bind(this, 'higher')}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </Button>
        </View>
      </View>
    </Card>
  </View>
  )
}

const styles = StyleSheet.create({
  guessNumContainer: {
    marginTop: 20,
    marginHorizontal: 50,
    borderRadius: 8,
    borderColor: '#f9f958',
    borderWidth: 2,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5 )'
  },
  guessNum: {
    fontSize: 42,
    textAlign: 'center',
    color: '#f9f958',
    fontWeight: 'bold',
  },
  buttonsContainer: {

    justifyContent: 'center',
    flexDirection: 'row',

  },
  buttonContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  hlText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f9f958',
  }
})
