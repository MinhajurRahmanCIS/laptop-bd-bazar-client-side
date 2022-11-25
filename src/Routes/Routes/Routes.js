import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,  
            },
            {
                
            }
        ]
    },
    {
        path:'*',
        element:  <div>Error 404</div>
    }

]);

export default router;
