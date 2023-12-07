import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import About from "../Pages/Home/About/About";
import Resume from "../Pages/Resume/Resume";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Resume /> },
      { path: "/projects", element: <Projects /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default Router;
