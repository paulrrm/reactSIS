import { Navigate } from "react-router-dom";

interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  
    const localAuth = localStorage.getItem('usuarioAVirtual');
    console.log(localAuth)
    if (localAuth === null || localAuth.length < 10) {
        return <Navigate to="/login" />
    }
    return <>{children}</>
  
}

export default AuthGuard