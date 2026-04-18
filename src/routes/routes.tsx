import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Mainlayout/CommonLayout/Home/Home";
import BlogPage from "@/Mainlayout/Page/Blog";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children:[
        {
            Component:Home,
            path:"/"
        },{
          Component:BlogPage,
          path:"/blog"
        }
    ]
  },
]);

export default router;
