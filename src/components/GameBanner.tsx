import { getFarewellText } from "./utils"
import languages from "../Data/Languages"

export default function GameBanner(props) {

    if (props.gameCondition === "lost") {
        return <div
          aria-live="polite"
          role="status"
          className="game-state-display"
          style={{ backgroundColor: "#BA2A2A" }}
        >
          <h3>Game over!</h3>
          <h4>You lose! Better start learning Assembly 😭</h4>
        </div>
    } else if (props.gameCondition === "won") {
        return <div
          aria-live="polite"
          role="status"
          className="game-state-display"
          style={{ backgroundColor: "#10a95b" }}
        >
          <h3>You Win!</h3>
          <h4> Well done!🎉</h4>
        </div>
    } else if (props.gameCounter > 0) {
      if (props.isLastGuessIncorrect) {
        const lostLanguage = languages.find(
          (element) => element.id === props.gameCounter,
        )
        return <div
          aria-live="polite"
          role="status"
          className="game-state-display"
          style={{ backgroundColor: "#7A5EA7", border: "1px solid #323232" }}
        >
          <h3>{getFarewellText(lostLanguage.name)}</h3>
        </div>
      }
    }

  return null
}
