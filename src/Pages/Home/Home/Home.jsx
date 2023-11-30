import ExtraContact from "../ExtraPart/ExtraContact";
import ExtraPart from "../ExtraPart/ExtraPart";
import Plans from "../Plans/Plans";
import TrendingArticles from "../TrendingArticles/TrendingArticles";


const Home = () => {
    return (
        <div>
            <TrendingArticles></TrendingArticles>
            <Plans></Plans>
        <ExtraPart></ExtraPart>
        <ExtraContact></ExtraContact>
        </div>
    );
};

export default Home;