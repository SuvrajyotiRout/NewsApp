import { useEffect, useState } from "react"
import Newscard from "./Newscard";

const Newschannelname = ({ catagory }) => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data => setNews(data.articles))


    }, [news])


    return <>
        <center><h2>News <span className="text-bg-danger">Fresh</span></h2></center>
        {news.map((newes, index) => {

            return <Newscard key={index} title={newes.title} description={newes.description} newsurl={newes.url} imgurl={newes.urlToImage} />
        })}
    </>
}
export default Newschannelname