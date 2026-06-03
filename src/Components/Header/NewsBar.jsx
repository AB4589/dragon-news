import MarqueeImport from "react-fast-marquee";

const Marquee = MarqueeImport.default || MarqueeImport;

const NewsBar = () => {
  return (
    <div className="mx-auto w-11/12 bg-[#F3F3F3] py-4 px-6 flex items-center">
      <button className="bg-[#D72050] btn-sm text-white text-xl px-6 py-2">
        Latest
      </button>

      <div className="ml-4 flex-1 overflow-hidden text-gray-600">
        <Marquee pauseOnHover speed={50} gradient={false}>
          <span className="mx-4">
            Match Highlights: Germany vs Spain — as it happened!
          </span>
          <span className="mx-4">
            Match Highlights: Germany vs Spain as...
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default NewsBar;