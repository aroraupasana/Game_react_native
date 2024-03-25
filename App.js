import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [userNum, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(num) {
    setUserNumber(num);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function startNewGameHandler() {
    setUserNumber(null);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNum) {
    screen = <GameScreen userNum={userNum} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNum) {
    screen = <GameOverScreen onStartNewGame={startNewGameHandler} />;
  }

  return (
    <ImageBackground
      style={styles.container}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
      source={require("./assets/images/background.jpg")}
    >
      {screen}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
  backgroundImage: {
    opacity: 0.45,
  },
});
