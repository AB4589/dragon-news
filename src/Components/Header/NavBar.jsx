import { Link } from "react-router";
import Avatar from "../../assets/avatar.png"
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const NavBar = () => {
    const { user } = use(AuthContext);

    console.log(user)

    return (
        <div className="my-8 relative mx-auto max-w-[865px] items-center justify-center">
            <div>{user && user.email}</div>
            <nav className="flex items-center justify-center gap-4 text-[15px] text-[#767676]">
                <a href="#" className="hover:text-black">Home</a>
                <a href="#" className="hover:text-black">About</a>
                <a href="#" className="hover:text-black">Career</a>
            </nav>
            <div className="absolute top-0 right-0 flex gap-2 items-center">
            <img src={Avatar} alt="Search Icon" className="w-6 h-6" />
            <Link to={'/auth/login'} className="bg-[#333333] text-white px-4 py-2">Login</Link>
            </div>
        </div>
    
    );
};

export default NavBar;