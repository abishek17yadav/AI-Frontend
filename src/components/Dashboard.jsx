import { useNavigate } from 'react-router-dom'
import './dashboard.css';

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome to the Dashboard</h2>
      <a href="/login"><button>Logout</button></a>
      <div 
        onClick={() => navigate('/codereview')} 
        style={{ 
          border: '1px solid gray', 
          padding: '20px', 
          borderRadius: '10px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        <h3>🛠️ Code Review</h3>
        <p>Click to review your code using AI</p>
      </div>
    </div>
  )
}

export default Dashboard
