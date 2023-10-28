import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectRoute = ({children}) => {
    const {userInfo } = useContext(AuthContext);
    return userInfo.level === 'admin' ? children : <Navigate to='/'/>;
}

export default ProtectRoute;
