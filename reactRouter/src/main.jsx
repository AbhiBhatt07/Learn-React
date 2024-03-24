import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Components/Home/Home";
import About from "./Components/About/About.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Github, { getGithubData } from "./Components/Github/Github.jsx";
import UserId from "./Components/UserId/UserId.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Root/>,
//     children : [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path : 'about',
//         element : <About/>
//       },
//       {
//         path: 'contactUs',
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="/github" loader={getGithubData} element={<Github />} />
      <Route path="userId/:userid" element={<UserId />} />
      <Route path="portfolio" element={<Portfolio />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
