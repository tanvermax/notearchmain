import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Mainlayout/CommonLayout/Home/Home";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children:[
        {
            Component:Home,
            path:"/"
        }
    ]
  },
]);

export default router;
