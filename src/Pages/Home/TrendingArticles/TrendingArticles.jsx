import { useEffect, useState } from "react";
import NewsSlider from "../../../Componten/NewsSlider/NewsSlider";


const TrendingArticles = () => {
    const [trending, setTrending] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/trNews')
        .then(res => res.json())
        .then(data => setTrending(data) )
    },[])
    return (
        <div>
            <section>
            <h1 className=" text-5xl font-bold text-center mt-3" > Trending Articles </h1>
            <p className=" text-3xl font-semibold text-center mt-2 text-yellow-500" > ---- Todays Trending Articles News --- </p>
            </section>

         <div className=" mt-4" >
           <NewsSlider trending={trending}></NewsSlider>
          
         </div>

        </div>
    );
};

export default TrendingArticles;