import { createBrowserRouter } from "react-router";
import Notfound from "../NotFound/Notfound";
import MainRootPage from "../MainRootPage/MainRootPage";
import Home from "../Pages/Home";
import AddHabit from "../Pages/AddHabit";
import MyHabits from "../Pages/MyHabits";
import BrowsePublicHabits from "../Pages/BrowsePublicHabits";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


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
            },
            {
                path: '/add-habit',
                element: <AddHabit></AddHabit>
            },
            {
                path: '/my-habit',
                element: <MyHabits></MyHabits>
            },
            {
                path: '/browse-public-habits',
                element: <BrowsePublicHabits></BrowsePublicHabits>
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
]);

export default router;