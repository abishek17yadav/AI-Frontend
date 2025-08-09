import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './auth.css'

function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/api/auth/signup', { name, email, password })
      alert("Signup successful! Please login.")
      navigate('/login')
    } catch (err) {
      alert("Signup failed: " + err.response?.data?.message || "Unknown error")
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src="/ai-signup.png" alt="AI Signup" className="auth-image" />
        <h2>Create Your AI Code Reviewer Account</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Signup</button>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  )
}

export default Signup
