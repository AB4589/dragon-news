import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    console.log(user, loading)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    })

    const authData = {
        user: user,
        setUser,
        createUser,
        loginUser,
        loading,
        setLoading,
    };
    return <AuthContext value={authData}>{children}</AuthContext>
    // return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;