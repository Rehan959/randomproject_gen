export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

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
]

const byDifficulty: Record<Difficulty, IdeaGenerator[]> = {
  Beginner: beginnerGenerators,
  Intermediate: intermediateGenerators,
  Advanced: advancedGenerators,
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

  // Ensure at least one pass through all templates, then random if more needed
  const sequence: IdeaGenerator[] = [...pool]
  while (sequence.length < count) {
    sequence.push(pool[getRandomInt(pool.length)])
  }

  for (let i = 0; i < count; i++) {
    const generator = sequence[i % sequence.length]
    const idea = generator(language)
    if (usedTitles.has(idea.title)) {
      // Slightly perturb duplicate titles
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


