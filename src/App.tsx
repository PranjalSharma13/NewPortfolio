
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import { PATH } from './routes/path'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import { experienceData } from './data/Experience'
import Contact from './pages/Contact'

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.CONTACT} element={<Contact />} />
          <Route path={PATH.PROJECTS} element={<Projects />} />
          <Route path={PATH.EXPERIENCE} element={<Experience data={experienceData} />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
