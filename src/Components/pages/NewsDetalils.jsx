import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Heading from "../Header/Heading";
import Adverstise from "../NewsBody/Adverstise";
import NewsDetalilsCard from "../NewsBody/NewsDetalilsCard";

const NewsDetalils = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [news, setNews] = useState({});
    console.log(id, data,news)
    useEffect(()=>{
        const newsDetails = data.find((singleNews) =>singleNews.id==id);
        setNews(newsDetails);

        console.log(newsDetails)
        },[data, id]
    );
    return (
        <div>
            <header>
                 <Heading></Heading>
            </header>
            <main className="w-10/12 mx-auto grid grid-cols-12">
                    <section className="col-span-9">
                        <h2 className="font-bold">News Details</h2>
                        <NewsDetalilsCard newsDetails={news}></NewsDetalilsCard>
                    </section>
                    <aside className="col-span-3">
                        <Adverstise></Adverstise>
                    </aside>
            </main>
        </div>
    );
};

export default NewsDetalils;