
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../lauouts/Root";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Register/Register";
import NewsPage from "../pages/NewsPage/NewsPage";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivetRoute> <NewsPage></NewsPage> </PrivetRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
])

export default router;