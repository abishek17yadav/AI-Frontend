import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './auth.css'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', { email, password })
      localStorage.setItem("token", res.data.token)
      alert("Login successful")
      navigate("/dashboard")
    } catch (err) {
      alert("Login failed: " + err.response?.data?.message || "Unknown error")
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src="/ai-login.png" alt="AI Login" className="auth-image" />
        <h2>Welcome to AI Code Reviewer</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p>New user? <Link to="/signup">Create account</Link></p>
      </div>
    </div>
  )
}

export default Login
