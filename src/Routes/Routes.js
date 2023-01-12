import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRouter from "./PrivateRouter";
import MyReview from "../Pages/MyReview";
import Services from "../Pages/Services";
import AddProduct from "../Pages/AddProduct";
import UpdateReview from "../Pages/UpdateReview";
import Cetegories from "../Pages/Cetegories";
import Error404 from "../Pages/Error404";
import All_Buyers from "../Pages/All_Buyers";
import All_seller from "../Pages/All_seller";
import Dashboard from "../Pages/Dashboard";
import My_Product from "../Pages/My_Product";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:Cat_name',
                element: <PrivateRouter><Cetegories></Cetegories>,</PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:1001/categories/${params.Cat_name}`)
            },
            {
                path: '/sevices',
                element: <Services></Services>,
                loader: () => fetch('https://http://localhost:1001/services')
            },
            {
                path: '/My_Product',
                element: <My_Product></My_Product>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addService',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/MyReview/:id',
                element: <PrivateRouter><MyReview></MyReview> </PrivateRouter>
            },
            {
                path: '/servicereview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => { return fetch(`https://http://localhost:1001/servicereview/${params.id}`) }
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/My_Product',
                element: <My_Product></My_Product>
            },
            {
                path: '/dashboard/MyReview',
                element: <PrivateRouter><MyReview></MyReview></PrivateRouter>
            },
            {
                path: '/dashboard/AllBuyers',
                element: <All_Buyers></All_Buyers>
            },
            {
                path: '/dashboard/AllSeller',
                element: <All_seller></All_seller>
            },
        ]
    },
    {
        path: '/*',
        element: <Error404></Error404>
    }

])