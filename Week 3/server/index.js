import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const PORT = 3001;
const JWT_SECRET = 'week3-learning-secret'; // Never hardcode secrets in real apps!

// --- Middleware ---
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from Vite dev server
app.use(express.json());

// --- Fake database ---
const USERS = [
  { id: 1, username: 'demo', password: 'password123' }, // Plain text only for learning!
];

const BENCHMARK_RESULTS = [
  { id: 1, model: 'GPT-4o',             benchmark: 'MMLU',      score: 88.7, date: '2024-11-01' },
  { id: 2, model: 'Claude 3.5 Sonnet',  benchmark: 'MMLU',      score: 90.4, date: '2024-10-15' },
  { id: 3, model: 'Gemini 1.5 Pro',     benchmark: 'HumanEval', score: 84.1, date: '2024-09-20' },
  { id: 4, model: 'GPT-4o',             benchmark: 'HumanEval', score: 90.2, date: '2024-11-01' },
  { id: 5, model: 'Claude 3 Opus',      benchmark: 'MATH',      score: 60.1, date: '2024-08-05' },
  { id: 6, model: 'Llama 3 70B',        benchmark: 'MMLU',      score: 82.0, date: '2024-07-12' },
];

// --- Auth middleware (reused by protected routes) ---
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or malformed Authorization header' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload; // Attach decoded payload to the request
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// --- Routes ---

// POST /api/login — returns a JWT on valid credentials
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const token = jwt.sign(
    { userId: user.id, username: user.username }, // Payload
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

// GET /api/benchmarks — protected, requires valid JWT
app.get('/api/benchmarks', requireAuth, (req, res) => {
  res.json(BENCHMARK_RESULTS);
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
  console.log(`  POST /api/login      — get a JWT`);
  console.log(`  GET  /api/benchmarks — protected data`);
  console.log(`\nTest credentials: username=demo  password=password123`);
});
