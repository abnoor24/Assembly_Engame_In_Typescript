import clsx from "clsx"
import languages from "../Data/Languages"
import type { Language } from "../Data/Languages"
import type { JSX } from "react"

type LanguageDisplay = { gameCounter: number}
export default function LanguageDisplay({gameCounter}: LanguageDisplay): JSX.Element {
  
  const LanguageItems: JSX.Element[] = languages.map((lang: Language, index: number): JSX.Element => {

  const isLost: boolean = index < gameCounter
  const className: string = clsx(isLost && "lost")
    return (
      <li
        className={className}
        id={String(lang.id)}
        key={lang.name}
        font-color={lang.font_color}
        style={{ backgroundColor: lang.color }}
      >
        {lang.name}
      </li>
    )
  })

  return <ul className="language-display">{LanguageItems}</ul>
}
