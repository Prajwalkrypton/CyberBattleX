import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  const [isSignup, setIsSignup] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) {
      console.log('Signup Form Data:', formData)
    } else {
      console.log('Login Form Data:', { email: formData.email, password: formData.password })
    }
  }

  return (
    <div className="signup-page">
      <motion.div 
        className="signup-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="signup-title">{isSignup ? 'Create Your Account' : 'Welcome Back'}</h2>
        <p className="signup-subtitle">
          {isSignup ? 'Join the cybersecurity adventure today!' : 'Log in to continue your journey.'}
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          {isSignup && (
            <div className="input-group">
              <label>Username</label>
              <input 
                type="text" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                required 
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <p className="redirect-text">
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <button className="toggle-btn" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Login here' : 'Sign up here'}
          </button>
        </p>
      </motion.div>
    </div>
  )
}

export default Signup
