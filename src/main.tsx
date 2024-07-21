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
import ContactComponent from "./components/ContactUs.tsx";
import BlogList from "./components/blogs/BlogList.tsx";
import TestimonialsPage from "./components/Testimonial/TestimonialsPage.tsx";
import PlansSlider from "./components/PlansSlider.tsx";
import WhatWeDo from "./components/WhatWeDo.tsx";


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
              <WhatWeDo />
              <PlansSlider />
            </Layout>
          }
        />
        <Route
          path="/services/:id"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/testimonials"
          element={
            <Layout>
              <TestimonialsPage />
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
    </HashRouter>
  </React.StrictMode>
);
