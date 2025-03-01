import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './Features.css'

const Features = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
  
  return (
    <div className="features-page">
      {/* Background elements */}
      <div className="cyber-bg"></div>
      <div className="cyber-grid"></div>
      <div className="cyber-glow"></div>
      
      {/* Header Section */}
      <section className="features-header">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">
              <span className="text-gradient">Features</span>
            </h1>
            <p className="page-subtitle">
              Discover the comprehensive tools and experiences that make CyberBattleX 
              the ultimate cybersecurity training platform.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Features Section */}
      <section className="features-main">
        <div className="container">
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🎮</div>
              <h3 className="feature-title">Gamified Learning Modules</h3>
              <p className="feature-description">
                Start with AI-driven cyber quests that introduce core cybersecurity concepts 
                through hands-on challenges. Learn at your own pace with interactive tutorials 
                and practical exercises.
              </p>
              <ul className="feature-list">
                <li>Interactive cybersecurity tutorials</li>
                <li>Hands-on practical exercises</li>
                <li>Adaptive difficulty based on skill level</li>
                <li>Real-world scenario simulations</li>
              </ul>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">⚔️</div>
              <h3 className="feature-title">Live Attack-Defense Battles</h3>
              <p className="feature-description">
                Choose your role: Red Team (Attacker) to exploit vulnerabilities or 
                Blue Team (Defender) to secure systems against threats. Experience the 
                thrill of real-time cybersecurity warfare.
              </p>
              <ul className="feature-list">
                <li>Red Team offensive operations</li>
                <li>Blue Team defensive strategies</li>
                <li>Real-time battle environments</li>
                <li>Team-based competitions</li>
              </ul>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🚩</div>
              <h3 className="feature-title">Realistic CTF Challenges</h3>
              <p className="feature-description">
                Crack codes, exploit security flaws, and complete missions designed 
                to simulate real-world cyberattacks. Put your skills to the test in 
                our Capture The Flag competitions.
              </p>
              <ul className="feature-list">
                <li>Web exploitation challenges</li>
                <li>Cryptography puzzles</li>
                <li>Reverse engineering tasks</li>
                <li>Forensic investigations</li>
              </ul>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI-Driven Adversaries & Peer Battles</h3>
              <p className="feature-description">
                Face evolving AI opponents or compete against real players in a dynamic, 
                constantly changing threat environment. Experience cyber escape rooms 
                that test your problem-solving abilities.
              </p>
              <ul className="feature-list">
                <li>Adaptive AI opponents</li>
                <li>PvP cybersecurity challenges</li>
                <li>Cyber escape rooms</li>
                <li>Dynamic threat environments</li>
              </ul>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Progression & Skill Mastery</h3>
              <p className="feature-description">
                Earn XP, unlock achievements, and climb leaderboards, making learning 
                competitive and engaging. Track your progress and showcase your 
                cybersecurity expertise.
              </p>
              <ul className="feature-list">
                <li>Skill-based progression system</li>
                <li>Achievement unlocks</li>
                <li>Global and regional leaderboards</li>
                <li>Skill certification paths</li>
              </ul>
            </motion.div>
            
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Cyber Hygiene & Public Awareness</h3>
              <p className="feature-description">
                Learn essential cyber hygiene practices, namely password security, 
                phishing awareness, and social engineering awareness, to stay protected 
                in the digital world.
              </p>
              <ul className="feature-list">
                <li>Password security training</li>
                <li>Phishing detection exercises</li>
                <li>Social engineering awareness</li>
                <li>Personal data protection</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="features-cta">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2>Ready to Experience CyberBattleX?</h2>
            <p>
              Join thousands of cybersecurity enthusiasts and professionals 
              who are sharpening their skills through our immersive platform.
            </p>
            <button className="btn btn-primary">Get Started Now</button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Features