import { clsx } from "clsx"
import type {JSX} from 'react'
type Keyboard = {
  keyboardPress: (id: string) => void,
  playerInput: string[],
  currentWord: string,
  isGameOver: boolean
}

export default function Keyboard({ keyboardPress, playerInput, currentWord, isGameOver }: Keyboard) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardDisplay: JSX.Element[] = alphabet.split("").map((letter: string): JSX.Element => {
    const isGuessed: boolean = playerInput.includes(letter)
    const isCorrect: boolean = isGuessed && currentWord.includes(letter)
    const isWrong: boolean = isGuessed && !currentWord.includes(letter)

    //CLSX constructor for className
    const className: string = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        key={letter}
        className={className}
        onClick={() => keyboardPress(letter)}
        disabled={isGameOver}
        aria-disabled={playerInput.includes(letter)}
        aria-label={`label: ${letter}`}
      >
        {letter.toUpperCase()}
      </button>
    )
  })
  return <section className="keyboard">{keyboardDisplay}</section>;
}


