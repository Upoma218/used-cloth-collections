import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Category from "../../Pages/Home/Categories/Category";
import Payment from "../../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/categories/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element:<Dashboard></Dashboard>

            },
            {
                path: '/dashboard/myOrders',
                element:<MyOrders></MyOrders>

            },
            {
                path: '/dashboard/users/Sellers',
                element:<AllSellers></AllSellers>

            },
            {
                path: '/dashboard/users/Buyers',
                element:<AllBuyers></AllBuyers>,

            },
            {
                path: '/dashboard/reportedItems',
                element:<ReportedItems></ReportedItems>

            },
            {
                path: '/dashboard/myProducts',
                element:<MyProducts></MyProducts>

            },
            {
                path: '/dashboard/addProducts',
                element:<AddProducts></AddProducts>

            },
           
            {
                path: '/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)

            },
            
        ]
    }
    
]);