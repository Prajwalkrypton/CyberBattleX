// import { useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { useNavigate } from 'react-router-dom'
// import './Features.css'

// const Features = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   const navigate = useNavigate()

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   }

//   return (
//     <div className="features-page">
//       <div className="cyber-bg"></div>
//       <div className="cyber-grid"></div>
//       <div className="cyber-glow"></div>

//       <section className="features-header">
//         <div className="container">
//           <motion.div 
//             className="text-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="page-title">
//               <span className="text-gradient">Features</span>
//             </h1>
//             <p className="page-subtitle">
//               Discover the comprehensive tools and experiences that make CyberBattleX 
//               the ultimate cybersecurity training platform.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="features-main">
//         <div className="container">
//           <motion.div
//             className="features-grid"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div className="feature-card" variants={itemVariants} onClick={() => navigate('/game-modules')}>
//               <div className="feature-icon">🎮</div>
//               <h3 className="feature-title">Gamified Learning Modules</h3>
//               <p className="feature-description">
//                 Start with AI-driven cyber quests that introduce core cybersecurity concepts 
//                 through hands-on challenges.
//               </p>
//             </motion.div>
            
//             <motion.div className="feature-card" variants={itemVariants}>
//               <div className="feature-icon">⚔️</div>
//               <h3 className="feature-title">Live Attack-Defense Battles</h3>
//               <p className="feature-description">
//                 Choose your role: Red Team (Attacker) to exploit vulnerabilities or 
//                 Blue Team (Defender) to secure systems against threats.
//               </p>
//             </motion.div>

//             <motion.div className="feature-card" variants={itemVariants}>
//               <div className="feature-icon">🚩</div>
//               <h3 className="feature-title">CTF Challenges</h3>
//               <p className="feature-description">
//                 Crack codes, exploit security flaws, and complete missions designed 
//                 to simulate real-world cyberattacks.
//               </p>
//             </motion.div>

//             <motion.div className="feature-card" variants={itemVariants}>
//               <div className="feature-icon">🤖</div>
//               <h3 className="feature-title">AI-Driven Adversaries</h3>
//               <p className="feature-description">
//                 Face evolving AI opponents or compete against real players in a dynamic, 
//                 constantly changing threat environment.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="features-cta">
//         <div className="container">
//           <motion.div 
//             className="cta-box"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             <h2>Ready to Experience CyberBattleX?</h2>
//             <p>
//               Join thousands of cybersecurity enthusiasts and professionals 
//               who are sharpening their skills through our immersive platform.
//             </p>
//             <button className="btn btn-primary" onClick={() => navigate('/signup')}>
//               Get Started Now
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Features
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Features.css'

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()

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
      <div className="cyber-bg"></div>
      <div className="cyber-grid"></div>
      <div className="cyber-glow"></div>

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

      <section className="features-main">
        <div className="container">
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="feature-card" variants={itemVariants}>
              <a href="/games/templates/index.html" className="feature-link">
                <div className="feature-icon">⚔️</div>
                <h3 className="feature-title">Live Attack-Defense Battles</h3>
                <p className="feature-description">
                  Choose your role: Red Team (Attacker) to exploit vulnerabilities or 
                  Blue Team (Defender) to secure systems against threats.
                </p>
              </a>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🚩</div>
              <h3 className="feature-title">CTF Challenges</h3>
              <p className="feature-description">
                Crack codes, exploit security flaws, and complete missions designed 
                to simulate real-world cyberattacks.
              </p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI-Driven Adversaries</h3>
              <p className="feature-description">
                Face evolving AI opponents or compete against real players in a dynamic, 
                constantly changing threat environment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
            <button className="btn btn-primary" onClick={() => navigate('/signup')}>
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Features
