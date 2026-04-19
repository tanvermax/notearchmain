import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Mainlayout/CommonLayout/Home/Home";
import BlogPage from "@/Mainlayout/Page/Blog";
import BlogDetailsPage from "@/Mainlayout/CommonLayout/Home/BlogDetailsPage";

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
        },
        {
          Component:BlogDetailsPage,
          path: "blog/:id",
        }
    ]
  },
]);

export default router;
