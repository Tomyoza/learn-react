import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <nav style={{ display: 'flex', gap: 16, padding: '12px 24px', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link>
      <Link to="/benchmarks">Benchmark Results</Link>
      <Link to="/models">Models</Link>

      {/* Right-align the auth control */}
      <span style={{ marginLeft: 'auto' }}>
        {token
          ? <button onClick={handleLogout}>Log out</button>
          : <Link to="/login">Sign in</Link>
        }
      </span>
    </nav>
  );
}
export default Navbar;
