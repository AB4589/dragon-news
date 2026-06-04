import { useEffect, useState } from "react";
import {useLoaderData, useParams} from "react-router";

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(()=> {
            if(id == "00"){
                setCategoryNews(data);
                return;
            }else if(id=='1'){
                const filteredNews = data.filter((news)=>news.is_todays_pick==true)
                setCategoryNews(filteredNews);
                return;
            }
            const filteredNews = data.filter(news=>news.category.id == id);
            console.log(filteredNews)
            setCategoryNews(filteredNews);
        }, [data, id]
    ) 
    return (
        <div>
            Total - {categoryNews.length} News Found
        </div>
    );
};

export default CategoryNews;