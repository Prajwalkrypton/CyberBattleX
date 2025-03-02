// import { useEffect, useRef } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import './Home.css'

// gsap.registerPlugin(ScrollTrigger)

// const Home = () => {
//   const heroRef = useRef(null)
//   const titleRef = useRef(null)
//   const subtitleRef = useRef(null)
//   const buttonsRef = useRef(null)
  
//   const navigate = useNavigate() // Hook fr navgatin

//   useEffect(() => {
//     gsap.fromTo(
//       titleRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
//     )

//     gsap.fromTo(
//       subtitleRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
//     )

//     gsap.fromTo(
//       buttonsRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
//     )

//     const sections = document.querySelectorAll('.home-section')

//     sections.forEach((section, index) => {
//       if (index === 0) return 

//       gsap.fromTo(
//         section,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           scrollTrigger: {
//             trigger: section,
//             start: 'top 80%',
//             end: 'top 50%',
//             scrub: 1,
//           }
//         }
//       )
//     })

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   return (
//     <div className="home-page">
//       <div className="cyber-bg"></div>
//       <div className="cyber-grid"></div>
//       <div className="cyber-glow"></div>
      
//       <section className="home-section hero-section" ref={heroRef}>
//         <div className="container">
//           <div className="hero-content">
//             <h1 className="hero-title text-gradient" ref={titleRef}>
//               CyberBattleX
//             </h1>
//             <p className="hero-subtitle" ref={subtitleRef}>
//               Turn cybersecurity education into an immersive, gamified experience.
//               Master real-world skills in a dynamic, competitive environment.
//             </p>
//             <div className="hero-buttons" ref={buttonsRef}>
//               <button className="btn btn-primary" onClick={() => navigate('/signup')}>
//                 Get Started
//               </button>
//               <Link to="/features" className="btn btn-secondary">
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <section className="home-section intro-section">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <h2 className="section-title">
//                 The Digital <span className="text-gradient">Battlefield</span>
//               </h2>
//               <p className="section-text">
//                 In today's digital battlefield, cybersecurity isn't just a skill—it's a necessity. 
//                 Traditional training methods are outdated, passive, and ineffective.
//               </p>
//               <p className="section-text">
//                 CyberBattleX changes that by turning cybersecurity education into an immersive, 
//                 gamified experience where you don't just study cybersecurity—you live it.
//               </p>
//               <Link to="/features" className="btn btn-primary mt-4">Explore Features</Link>
//             </div>
//             <div className="col-lg-6">
//               <div className="cyber-image-container">
//                 <div className="cyber-image cyber-border">
//                   <div className="placeholder-image"></div>
//                 </div>
//                 <div className="cyber-image-glow"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <section className="home-section features-preview-section">
//         <div className="container">
//           <h2 className="section-title text-center">
//             What <span className="text-gradient">CyberBattleX</span> Offers
//           </h2>
//           <p className="section-subtitle text-center">
//             Comprehensive cybersecurity training through gamified experiences
//           </p>
          
//           <div className="features-grid">
//             <div className="feature-card">
//               <div className="feature-icon">🎮</div>
//               <h3 className="feature-title">Gamified Learning</h3>
//               <p>
//                 Start with AI-driven cyber quests that introduce core cybersecurity concepts 
//                 through hands-on challenges.
//               </p>
//             </div>
            
//             <div className="feature-card">
//               <div className="feature-icon">⚔️</div>
//               <h3 className="feature-title">Attack-Defense Battles</h3>
//               <p>
//                 Choose your role: Red Team (Attacker) to exploit vulnerabilities or 
//                 Blue Team (Defender) to secure systems against threats.
//               </p>
//             </div>
            
//             <div className="feature-card">
//               <div className="feature-icon">🚩</div>
//               <h3 className="feature-title">CTF Challenges</h3>
//               <p>
//                 Crack codes, exploit security flaws, and complete missions designed 
//                 to simulate real-world cyberattacks.
//               </p>
//             </div>
//           </div>
          
//           <div className="text-center mt-5">
//             <Link to="/features" className="btn btn-secondary">View All Features</Link>
//           </div>
//         </div>
//       </section>
      
//       <section className="home-section cta-section">
//         <div className="container">
//           <div className="cta-content text-center">
//             <h2 className="cta-title">Ready to Join the Battle?</h2>
//             <p className="cta-text">
//               Start your journey to becoming a cyber warrior today. 
//               Let's play, hack, and defend!
//             </p>
//             <button className="btn btn-primary mt-4" onClick={() => navigate('/signup')}>
//               Get Started Now
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)
  
  const navigate = useNavigate() // Hook for navigation

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    )

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    )

    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="home-page">
      <div className="cyber-bg"></div>
      <div className="cyber-grid"></div>
      <div className="cyber-glow"></div>
      
      <section className="home-section hero-section" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title text-gradient" ref={titleRef}>
              CyberBattleX
            </h1>
            <p className="hero-subtitle" ref={subtitleRef}>
              Turn cybersecurity education into an immersive, gamified experience.
              Master real-world skills in a dynamic, competitive environment.
            </p>
            <div className="hero-buttons" ref={buttonsRef}>
              <button className="btn btn-primary" onClick={() => navigate('/signup')}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="home-section intro-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">
                The Digital <span className="text-gradient">Battlefield</span>
              </h2>
              <p className="section-text">
                In today's digital battlefield, cybersecurity isn't just a skill—it's a necessity. 
                Traditional training methods are outdated, passive, and ineffective.
              </p>
              <p className="section-text">
                CyberBattleX changes that by turning cybersecurity education into an immersive, 
                gamified experience where you don't just study cybersecurity—you live it.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="cyber-image-container">
                <div className="cyber-image cyber-border">
                  <div className="placeholder-image"></div>
                </div>
                <div className="cyber-image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="home-section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Join the Battle?</h2>
            <p className="cta-text">
              Start your journey to becoming a cyber warrior today. 
              Let's play, hack, and defend!
            </p>
            <button className="btn btn-primary mt-4" onClick={() => navigate('/signup')}>
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
