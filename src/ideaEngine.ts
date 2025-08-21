export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Creative'

export type Idea = {
  title: string
  description: string
  tags: string[]
}

type IdeaGenerator = (language: string) => Idea

const beginnerGenerators: IdeaGenerator[] = [
  (language) => ({
    title: `${language} To-Do List App`,
    description:
      `Build a simple to-do list with add, complete, and delete features in ${language}. Persist using localStorage.`,
    tags: ['CRUD', 'localStorage', 'state'],
  }),
  (language) => ({
    title: `${language} Number Guessing Game`,
    description:
      `Create a number guessing game with difficulty levels, attempt counter, and hints using ${language}.`,
    tags: ['game', 'logic', 'UI'],
  }),
  (language) => ({
    title: `${language} Currency Converter`,
    description:
      `Fetch exchange rates and convert between currencies. Cache latest rates. Implement basic input validation in ${language}.`,
    tags: ['API', 'fetch', 'validation'],
  }),
  (language) => ({
    title: `${language} Notes App`,
    description:
      `Create a notes app with markdown support and search. Save notes to localStorage in ${language}.`,
    tags: ['markdown', 'search', 'localStorage'],
  }),
  (language) => ({
    title: `${language} Stopwatch & Timer`,
    description: `Build a digital stopwatch and timer app with start, pause, reset, and lap features in ${language}.`,
    tags: ['time', 'UI', 'state'],
  }),
  (language) => ({
    title: `${language} Weather App`,
    description: `Fetch current weather from a public API and display temperature, humidity, and conditions in ${language}.`,
    tags: ['API', 'fetch', 'UI'],
  }),
  (language) => ({
    title: `${language} Quiz Game`,
    description: `Develop a quiz game with multiple-choice questions, score tracking, and randomization in ${language}.`,
    tags: ['game', 'random', 'logic'],
  }),
]

const intermediateGenerators: IdeaGenerator[] = [
  (language) => ({
    title: `${language} Kanban Board`,
    description:
      `Implement a Trello-like board with draggable cards, columns, and persistence (indexedDB or a simple backend).`,
    tags: ['drag-and-drop', 'state-management', 'persistence'],
  }),
  (language) => ({
    title: `${language} Movie Explorer`,
    description:
      `Build a movie search UI using a public API (OMDb/TMDB). Include pagination, filters, and favorites persisted locally.`,
    tags: ['API', 'pagination', 'filters'],
  }),
  (language) => ({
    title: `${language} Pomodoro Timer`,
    description:
      `Create a Pomodoro timer with customizable sessions, notifications, and analytics (streaks, time spent).`,
    tags: ['timers', 'notifications', 'charts'],
  }),
  (language) => ({
    title: `${language} Chat UI (Mock Backend)`,
    description:
      `Design a chat interface with message threads, typing indicators, and optimistic updates using a mocked service.`,
    tags: ['optimistic-ui', 'websockets-mock', 'design'],
  }),
  (language) => ({
    title: `${language} Blogging Platform`,
    description: `Create a small blogging app where users can create, update, delete posts and add comments. Store in local DB or mock API.`,
    tags: ['CRUD', 'auth', 'editor'],
  }),
  (language) => ({
    title: `${language} Expense Tracker`,
    description: `Build an app to log expenses, categorize them, and visualize using charts in ${language}.`,
    tags: ['charts', 'state', 'CRUD'],
  }),
  (language) => ({
    title: `${language} Multiplayer Tic-Tac-Toe`,
    description: `Implement a 2-player tic-tac-toe game with socket-based real-time play and win/draw detection.`,
    tags: ['game', 'websocket', 'logic'],
  }),
]

const advancedGenerators: IdeaGenerator[] = [
  (language) => ({
    title: `${language} Real-time Collaboration Editor`,
    description:
      `Implement a collaborative text editor using CRDT or OT concepts. Add presence, cursors, and conflict resolution.`,
    tags: ['CRDT', 'real-time', 'websocket'],
  }),
  (language) => ({
    title: `${language} E-commerce Storefront`,
    description:
      `Build a storefront with products, cart, checkout flow (mock payments), and server-side pagination/search.`,
    tags: ['ecommerce', 'state', 'routing'],
  }),
  (language) => ({
    title: `${language} Dashboard with Analytics`,
    description:
      `Create a dashboard pulling from multiple APIs, with caching, skeleton loading, and error retries/backoff.`,
    tags: ['caching', 'charts', 'resilience'],
  }),
  (language) => ({
    title: `${language} Full-stack Issue Tracker`,
    description:
      `Design an issue tracker with authentication, roles, comments, and attachments. Provide REST or GraphQL API.`,
    tags: ['auth', 'full-stack', 'graphql/rest'],
  }),
  (language) => ({
    title: `${language} AI Chatbot Assistant`,
    description: `Develop a chatbot interface backed by an AI model API (or rule-based fallback). Include conversation history and context persistence.`,
    tags: ['AI', 'NLP', 'API'],
  }),
  (language) => ({
    title: `${language} Online Learning Platform`,
    description: `Build an LMS with courses, progress tracking, quiz support, and video embedding. Include user authentication.`,
    tags: ['auth', 'video', 'full-stack'],
  }),
  (language) => ({
    title: `${language} Social Media Feed`,
    description: `Create a social media clone with posts, likes, comments, and real-time updates (e.g., notifications, new post feed).`,
    tags: ['real-time', 'auth', 'infinite-scroll'],
  }),
]

const creativeGenerators: IdeaGenerator[] = [
  (language) => ({
    title: `${language} Generative Art Canvas`,
    description:
      `Use ${language} to create generative art patterns (fractals, particle systems, procedural landscapes). Export art as images.`,
    tags: ['graphics', 'creative-coding', 'math'],
  }),
  (language) => ({
    title: `${language} Music Visualizer`,
    description:
      `Build an app that listens to audio input and generates real-time visualizations in ${language}.`,
    tags: ['audio', 'visualization', 'creative-coding'],
  }),
  (language) => ({
    title: `${language} Meme Generator`,
    description:
      `Create a meme-making tool where users can upload images, add text overlays, and export. Bonus: random meme API integration.`,
    tags: ['canvas', 'image-editing', 'fun'],
  }),
  (language) => ({
    title: `${language} IoT Simulator`,
    description:
      `Mock an IoT setup in ${language} with simulated sensors (temperature, humidity) and a dashboard showing live data.`,
    tags: ['IoT', 'simulation', 'real-time'],
  }),
  (language) => ({
    title: `${language} Virtual Pet Game`,
    description:
      `Build a Tamagotchi-style virtual pet that requires feeding, playing, and evolves over time.`,
    tags: ['game', 'state', 'time-based'],
  }),
  (language) => ({
    title: `${language} Code Poetry Generator`,
    description:
      `Write a program in ${language} that generates random poetic verses using word banks and simple grammar rules.`,
    tags: ['NLP', 'random', 'creative'],
  }),
]

const byDifficulty: Record<Difficulty, IdeaGenerator[]> = {
  Beginner: beginnerGenerators,
  Intermediate: intermediateGenerators,
  Advanced: advancedGenerators,
  Creative: creativeGenerators,
}

function getRandomInt(maxExclusive: number): number {
  return Math.floor(Math.random() * maxExclusive)
}

export function generateIdeas(
  language: string,
  difficulty: Difficulty,
  count: number = 9,
): Idea[] {
  const pool = byDifficulty[difficulty]
  const results: Idea[] = []
  const usedTitles = new Set<string>()

  const sequence: IdeaGenerator[] = [...pool]
  while (sequence.length < count) {
    sequence.push(pool[getRandomInt(pool.length)])
  }

  for (let i = 0; i < count; i++) {
    const generator = sequence[i % sequence.length]
    const idea = generator(language)
    if (usedTitles.has(idea.title)) {
      idea.title = `${idea.title} (${i + 1})`
    }
    usedTitles.add(idea.title)
    results.push(idea)
  }
  return results
}

export const languages: string[] = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'C++',
  'Go',
  'Rust',
  'Swift',
  'Kotlin',
  'PHP',
  'Ruby',
]
