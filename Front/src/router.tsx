import { createBrowserRouter } from "react-router-dom";

import GlobalLayout  from "./Layout";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Forms } from "./Pages/Forms";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <GlobalLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/atualizar",
                element: <Forms />
            }
        ]

    }
])

export default router;