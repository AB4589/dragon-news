import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import NewsFeed from "../Components/NewsBody/NewsFeed";
import CategoryNews from "../Components/pages/CategoryNews";
import Home from "../Components/Home";
import Login from "../Components/pages/Login";
import Register from "../Components/pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetalils from "../Components/pages/NewsDetalils";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ()=> fetch('/public/news.json')
            }
        ]
    },
     {
        path: "/auth",
        element: <AuthLayout/>,
        children:[
            {
                path:"/auth/login",
                element: <Login></Login>
            },
             {
                path:"/auth/register",
                element: <Register></Register>
            }
        ]
    },
     {
        path: "/news",
        element: <NewsFeed></NewsFeed>
    },
    {
        path: "/news-details/:id",
        element: <PrivateRoute><NewsDetalils></NewsDetalils></PrivateRoute>,
        loader: ()=> fetch('/public/news.json')
    },
     {
        path: "/*",
        element: <h1>Errror 404</h1>
    }
])

export default router;