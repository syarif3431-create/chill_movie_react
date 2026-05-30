import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from '../store/useAuthStore';

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuthStore();
    const location = useLocation();

    if (!currentUser) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
