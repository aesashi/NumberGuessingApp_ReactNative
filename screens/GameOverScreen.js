import {StyleSheet, View, Image, Text} from 'react-native';
import Title from '../components/ui/Title';
import { Button } from "react-native-paper";

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (

    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContent}>
        <Image
          source={require('../assets/images/success.png')}
          style = {styles.image}
        />
       </View>
      <View style={styles.textContainer}>
        <Text style={styles.summaryText}>Your Phone needed<Text> {roundsNumber} </Text>
              rounds to guess the number <Text>{userNumber}</Text></Text>
      </View>
      <Button
              buttonColor="black"
              mode="contained"
              onPress={onStartNewGame}
            >
            Start New Game
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContent: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',

  },
  textContainer: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor:  '#72063c',
    backgroundColor: '#72063c',
    marginHorizontal:24,
    marginBottom: 16,
    opacity: 0.8
  },
  summaryText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    padding: 16
  }
})
