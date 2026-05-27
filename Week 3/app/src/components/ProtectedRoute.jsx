import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Wrap any route element with this to require authentication.
function ProtectedRoute({ children }) {
  const { token } = useAuth();

  if (!token) {
    // Replace the current history entry so the back button doesn't loop
    // the user back to the protected page they were just bounced from.
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
