import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Projects from './pages/projects'
import Blog from './pages/blog'
import TIL from './pages/til'
import NotFound from './pages/404'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/til" element={<TIL />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
