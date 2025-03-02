import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './GameModules.css'

const GameModules = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    <div className="game-modules-page">
      <div className="cyber-bg"></div>
      <div className="cyber-grid"></div>
      <div className="cyber-glow"></div>

      <section className="modules-header">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">
              <span className="text-gradient">Game Modules</span>
            </h1>
            <p className="page-subtitle">
              Explore interactive cybersecurity games and challenges.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="modules-main">
        <div className="container">
          <motion.div
            className="modules-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="module-card" variants={itemVariants}>
              <div className="module-icon">🕵️</div>
              <h3 className="module-title">Stealth Hacking</h3>
              <p className="module-description">
                Simulate real-world hacking scenarios and test your penetration skills.
              </p>
            </motion.div>

            <motion.div className="module-card" variants={itemVariants}>
              <div className="module-icon">🛡️</div>
              <h3 className="module-title">Defensive Strategies</h3>
              <p className="module-description">
                Learn how to protect systems from cyber threats in a defensive setting.
              </p>
            </motion.div>

            <motion.div className="module-card" variants={itemVariants}>
              <div className="module-icon">🔑</div>
              <h3 className="module-title">Cryptography Puzzles</h3>
              <p className="module-description">
                Solve encryption and decryption challenges using advanced cryptography techniques.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GameModules
