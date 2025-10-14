
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import { PATH } from './routes/path'
import Home from './pages/Home'

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.CONTACT} element={<Home />} />
          <Route path={PATH.PROJECTS} element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
