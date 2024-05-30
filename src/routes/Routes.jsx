
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../lauouts/Root";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
])

export default router ;