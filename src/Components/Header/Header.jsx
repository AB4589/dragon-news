import logo from '../../assets/The Dragon News.png';

const Header = () => {
    return (
        <div>
              <header className="w-full py-12 text-center">
      <img src={logo} alt="Logo" className="mx-auto w-1/2 h-auto" />

      <p className="mt-4 font-body text-[18px] font-normal text-[#6f6f6f]">
        Journalism Without Fear or Favour
      </p>

      <p className="mt-3 font-body text-[20px] text-[#4b4b4b]">
        <span className="font-semibold">Sunday</span>, November 27, 2025
      </p>
    </header>
        </div>
    );
};

export default Header;