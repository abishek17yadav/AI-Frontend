import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #141e30, #243b55)',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Welcome to <span style={{ color: '#00ffd5' }}>AI Code Reviewer</span></h1>
      <p style={{ fontSize: '18px', marginBottom: '40px' }}>
        Empowering developers with instant AI feedback on code.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <button style={{
          padding: '12px 30px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#00ffd5',
          color: '#000',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}>
          {/* <Link to="/login" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Login</Link> */}
        </button>
        <button style={{
          padding: '12px 30px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#4e95ffff',
          color: '#fff',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}>
          {/* <Link to="/signup" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Signup</Link> */}
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Dashboard</Link>
        </button>
      </div>
    </div>
  );
}

export default Landing;
