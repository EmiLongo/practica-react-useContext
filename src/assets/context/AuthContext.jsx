import { createContext, useState } from "react";

const AuthContext = createContext();

const initialAut = null;
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialAut)
    const handleAuth = (e) => {
        if(auth){
            setAuth(false)
        } else {
            setAuth(true)
        }
    }

    const value = { auth, handleAuth };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export {AuthProvider}
export default AuthContext;