import React from "react";
import ReactDOM from "react-dom/client";
import {
 // createBrowserRouter,
  HashRouter,
  Route,
  //RouterProvider,
  Routes,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Layout from "./Layout.tsx";
// import ErrorPage from "./error-page.tsx";
import AboutUs from "./components/about-us/AboutUs.tsx";
import Services from "./components/services/Services.tsx";
import Plans from "./components/plans/Plans.tsx";
import Testimonials from "./components/Testimonial/Testimonials.tsx";
import ContactComponent from "./components/ContactUs.tsx";
import BlogList from "./components/blogs/BlogList.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout>
//         <App />
//       </Layout>
//     ),
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/about-us",
//     element: (
//       <Layout>
//         <AboutUs />
//       </Layout>
//     ),
//   },
//   {
//     path: "/services",
//     element: (
//       <Layout>
//         <Services />
//         <Testimonials />
//       </Layout>
//     ),
//   },
//   {
//     path: "/plans",
//     element: (
//       <Layout>
//         <Plans />
//       </Layout>
//     ),
//   },
//   {
//     path: "/contact-us",
//     element: (
//       <Layout>
//         <ContactComponent />
//       </Layout>
//     ),
//   },
//   {
//     path: "/blogs",
//     element: (
//       <Layout>
//         <BlogList />
//       </Layout>
//     ),
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
              <Testimonials />
            </Layout>
          }
        />
        <Route
          path="/plans"
          element={
            <Layout>
              <Plans />
            </Layout>
          }
        />
        <Route
          path="/plans/:id"
          element={
            <Layout>
              <Plans />
            </Layout>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout>
              <BlogList />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactComponent />
            </Layout>
          }
        />
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </HashRouter>
  </React.StrictMode>
);
