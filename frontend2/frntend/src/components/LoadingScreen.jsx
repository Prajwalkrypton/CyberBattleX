import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const containerRef = useRef(null)
  const letterRefs = useRef([])
  
  useEffect(() => {
    const container = containerRef.current
    const letters = letterRefs.current
    
    gsap.set(letters, { 
      opacity: 0,
      y: 50,
      scale: 0.5
    })
    
    
    const tl = gsap.timeline()
    
   
    tl.to(container, {
      duration: 1,
      background: 'radial-gradient(circle at center, rgba(78, 84, 255, 0.3) 0%, rgba(10, 10, 31, 1) 70%)',
      ease: 'power2.inOut'
    })
    
    
    tl.to(letters, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    }, 0.5)
    
   
    tl.to(letters, {
      duration: 0.5,
      textShadow: '0 0 20px rgba(78, 84, 255, 1)',
      repeat: 1,
      yoyo: true,
      ease: 'power2.inOut'
    }, 2)
    
    return () => {
      tl.kill()
    }
  }, [])
  
  const titleLetters = "CYBERBATTLEX".split("")
  
  return (
    <div className="loading-screen" ref={containerRef}>
      <div className="loading-content">
        <div className="loading-title">
          {titleLetters.map((letter, index) => (
            <span 
              key={index} 
              className="loading-letter"
              ref={el => letterRefs.current[index] = el}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="loading-spinner"></div>
      </div>
    </div>
  )
}

export default LoadingScreen