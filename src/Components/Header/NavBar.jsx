import Avatar from "../../assets/avatar.png"
const NavBar = () => {
    return (
        <div className="my-8 relative mx-auto max-w-[865px] items-center justify-center">
            <nav className="flex items-center justify-center gap-4 text-[15px] text-[#767676]">
                <a href="#" className="hover:text-black">Home</a>
                <a href="#" className="hover:text-black">About</a>
                <a href="#" className="hover:text-black">Career</a>
            </nav>
            <div className="absolute top-0 right-0 flex gap-2 items-center">
            <img src={Avatar} alt="Search Icon" className="w-6 h-6" />
            <button className="bg-[#333333] text-white px-4 py-2">Login</button>
            </div>
        </div>
        
    //     <div className="relative mx-auto mt-4 flex max-w-[865px] items-center justify-center">
    //     <nav className="flex items-center gap-4 text-[15px] text-[#767676]">
    //       <a href="/" className="hover:text-black">
    //         Home
    //       </a>
    //       <a href="/about" className="hover:text-black">
    //         About
    //       </a>
    //       <a href="/career" className="hover:text-black">
    //         Career
    //       </a>
    //     </nav>

    //     <div className="absolute right-0 flex items-center gap-2">
    //       <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white">
    //         <svg
    //           viewBox="0 0 24 24"
    //           className="h-[30px] w-[30px] fill-black"
    //           aria-hidden="true"
    //         >
    //           <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4.3a3.5 3.5 0 0 1 3.5 3.5c0 1.28-.7 2.4-1.73 3.01 2.34.73 4.03 2.57 4.43 4.77A8 8 0 0 1 5.8 17.58c.4-2.2 2.09-4.04 4.43-4.77A3.5 3.5 0 0 1 12 6.3Z" />
    //         </svg>
    //       </button>

    //       <button className="h-[34px] w-[106px] bg-[#403f3f] text-[14px] font-semibold text-white hover:bg-black">
    //         Login
    //       </button>
    //     </div>
    //   </div>
    );
};

export default NavBar;