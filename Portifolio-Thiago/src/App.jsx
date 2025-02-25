
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><h1>Home</h1></>}></Route>
        <Route path="/projects" element={<><h1>Projetos</h1><Link to="/"></Link></>}></Route>
        <Route path="/technology" element={<><h1>Tecnologias</h1></>}></Route>
        <Route path="/about" element={<><h1>Sobre mim</h1></>}></Route>
      </Routes>
    </Router>
  )
}

export default App
