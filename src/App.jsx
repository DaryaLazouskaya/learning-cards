import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

function HomePage() {
  return (
    <section className="page">
      <h1>Home</h1>
      <p>This is a simple React app using the latest Vite and React Router setup.</p>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="page">
      <h1>About</h1>
      <p>React Router is configured with two pages and active link styling.</p>
    </section>
  )
}

function NotFoundPage() {
  return (
    <section className="page">
      <h1>404</h1>
      <p>Page not found.</p>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <h2>Learning Cards</h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
