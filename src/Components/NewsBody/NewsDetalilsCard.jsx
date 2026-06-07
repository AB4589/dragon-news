import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetalilsCard = ({newsDetails}) => {
    const {title, description, imageUrl, category} = newsDetails;

    return (
        <div className="border border-[#E7E7E7] mr-4">
            <div className="p-8 space-y-8">
                <img src={imageUrl} alt={title} />
                    <h2 className="font-bold text-2xl leading-11">{title}</h2>
                    <p>{description}</p>
                    <Link to={`/category/${category?.id}`} className="flex items-center btn w-3/12 bg-[#D72050] text-white"> <FaArrowLeftLong /> All news in this category</Link>
            </div>
            

        </div>
    );
};

export default NewsDetalilsCard;