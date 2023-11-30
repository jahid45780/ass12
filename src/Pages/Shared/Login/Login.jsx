import { useContext } from "react";
import { AiFillGoogleSquare } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import app from "../../../Firebase/Firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const Login = () => {

    const {signIn} = useContext(AuthContext)
     const auth = getAuth(app)
     const provider = new GoogleAuthProvider() 
     const location = useLocation()
     const navigate  = useNavigate()
     // googleLogin
  const handleGoogleSignIn = ()=>{
       
    signInWithPopup(auth, provider)

    .then(result=>{
      const user = result.user
      console.log(user)
      navigate(location?.state? location?. state : '/')
    })

    .catch(error=>{
      console.error(error)
    })
   } 



    // login
     const handleLogin = event =>{
          event.preventDefault()
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          
         
          signIn(email,password)
          .then(result =>{
            const loggedInUser = result.user
            console.log(loggedInUser);
            Swal.fire('Login Successfully')
          })
          .catch(error=>{
            console.log(error);
            Swal.fire('Incorrect password Try again')
          })

     }




    return (
        <div>
            
            <div className="hero min-h-screen bg-slate-100 rounded-lg ">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-14 ">
    
    <img className=" w-[500px] h-96" src="https://i.ibb.co/pKpSwq2/authentication.gif" alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleLogin} className="card-body  ">
      <h1 className="text-3xl text-center font-bold">Login </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
           <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <div className=" text-center" >
        <h1> Or Sign In with </h1>
         <p className=" flex items-center justify-center gap-2 text-2xl mt-3 p-3" >
         <button onClick={handleGoogleSignIn} className=" btn btn-primary flex items-center" > <AiFillGoogleSquare className=" text-2xl" ></AiFillGoogleSquare>Google</button>
          

         </p>
      </div>
      <div>
        <h1 className=" p-5 ml-9 text-center " >Have an account? <Link to='/signUp' className=" text-xl text-[#FF3811]" >  SignUp </Link> </h1>
      </div>


    </div>
  </div>
</div>



        </div>
    );
};

export default Login;