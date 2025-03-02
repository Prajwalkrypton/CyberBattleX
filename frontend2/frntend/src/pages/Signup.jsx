import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
// const navigate = useNavigate();  // Add this inside the Signup function


const Signup = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const url = isSignup ? 'http://localhost:5000/signup' : 'http://localhost:5000/login'
    const payload = isSignup ? formData : { email: formData.email, password: formData.password }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: "include",
      })

      const data = await response.json()
      setMessage(data.message)

      if (response.ok && !isSignup) {
        localStorage.setItem('token', data.token)  // Store JWT token
        navigate('/home')
      }
    } catch (error) {
      setMessage('Something went wrong! Try again.')
    } finally {
      setLoading(false)
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

        {message && <p className="message">{message}</p>}

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

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Processing...' : isSignup ? 'Sign Up' : 'Log In'}
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
