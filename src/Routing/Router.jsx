import { createBrowserRouter } from "react-router";
import Notfound from "../NotFound/Notfound";
import MainRootPage from "../MainRootPage/MainRootPage";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRootPage></MainRootPage>,
        errorElement: <Notfound></Notfound>,

        hydrateFallbackElement: <p>Loading</p>,

        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>,
            }
        ]
    },
]);

export default router;