import { useEffect, useMemo, useState, useRef } from 'react'
import './App.css'
import { generateIdeas, languages, type Difficulty, type Idea } from './ideaEngine'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('JavaScript')
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'Mixed'>('Intermediate')
  const [currentIdea, setCurrentIdea] = useState<Idea | null>(null)

  const canGenerate = useMemo(
    () => !!selectedLanguage && !!selectedDifficulty,
    [selectedLanguage, selectedDifficulty],
  )

  const intervalRef = useRef<number | null>(null)  // store interval ID

  function handleGenerate() {
    if (!canGenerate) return

    if (selectedDifficulty === 'Mixed') {
      const difficulties: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced', 'Creative']
      const randomDiff = difficulties[Math.floor(Math.random() * difficulties.length)]
      const [idea] = generateIdeas(selectedLanguage, randomDiff, 1)
      setCurrentIdea(idea)
    } else {
      const [idea] = generateIdeas(selectedLanguage, selectedDifficulty as Difficulty, 1)
      setCurrentIdea(idea)
    }
  }

  function handleCopy(idea: Idea) {
    const text = `${idea.title}\n\n${idea.description}\n\nTags: ${idea.tags.join(', ')}`
    navigator.clipboard.writeText(text)
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isTypingElement =
        e.target instanceof HTMLElement &&
        (e.target.tagName === 'INPUT' ||
          e.target.tagName === 'SELECT' ||
          e.target.tagName === 'TEXTAREA' ||
          e.target.getAttribute('contenteditable') === 'true')

      if (isTypingElement) return

      if ((e.code === 'Space' || e.key === ' ') && intervalRef.current === null) {
        e.preventDefault()
        handleGenerate()
        // Start generating continuously every 500ms while Space is held down
        intervalRef.current = window.setInterval(() => {
          handleGenerate()
        }, 500)
      }
    }

    function onKeyUp(e: KeyboardEvent) {
      if (e.code === 'Space' || e.key === ' ') {
        // Stop continuous generation when Space is released
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [selectedLanguage, selectedDifficulty, canGenerate])

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Project Idea Generator</h1>
          <p className="hero-subtitle">Pick your language and level, then press Space to get a tailored idea.</p>

          <div className="controls hero-controls">
            <div className="control-group">
              <label htmlFor="language">Language</label>
              <select
                id="language"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            <div className="control-group">
              <label htmlFor="difficulty">Difficulty</label>
              <select
                id="difficulty"
                value={selectedDifficulty}
                onChange={(e) =>
                  setSelectedDifficulty(e.target.value as Difficulty | 'Mixed')
                }
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Creative">Creative</option>
                <option value="Mixed">Mixed</option>
              </select>
            </div>
          </div>

          <section
            className="generator hero-generator"
            onClick={handleGenerate}
            role="button"
            aria-label="Random generator"
            tabIndex={0}
          >
            {!currentIdea && (
              <div className="generator-inner">
                <div className="hint">Press Space to generate</div>
              </div>
            )}
            {currentIdea && (
              <div className="generator-inner">
                <h2 className="generator-title">{currentIdea.title}</h2>
                <p className="generator-desc">{currentIdea.description}</p>
                <div className="tags">
                  {currentIdea.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="generator-actions">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCopy(currentIdea)
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}
          </section>

          <div className="hint-key">Tip: press Spacebar or click the area above</div>
        </div>
      </section>
    </div>
  )
}

export default App
