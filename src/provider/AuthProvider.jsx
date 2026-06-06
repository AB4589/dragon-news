import  { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(
        {
            name: "Hablu Mia",
            email: "Hablu@mia.com"
        }
    )
    const authData = {
        user: user,
        setUser,
    };
    return <AuthContext value={authData}>{children}</AuthContext>
    // return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;