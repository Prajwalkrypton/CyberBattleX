import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './Workflow.css'

const Workflow = () => {
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
        staggerChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
  
  return (
    <div className="workflow-page">
      {/* Background elements */}
      <div className="cyber-bg"></div>
      <div className="cyber-grid"></div>
      <div className="cyber-glow"></div>
      
      {/* Header Section */}
      <section className="workflow-header">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">
              <span className="text-gradient">Workflow</span>
            </h1>
            <p className="page-subtitle">
              Understand the journey from enrollment to mastery on the CyberBattleX platform.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Workflow Steps Section */}
      <section className="workflow-steps-section">
        <div className="container">
          <motion.div
            className="workflow-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="workflow-step" variants={itemVariants}>
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Player Enrollment & Role Selection</h3>
                <p className="step-description">
                  Players register, choose between Red Team (Attacker) or Blue Team (Defender), 
                  and enter the cyber battlefield. Your journey begins with selecting your 
                  preferred cybersecurity path.
                </p>
                <div className="step-details">
                  <div className="step-detail-item">
                    <h4>Red Team</h4>
                    <p>Focus on offensive security, penetration testing, and vulnerability exploitation</p>
                  </div>
                  <div className="step-detail-item">
                    <h4>Blue Team</h4>
                    <p>Specialize in defensive security, threat detection, and incident response</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="workflow-step" variants={itemVariants}>
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Mission-Based Challenges</h3>
                <p className="step-description">
                  Gamified learning modules and CTF challenges introduce core cybersecurity concepts 
                  through real-world scenarios. Complete missions to build fundamental skills and 
                  knowledge.
                </p>
                <div className="step-details">
                  <ul className="step-list">
                    <li>Complete introductory tutorials and skill assessments</li>
                    <li>Tackle progressively challenging missions</li>
                    <li>Learn through practical, hands-on exercises</li>
                    <li>Earn badges and certifications for completed challenges</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="workflow-step" variants={itemVariants}>
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Live Attack & Defense Battles</h3>
                <p className="step-description">
                  Players execute offensive or defensive strategies in simulated cyber warfare, 
                  facing AI-driven or real opponents. Put your skills to the test in dynamic, 
                  real-time environments.
                </p>
                <div className="step-details">
                  <ul className="step-list">
                    <li>Participate in scheduled battle events</li>
                    <li>Join team-based competitions</li>
                    <li>Face adaptive AI adversaries</li>
                    <li>Engage in PvP cybersecurity challenges</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="workflow-step" variants={itemVariants}>
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Skill Progression & Leaderboards</h3>
                <p className="step-description">
                  Earn XP, unlock achievements, and track progress through rankings and competitive 
                  challenges. Watch your skills grow and compare your performance with other players.
                </p>
                <div className="step-details">
                  <div className="progression-chart">
                    <div className="progression-level">
                      <span className="level-badge">Novice</span>
                      <div className="level-bar"></div>
                    </div>
                    <div className="progression-level">
                      <span className="level-badge">Apprentice</span>
                      <div className="level-bar"></div>
                    </div>
                    <div className="progression-level">
                      <span className="level-badge">Specialist</span>
                      <div className="level-bar"></div>
                    </div>
                    <div className="progression-level">
                      <span className="level-badge">Expert</span>
                      <div className="level-bar"></div>
                    </div>
                    <div className="progression-level">
                      <span className="level-badge">Master</span>
                      <div className="level-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="workflow-step" variants={itemVariants}>
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Cyber Hygiene & Awareness Training</h3>
                <p className="step-description">
                  Players gain practical skills to prevent cyber threats, enhancing both gameplay 
                  and real-world cybersecurity awareness. Learn essential practices to stay 
                  protected in the digital world.
                </p>
                <div className="step-details">
                  <div className="awareness-modules">
                    <div className="awareness-module">
                      <h4>Password Security</h4>
                      <p>Learn to create and manage strong, unique passwords</p>
                    </div>
                    <div className="awareness-module">
                      <h4>Phishing Awareness</h4>
                      <p>Identify and avoid sophisticated phishing attempts</p>
                    </div>
                    <div className="awareness-module">
                      <h4>Social Engineering</h4>
                      <p>Recognize and counter social engineering tactics</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="workflow-cta">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2>Begin Your Cybersecurity Journey</h2>
            <p>
              Start with step one and progress through our comprehensive cybersecurity 
              training workflow. Become the cyber warrior you were meant to be.
            </p>
            <button className="btn btn-primary">Enroll Now</button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Workflow