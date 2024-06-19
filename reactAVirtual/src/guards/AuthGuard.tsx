import { Navigate } from "react-router-dom";
import {useAuthStore} from '../store/auth.store'
interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const authStatus = useAuthStore(state => state.status)
   
    if (authStatus !== 'authenticated') {
        return <Navigate to="/login" />
    }
    return <>{children}</>
  
}

export default AuthGuard