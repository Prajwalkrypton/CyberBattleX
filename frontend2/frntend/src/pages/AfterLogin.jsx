import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useAuth } from '../context/Authcontext'
import { userService } from '../services/api'
import './AfterLogin.css'

gsap.registerPlugin(ScrollTrigger)

const AfterLogin = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)
  
  const navigate = useNavigate()
  const { currentUser, updateUserData } = useAuth()
  
  // Calculate level progress
  const calculateProgress = () => {
    if (!currentUser) return { levelProgress: 0, challengesCompleted: 0, rankingProgress: 0 }
    
    // Level progress calculation (example: if level is 2, need 200 XP, current XP is 150, progress is 75%)
    const xpForNextLevel = currentUser.level * 100
    const xpFromPreviousLevel = (currentUser.level - 1) * 100
    const xpInCurrentLevel = currentUser.xp - xpFromPreviousLevel
    const levelProgress = Math.min(100, Math.floor((xpInCurrentLevel / (xpForNextLevel - xpFromPreviousLevel)) * 100))
    
    // Mock data for challenges and ranking
    const challengesCompleted = 6
    const totalChallenges = 20
    const challengesProgress = Math.floor((challengesCompleted / totalChallenges) * 100)
    
    const rankingProgress = 25 // Top 75%
    
    return { levelProgress, challengesCompleted, totalChallenges, challengesProgress, rankingProgress }
  }
  
  const { levelProgress, challengesCompleted, totalChallenges, challengesProgress, rankingProgress } = calculateProgress()

  // Handle daily challenge click - simulates XP gain
  const handleDailyChallenge = async () => {
    if (!currentUser) return
    
    try {
      // Simulate completing a challenge that gives 25 XP
      const xpGain = 25
      const response = await userService.updateXP(currentUser.id, xpGain)
      
      // Update user data in context
      updateUserData({
        xp: response.data.new_xp,
        level: response.data.new_level
      })
      
      // Navigate to daily challenge page
      navigate('/daily-challenge')
    } catch (err) {
      console.error('Error updating XP:', err)
    }
  }

  useEffect(() => {
    // Redirect if not logged in
    if (!currentUser && !localStorage.getItem('token')) {
      navigate('/login')
      return
    }
    
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

    const sections = document.querySelectorAll('.home-section')

    sections.forEach((section, index) => {
      if (index === 0) return 

      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [currentUser, navigate])

  // If still loading or no user data, show loading
  if (!currentUser) {
    return (
      <div className="loading-container">
        <div className="cyber-loading"></div>
        <p>Loading your profile...</p>
      </div>
    )
  }

  return (
    <div className="home-page">
      <div className="cyber-bg"></div>
      <div className="cyber-grid"></div>
      <div className="cyber-glow"></div>
      
      <section className="home-section hero-section" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title text-gradient" ref={titleRef}>
              Welcome Back, {currentUser.username}
            </h1>
            <p className="hero-subtitle" ref={subtitleRef}>
              Continue your cybersecurity journey. Your current level: <span className="highlight">Level {currentUser.level}</span>
            </p>
            <div className="hero-buttons" ref={buttonsRef}>
              <button className="btn btn-primary" onClick={() => navigate('/game-modules')}>
                Continue Training
              </button>
              <Link to="/ranking" className="btn btn-secondary">
                View Rankings
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="home-section progress-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">
                Your <span className="text-gradient">Progress</span>
              </h2>
              <p className="section-text">
                You've earned {currentUser.xp} XP points so far. Keep going to reach the next level!
              </p>
              <p className="section-text">
                Complete more challenges to unlock advanced modules and climb the global leaderboard.
              </p>
              <Link to="/game-modules" className="btn btn-primary mt-4">Continue Training</Link>
            </div>
            <div className="col-lg-6">
              <div className="cyber-image-container">
                <div className="cyber-image cyber-border">
                  <div className="progress-dashboard">
                    <div className="progress-item">
                      <div className="progress-label">Level Progress</div>
                      <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: `${levelProgress}%`}}></div>
                      </div>
                      <div className="progress-value">{levelProgress}%</div>
                    </div>
                    <div className="progress-item">
                      <div className="progress-label">Challenges Completed</div>
                      <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: `${challengesProgress}%`}}></div>
                      </div>
                      <div className="progress-value">{challengesCompleted}/{totalChallenges}</div>
                    </div>
                    <div className="progress-item">
                      <div className="progress-label">Ranking</div>
                      <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: `${rankingProgress}%`}}></div>
                      </div>
                      <div className="progress-value">Top {100-rankingProgress}%</div>
                    </div>
                  </div>
                </div>
                <div className="cyber-image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="home-section recommended-section">
        <div className="container">
          <h2 className="section-title text-center">
            Recommended <span className="text-gradient">Challenges</span>
          </h2>
          <p className="section-subtitle text-center">
            Based on your skill level and progress
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3 className="feature-title">Password Cracking</h3>
              <p>
                Learn basic password cracking techniques and understand how to create 
                secure passwords that resist common attacks.
              </p>
              <div className="challenge-difficulty">Beginner</div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🕵️</div>
              <h3 className="feature-title">Network Scanning</h3>
              <p>
                Discover how to identify open ports and services on a network, 
                and learn how to secure your own network against scanning.
              </p>
              <div className="challenge-difficulty">Intermediate</div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Web App Security</h3>
              <p>
                Identify and exploit common web vulnerabilities like XSS and SQL injection,
                then learn how to patch these security holes.
              </p>
              <div className="challenge-difficulty">Advanced</div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/game-modules" className="btn btn-secondary">View All Challenges</Link>
          </div>
        </div>
      </section>
      
      <section className="home-section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready for Today's Challenge?</h2>
            <p className="cta-text">
              A new daily challenge has been unlocked. Complete it to earn bonus points!
            </p>
            <button className="btn btn-primary mt-4" onClick={handleDailyChallenge}>
              Start Daily Challenge
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AfterLogin