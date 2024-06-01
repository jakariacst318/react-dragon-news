
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../lauouts/Root";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('news.json')
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

export default router ;