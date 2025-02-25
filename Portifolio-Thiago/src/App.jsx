
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Technology from './pages/Technology'
import About from './pages/About'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  )
}

export default App
