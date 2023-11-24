import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
    
    <img className=" w-full h-[800px]" src="https://i.ibb.co/WcQXmCF/7906238-3804918.jpg" alt="" />
   <p className=" text-center p-5" > <button className=" btn w-full text-3xl btn-primary " > <Link to='/' > Home </Link> </button></p>
      
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}