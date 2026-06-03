import {useParams} from "react-router";

const CategoryNews = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            Catergory News - {id}
        </div>
    );
};

export default CategoryNews;