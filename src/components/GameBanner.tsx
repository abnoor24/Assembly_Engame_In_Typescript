import { getFarewellText } from "./utils"
import languages, { type Language } from "../Data/languages"
import type { JSX } from "react/jsx-runtime"
type GameBanner = {
  gameCounter: number,
  gameCondition: string,
  isLastGuessIncorrect: boolean,
}

export default function GameBanner({gameCounter, gameCondition, isLastGuessIncorrect}: GameBanner): JSX.Element | null {

    if (gameCondition === "lost") {
        return <div
          aria-live="polite"
          role="status"
          className="game-state-display"
          style={{ backgroundColor: "#BA2A2A" }}
        >
          <h3>Game over!</h3>
          <h4>You lose! Better start learning Assembly 😭</h4>
        </div>
    } else if (gameCondition === "won") {
        return <div
          aria-live="polite"
          role="status"
          className="game-state-display"
          style={{ backgroundColor: "#10a95b" }}
        >
          <h3>You Win!</h3>
          <h4> Well done!🎉</h4>
        </div>
    } else if (gameCounter > 0) {
      if (isLastGuessIncorrect) {
        const lostLanguage: Language | undefined = languages.find(
          (element) => element.id === gameCounter,
        )
        return <div
          aria-live="polite"
          role="status"
          className="game-state-display"
          style={{ backgroundColor: "#7A5EA7", border: "1px solid #323232" }}
        >
          { lostLanguage && <h3>{getFarewellText(lostLanguage.name)}</h3> }
        </div>
      }
    }

  return null
}
