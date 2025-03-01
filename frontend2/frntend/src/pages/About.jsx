import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="about-page">
      {/* Background elements */}
      <div className="cyber-bg"></div>
      <div className="cyber-grid"></div>
      <div className="cyber-glow"></div>
      
      {/* Header Section */}
      <section className="about-header">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">
              <span className="text-gradient">About</span> CyberBattleX
            </h1>
            <p className="page-subtitle">
              Learn why we created CyberBattleX and how it's transforming cybersecurity education.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Our Mission</h2>
              <p className="section-text">
                In today's digital battlefield, cybersecurity isn't just a skill—it's a necessity. 
                But traditional training methods are outdated, passive, and ineffective.
              </p>
              <p className="section-text">
                CyberBattleX was created to transform cybersecurity education into an immersive, 
                gamified experience. We believe that the best way to learn is by doing, and the 
                best way to retain knowledge is through engagement and competition.
              </p>
              <p className="section-text">
                Our mission is to forge the next generation of cyber warriors through hands-on, 
                practical training that simulates real-world scenarios and challenges.
              </p>
            </motion.div>
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mission-image cyber-border">
                <div className="placeholder-image"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why It Matters Section */}
      <section className="about-why">
        <div className="container">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why It <span className="text-gradient">Matters</span>
          </motion.h2>
          
          <div className="why-grid">
            <motion.div 
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="why-icon">🔄</div>
              <h3>Evolving Threats</h3>
              <p>
                Traditional training can't keep up with rapidly evolving cyber threats. 
                Our platform adapts and evolves, ensuring you're prepared for the latest 
                attack vectors and vulnerabilities.
              </p>
            </motion.div>
            
            <motion.div 
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="why-icon">🎯</div>
              <h3>Practical Skills</h3>
              <p>
                Theory alone isn't enough. CyberBattleX provides hands-on experience 
                in realistic environments, building practical skills that can be 
                immediately applied in real-world situations.
              </p>
            </motion.div>
            
            <motion.div 
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="why-icon">🧠</div>
              <h3>Engagement & Retention</h3>
              <p>
                Gamification and competition drive engagement, leading to better 
                knowledge retention and skill development. Learning becomes an 
                exciting journey rather than a tedious task.
              </p>
            </motion.div>
            
            <motion.div 
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="why-icon">🌐</div>
              <h3>Global Community</h3>
              <p>
                Join a community of cybersecurity enthusiasts and professionals from 
                around the world. Learn from peers, share knowledge, and grow together 
                in a collaborative environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="about-quote">
        <div className="container">
          <motion.div 
            className="quote-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <blockquote>
              "This isn't just a game. It's a warzone where the next generation of cyber warriors is forged. 
              Let's play, hack, and defend!"
            </blockquote>
            <cite>- CyberBattleX Team</cite>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2>Join the Cyber Battlefield</h2>
            <p>
              Whether you're a beginner or a pro, CyberBattleX will sharpen your skills 
              for real-world cyber defense. Start your journey today.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About