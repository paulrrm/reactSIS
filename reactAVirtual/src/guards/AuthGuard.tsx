import { Navigate } from "react-router-dom";
interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const isAthenticated = false;
    
    if (!isAthenticated) {
        return <Navigate to="/login" />
    }
    return <>{children}</>
  
}

export default AuthGuard