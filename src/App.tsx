
import './App.css'
import FluidCursor from './components/FluidCursor'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>Welcome to my portfolio</h1>
        <p>This is a simple theme toggle example.</p>
      </main>
      <FluidCursor />
    </>
  )
}

export default App
