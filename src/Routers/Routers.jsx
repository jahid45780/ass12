import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import AddArticle from "../Pages/Home/Home/AddArticle/AddArticle";
import AllArticle from "../Pages/Home/Home/AllArticle/AllArticle";
import NewsDetail from "../Pages/Home/Home/NewsDetaial/NewsDetail";



   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
             path:'/',
             element: <Home></Home>

        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/addArticle',
          element:<AddArticle></AddArticle>
        },
        {
          path:'/allArticle',
          element:<AllArticle></AllArticle>
        },
        {
          path:'/allNews/:id',
          element:<NewsDetail></NewsDetail>,
          loader:({params})=> fetch(`https://the-final-project-12-server.vercel.app/${params.id}`)
        }
      ]
      
    },
  ]);