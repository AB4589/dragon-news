import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";
import { IoEyeOutline } from "react-icons/io5";

const NewsCard = ({news}) => {
     console.log(news.author.image)
    return (
        <>
            <div>
                  <div className="flex justify-between bg-[#F3F3F3] p-5">
                <div className="flex author items-center space-x-4">
                    <div className="autor-image">
                        <img src={news.author.image} alt={news.title} className="rounded-full w-15 h-15"/>
                    </div>
                    <div>
                    <h2 className="title-base font-semibold">{news.author.name}</h2>
                    <h3 className="title-base">{news.formattedDate}</h3>
                    </div>
                </div>
                    <div className="flex items-center share space-x-3">
                        <CiBookmark size={25}/>
                        <IoShareSocialOutline size={25}/>
                    </div>
            </div>
            <div className="border-1 border-[#E7E7E7] px-5 py-5 space-y-5">
                <h2 className="font-bold text-3xl leading-10">
                    {news.title}
                </h2>
                <img src={news.imageUrl} alt=""/>
                <div className="description">
                    <p className="text-base font-normal">{news.description}</p>
                    <Link to={'/'} className="text-[#FF8C47] font-semibold text-base">Read More</Link>
                </div>
                <div className="border border-[#E7E7E7]"></div>
                <div className="flex news-card-footer justify-between">
                    <div>
                        <h2 className="font-medium text-base">{news.rating.number}</h2> 
                    </div>
                    <div className="flex items-center space-x-2.5">
                        <IoEyeOutline className="text-2xl"/>
                        <h3 className="font-medium text-base">{news.views}</h3>
                    </div>
                </div>
            </div>
            </div>
          
        </>
       
        
     
    );
};

export default NewsCard;