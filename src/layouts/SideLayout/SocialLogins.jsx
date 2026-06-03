import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogins = () => {
    return (
        <div>
            <h2 className="font-semibold mb-4">Login with Social Accounts</h2>
            <div className="flex items-center justify-center mb-2 border hover:text-[#547BE0] border-[#547BE0] p-2 rounded cursor-pointer hover:bg-[#E7E7E7]">
             <FaGoogle className="mr-2"/> Login with Google
            </div>
            <div className="flex items-center justify-center mb-2 border p-2 rounded cursor-pointer hover:bg-[#E7E7E7] hover:text-[#547BE0]">
             <FaGithub className="mr-2"/> Login with Github
            </div>
          
        </div>
    );
};

export default SocialLogins;