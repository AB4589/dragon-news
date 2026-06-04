import facebookLogo from "../../../public/f.png";
import twitterLogo from "../../../public/twitter.png";
import instagramLogo from "../../../public/instagram.png"; 

const SocialLinks = () => {
    return (
        <div>
            <h2 className="text-xl text-[#403F3F] my-7">Find Us On</h2>
            <div className="border rounded-xl border-[#E7E7E7] overflow-hidden space-x-4">
                <div className="flex items-center py-4  hover:text-[#547BE0] border-b border-[#E7E7E7] w-full px-4">
                    <div className="flex items-center justify-center border-none rounded-full p-1 mr-2 bg-[#F3F3F3]">
                    <img src={facebookLogo} className="w-5 h-5 p-1" alt="Facebook" /> 
                    </div>
                        Facebook
                </div>
                <div className="flex items-center  py-4  hover:text-[#547BE0] border-b border-[#E7E7E7] w-full px-4">
                    <div className="flex items-center justify-center border-none rounded-full p-1 mr-2 bg-[#F3F3F3]">
                    <img src={twitterLogo} className="w-5 h-5 p-1" alt="Twitter" /> 
                    </div>
                        Twitter
                </div>
                <div className="flex items-center  py-4  hover:text-[#547BE0] border-b border-[#E7E7E7] w-full px-4">
                    <div className="flex items-center justify-center border-none rounded-full p-1 mr-2 bg-[#F3F3F3]">
                    <img src={instagramLogo} className="w-5 h-5 p-1" alt="Instagram" /> 
                    </div>
                        Instagram
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;