import { clsx } from "clsx";
type gameStatus = 'lost' | 'won' | 'running'
import type { JSX } from "react/jsx-runtime";
type WordDisplay = { playerInput: string[], currentWord: string, gameCondition: gameStatus }

export default function WordDisplay({playerInput, currentWord, gameCondition}: WordDisplay): JSX.Element {
  const answerDisplay: JSX.Element[] = currentWord.split("").map((char:string, index: number): JSX.Element => {
    const isLost: boolean = gameCondition === "lost";
    const isShown: boolean = playerInput.includes(char) ? true : false;
    const className: string = clsx(isLost && !isShown && "missed-letter");
    return (
      <span key={index} className={className}>
        {isShown || isLost ? char.toUpperCase() : ""}
      </span>
    );
  });

  return <section className="word">{answerDisplay}</section>;
}

