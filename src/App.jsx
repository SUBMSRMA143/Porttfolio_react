import './App.css'
import About from './components/About/About'
import Footer from './components/footer/Footer'
import GetInTouch from './components/getInTouch/GetInTouch'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <GetInTouch />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App