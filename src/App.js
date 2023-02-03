import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// Default import
import Header from "./components/Header";
// Named import
import { Title } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from "./components/Footer"
import RestauranctMenu from './components/RestrauntMenu';

const App = () => {
  return (
    <>
      <Header />
      {/* all the children will put in outlet */}
      <Outlet />
     <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  
  children:[
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/restaurant/:resId",
      element: <RestauranctMenu />,
    },
  ]
 
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
