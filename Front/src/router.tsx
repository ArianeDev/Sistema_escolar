import { createBrowserRouter } from "react-router-dom";

import GlobalLayout  from "./Layout";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GlobalLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ]
    }
])

export default router;