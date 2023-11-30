import { AiOutlineFundView,AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";

const ArticleCard = ({news}) => {
    const { _id, title, image,views, date } = news;
    return (
        <div className="card w-96 space-y-3 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl h-80 w-96 " />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title"> {title} </h2>
          <div className=" flex gap-14" >
          <p className=" flex text-2xl items-center gap-2 " >  <AiOutlineFieldTime></AiOutlineFieldTime> {date} </p>
          <p className=" flex text-2xl items-center gap-2 " > <AiOutlineFundView></AiOutlineFundView> {views} </p>
          </div>
          <div>
           <Link to={`/allNews/${_id}`} >
           <button className="btn btn-outline btn-primary mt-6 w-full ">Details News </button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default ArticleCard;