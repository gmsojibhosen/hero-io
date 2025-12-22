import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
    {
        path: '/', Component: Root,
        errorElement: <ErrorPage/>,
        children: [
            {
                index:true,
                loader: async () => {
                    const res = await fetch('/appsData.json')
                    return res.json()
                },
                Component: Home,
            },
            {
                path: 'apps',
                 loader: async () => {
                    const res = await fetch('/appsData.json')
                    return res.json()
                },
                Component: Apps
            },
            {
                path: 'installation',
                Component: Installation,
            }
           
        ] 
    },
])