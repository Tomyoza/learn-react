import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/benchmarks">Benchmark Results</Link>
      <Link to="/models">Models</Link>
    </nav>
  );
}
export default Navbar;
