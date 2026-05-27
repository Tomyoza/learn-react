import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import BenchmarkResults from './pages/BenchmarkResults';
import Models from './pages/Models';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/benchmarks" element={<BenchmarkResults />} />
        <Route path="/models" element={<Models />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
