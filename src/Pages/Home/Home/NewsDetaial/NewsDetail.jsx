import { useLoaderData } from "react-router-dom";


const NewsDetail = () => {

    const news = useLoaderData()
    const { image, title } = news;
    console.log(news)

    return (
        <div>
            
        <img className=" h-60 w-full rounded-xl mt-3" src={image}  alt="" />


        <div className="card card-side  shadow-xl">
<figure><img className="  h-full w-full " src={image} alt="Movie"/></figure>
<div className="card-body">
<h2 className="card-title font-bold text-2xl "> {title} </h2>
<p></p>
<h1 className=" flex items-center text-3xl font-bold" >  </h1>
<div className=" flex items-center gap-2" >
    <div> <img className=" w-40 h-40 rounded-full shadow-lg" src='' alt="" /> </div>
    <div> <h2 className=" text-xl font-bold" >  </h2> </div>
</div>

</div>
</div>

        

    </div>
    );
};

export default NewsDetail;