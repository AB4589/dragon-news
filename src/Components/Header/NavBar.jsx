import { Link } from "react-router";
import Avatar from "../../assets/avatar.png"
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
const NavBar = () => {

    const { user } = use(AuthContext);
    const auth = getAuth(app);

    console.log(user)

    const handleLogOut = () => {
        signOut(auth).then(() => {
            console.log("You have successfully Sign out")
        }).catch((error) => {
            console.log(error.errorMessage)
        });

    }

    return (
        <div className="my-8 relative mx-auto max-w-[865px] items-center justify-center">
            <div>{user && user.email}</div>
            <div>
            <nav className="flex items-center justify-center gap-4 text-[15px] text-[#767676]">
                <Link to={'/'} className="hover:text-black">Home</Link>
                <Link to={'/about'} className="hover:text-black">About</Link>
                <Link to={'/career'} className="hover:text-black">Career</Link>
            </nav>
            </div>
            <div className="absolute top-0 right-0 flex gap-2 items-center">
                {user ? <buttton className="btn" onClick={handleLogOut}>Log Out</buttton>  :  <Link to={'/auth/login'} className="bg-[#333333] text-white px-4 py-2">Login</Link>}
           
            </div>
        </div>
    
    );
};

export default NavBar;