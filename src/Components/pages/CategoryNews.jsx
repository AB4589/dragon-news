import { useEffect, useState } from "react";
import {useLoaderData, useParams} from "react-router";
import NewsCard from "../NewsBody/NewsCard";

const CategoryNews = () => {
    const { id } = useParams();
    console.log(id)
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
            } else {
                const filteredNews = data.filter((news)=>news.category.id)
                setCategoryNews(filteredNews)
            }
            const filteredNews = data.filter(news=>news.category.id == id);
            console.log(filteredNews)
            setCategoryNews(filteredNews);
        }, [data, id]
    ) 
    return (
        <div>
            Total <span className="text-[#D72050] font-bold">{categoryNews.length}</span> news found

            <div className="grid grid-cols-1 gap-5">
                {
                    categoryNews.map((news)=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;