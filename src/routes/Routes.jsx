import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Contact from "../components/Contact";
import UpdateProfile from "../components/UpdateProfile";
import Register from "../components/Register";
import NotFoundPage from "../pages/NotFoundPage";
import Estate from "../components/Estate";
import Login from "../components/Login";
import EstateDetails from "../components/EstateDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout> </MainLayout>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/UpdateProfile',
                element: <UpdateProfile></UpdateProfile>,
            },
            {
                path: '/Register',
                element: <Register></Register>,
            },
            {
                path: '/Login',
                element: <Login></Login>,
            },
            {
                path: "/Contact",
                element: <Contact></Contact>,
            },
            {
                path: "/Estate",
                element: <Estate></Estate>,
                loader: () => fetch("/nestFinder.json").then((response) => response.json()),
            },
            {
                path: "/nestFinder/:id", 
                element: <EstateDetails></EstateDetails>,
            },
            {
                path: "*",
                element: <NotFoundPage></NotFoundPage>,
              },
        ]
    }
]);
export default router;