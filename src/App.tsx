import { useState } from "react";
import Header from "./components/Header";
import LanguageDisplay from "./components/Language_Display"
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import Confetti from "react-confetti";
import { getRandomWord } from "./components/utils";

export default function App() {
  const [currentWord, setCurrentWord] = useState<string>(():string => getRandomWord());
  const [playerInput, setPlayerInput] = useState<string[]>([]);
  const lastGuessedLetter: string = playerInput[playerInput.length - 1];
  const isLastGuessIncorrect: boolean = Boolean(
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter))

  //Derived Values
  const gameCounter: number = playerInput.filter(
    (char) => !currentWord.includes(char),
  ).length; // From 0 to 8

  let gameCondition: 'won' | 'running' | 'lost' = "running"; // won, running and lost
  if (playerInput.length > 0) {
    if (currentWord.split("").every((letter) => playerInput.includes(letter))) {
      gameCondition = "won";
    } else if (gameCounter > 7) {
      gameCondition = "lost";
    }
  }
  const isGameOver: boolean = ["won", "lost"].includes(gameCondition);
  //console.log(`GameOver: ${isGameOver}`);
  //console.log(`gameCounter: ${gameCounter} \n gameCondition: ${gameCondition}`);

  // function on Keyboard Press
  function keyboardPress(id: string): void {
    if (!playerInput.includes(id)) {
      setPlayerInput((prevState: string[]): string[] => [...prevState, id]);
    }
  }

  //function on New Game
  function newGame(): void {
    setPlayerInput([]);
    setCurrentWord(getRandomWord());
  }

  return (
    <main>
      <Header
        gameCounter={gameCounter}
        gameCondition={gameCondition}
        isLastGuessIncorrect={isLastGuessIncorrect}
      />
      <LanguageDisplay gameCounter={gameCounter} />
      <WordDisplay
        playerInput={playerInput}
        currentWord={currentWord}
        gameCondition={gameCondition}
      />
      <Keyboard
        keyboardPress={keyboardPress}
        playerInput={playerInput}
        currentWord={currentWord}
        isGameOver={isGameOver}
      />

      <section>
        {isGameOver && (
          <button id="new-game" onClick={newGame}>
            New Game
          </button>
        )}
      </section>
      {gameCondition === "won" && (
        <Confetti recycle={false} numberOfPieces={1000} /> //change this to a confetti container
      )}
    </main>
  )
}

// if (char.letter === id) {
//           const isMatch = currentWord.toUpperCase().includes(id);

//           return {
//             ...char,
//             color: isMatch ?
//           };
//         } else return char;

// useEffect(() => {
//     if (playerInput.length !== 0) {
//       if (currentWordArr.every((letter) => playerInput.includes(letter))) {
//         setGameState((prev) => ({ ...prev, condition: "won" }));
//       } else if (gameCounter > 8) {
//         setGameState((prev) => ({ ...prev, condition: "lost" }));
//       }
//     }
//   }, [playerInput]);
