
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useContext } from "react";


const Navbar = () => {

   const navLink = <>
   
          <li> <Link> Home </Link> </li>
          <li> <Link to='/addArticle' > Add Articles </Link> </li>
          <li> <Link to='/allArticle' > All Articles </Link> </li>
          <li> <Link> My Articles </Link> </li>
          <li> <Link> Subscription </Link> </li>
           <li> <Link> Dashboard </Link> </li>
          <li> <Link> Premium Articles </Link> </li>
          
   </>

const {user, logOut}= useContext(AuthContext)
     
const handleSingOut = () => {
 logOut()
   .then(result => {
     console.log(result)
     Swal.fire('LogOut Successfully')
   })

   .catch()

}

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {
               navLink
          }
      </ul>
    </div>
    
   <div>
   <img className=" h-28 w-28" src="https://i.ibb.co/7yN25hm/369034377-997341804693441-5339963825965546278-n.png" alt="" />  
   {/* <h1 className=" text-xl text-green-600 -mt-4" > A L L_T I M E </h1> */}
   <marquee> <h1 className=" text-xl text-green-600 " > A L L_T I M E </h1></marquee>
   </div>
 
      
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         
        {
             navLink
        }

    </ul>
  </div>
  <div className="navbar-end">
  {
           user ? (<div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10   rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm bg-green-400 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-60">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span> <img className=" w-7 h-7 rounded-full" src={user?.photoURL} alt="" /> </span>
                    </a>
                    <p className=" text-xl p-3 " > {user?.displayName} </p>
                    <p className=" -ml-2  p-3 " > {user?.email} </p>
                   
                  </li>
                  <button onClick={ handleSingOut} className=" btn btn-secondary mr-4 " > Sign Out </button>
             
                </ul>
              </div>)
               : (<Link to='/login' > <button className=" btn btn-secondary mr-4 " > Login </button> </Link>)
                   
            }
  </div>
</div>
        </div>
    );
};

export default Navbar;