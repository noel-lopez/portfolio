export interface ProjectType {
  name: string
  description: string
  image: string
  codeUrl?: string
  demoUrl?: string
  tools: string[]
}

export const projectsList: ProjectType[] = [
  {
    name: 'Wordle game',
    description: 'Unravel word puzzles in 6 tries!\nTest your vocab skills and conquer the challenge. Addictive and fun!',
    image: 'wordle.webp',
    codeUrl: 'https://github.com/noel-lopez/react-wordle',
    demoUrl: 'https://noel-wordle.vercel.app',
    tools: ['JSX', 'React', 'CSS', 'Vercel']
  }
]
