import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Nabvar from "../components/Nabvar";
import Footer from "../components/Footer";
import { ProjectsMap } from '../components/home/ProjectsMap';
import { ProjectDetails } from '../views/ProjectDetails';

const Router = () => {
  return (
    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ProjectsMap />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;