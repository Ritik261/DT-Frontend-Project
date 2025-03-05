import Navbar from './components/Navbar'
import Bbody from './components/Body'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Project from './components/Project'

function App() {

  return (
    <>
      <Router>
        <div className=' min-h-screen'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Bbody />} />
            <Route path='/project' element={<Project />} />
            
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App