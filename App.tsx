import {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';


export default function App() {


const [targetnumber,setTargetNumber]= useState<number>(() => Math.floor(Math.random() * 100) + 1);
 const [guess,setGuess] = useState ('');
const [feedback, setFeedback] = useState('');

const GuessTime = () => {
if (guess === '') {
  setFeedback('Please enter a number');
} else {
  const userGuess = parseInt(guess);
  if (userGuess === targetnumber){
    setFeedback('You got the correct answer');
  } else if (userGuess < targetnumber){
    setFeedback('Try a higher number.');
  }else{
    setFeedback('Try a lower number');
  }
}
};

const resetGame = () => {

setTargetNumber(Math.floor(Math.random() * 100) + 1);  
setGuess('');
setFeedback('');
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mystery Number Challenge
      </Text>
      <TextInput style= {styles.input} keyboardType= "numeric" placeholder = "What's the mystery number?" value={guess}  onChangeText={(Text) => setGuess(Text)} >
      </TextInput>

      <Button title = "Submit"
      onPress = {GuessTime} />

      <Text style={styles.feedback}>{feedback}
      </Text>

      <Button title= "Restart Game"
      onPress= {resetGame} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    input: {
        height: 40,

  },
  feedback: {
    height: 40,
  },
})