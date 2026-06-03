import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import NewsFeed from "../Components/NewsBody/NewsFeed";
import CategoryNews from "../Components/pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <h2>HomePage</h2>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>
            }
        ]
    },
     {
        path: "/auth",
        element: <h1>Authentication</h1>
    },
     {
        path: "/news",
        element: <NewsFeed></NewsFeed>
    },
     {
        path: "/*",
        element: <h1>Errror</h1>
    }
])

export default router;