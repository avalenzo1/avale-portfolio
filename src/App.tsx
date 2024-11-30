import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Pages
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import ProjectsPage from './pages/Projects/ProjectsPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
