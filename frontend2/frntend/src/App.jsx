// import { useState, useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import LoadingScreen from './components/LoadingScreen'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Features from './pages/Features'
// import Workflow from './pages/Workflow'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Signup from './pages/Signup'
// import './App.css'

// function App() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => {
//       setLoading(false)
//     }, 3500)
    
//     return () => clearTimeout(timer)
//   }, [])

//   if (loading) {
//     return <LoadingScreen />
//   }

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/workflow" element={<Workflow />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   )
// }

// export default App
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import Workflow from './pages/Workflow'
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Signup'  
import GameModules from './pages/Gamemodules'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/game-modules" element={<GameModules />} />
      </Routes>
    </>
  )
}

export default App
