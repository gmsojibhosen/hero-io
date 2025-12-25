import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../components/AppDetails/AppDetails";
import AppsFound from "../components/AppsFound/AppsFound";


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
  Component: Apps,
  loader: async () => fetch('/appsData.json').then(res => res.json()),
},
    {
      path: 'appDetails/:id',
      loader: async () => fetch('/appsData.json').then(res => res.json()),
      Component: AppDetails,
      
    },

    // {
    //     path:'appsFound/:id',
    //      loader: async () => fetch('/appsData.json').then(res => res.json()),
    //      Component: AppsFound
    // },
 


            {
                path: 'installation/:id',
                loader: async () => fetch('/appsData.json').then(res => res.json()),
                Component: Installation,
            },
           
            {
                path:'appFound',
                Component:AppsFound
            }
           
        ] 
    },
])