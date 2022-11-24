import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
    {
        path: '/'
    },
    {
        path:'*',
        element:  <div>Error 404</div>
    }

]);

