import './App.css'
import About from './components/About/About'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Home />
      <About />
      <Projects />
    </div>
  )
}

export default App