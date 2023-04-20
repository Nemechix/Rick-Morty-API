import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts";
import Login from "../Pages/Login/Login";
import Character from "../Pages/Character/Character";
import ApiRequest from "../Pages/Api/ApiRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    children: [
        {
            path: '/',
            element: <Login/>
        },
        {
            path:'/api',
            element: <ApiRequest/>
        }
        ,{
            path:'character/:id',
            element: <Character/>
        }
    ]
  },
]);

export default router