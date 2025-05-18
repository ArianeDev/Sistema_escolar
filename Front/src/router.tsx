import { createBrowserRouter } from "react-router-dom";

import GlobalLayout  from "./Layout";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Forms } from "./Pages/Forms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/",
        element: <GlobalLayout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/ambiente",
                element: <Home />,
            },
            {
                path: "/disciplina",
                element: <Home />,
            },
            {
                path: "/atualizarProfessor",
                element: <Home />,
            },
            {
                path: "/atualizarAmbiente",
                element: <Home />,
            },
            {
                path: "/atualizarDisciplina",
                element: <Home />,
            },
            {
                path: "/cadastrarProfessor",
                element: <Home />,
            },
            {
                path: "/cadastrarAmbiente",
                element: <Home />,
            },
            {
                path: "/cadastrarDisciplina",
                element: <Home />,
            },
        ]

    }
])

export default router;