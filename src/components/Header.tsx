//Contains the top Heading, with display text
// Also contains the game state banner which state wheather you win or lose.
import GameBanner from "./GameBanner"
import type { JSX } from 'react'

type Header = {
  gameCounter: number,
  gameCondition: string,
  isLastGuessIncorrect: boolean,
  playerInput: string[]
}
export default function Header( {gameCounter, gameCondition, isLastGuessIncorrect, playerInput} : Header ): JSX.Element {
  return (
    <header className="heading">
      <h3 id="title">Assembly Endgame</h3>
      <p>
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>

      <GameBanner
        gameCounter={gameCounter}
        gameCondition={gameCondition}
        isLastGuessIncorrect={isLastGuessIncorrect}
        playerInput={playerInput}
      />
    </header>
  );
}

