export type Language = {
  id: number,
  name: string,
  color: string,
  font_color: string
}

const languages: Language[] =  [
  { id: 1, name: "HTML", color: "#E2680F", font_color: "light" },
  { id: 2, name: "CSS", color: "#328AF1", font_color: "light" },
  { id: 3, name: "Javascript", color: "#F4EB13", font_color: "dark" },
  { id: 4, name: "React", color: "#2ED3E9", font_color: "dark" },
  { id: 5, name: "TypeScript", color: "#298EC6", font_color: "light" },
  { id: 6, name: "Node.js", color: "#599137", font_color: "light" },
  { id: 7, name: "Python", color: "#FFD742", font_color: "dark" },
  { id: 8, name: "Ruby", color: "#D02B2B", font_color: "light" },
  { id: 9, name: "Assembly", color: "#2D519F", font_color: "light" },
]

export default languages