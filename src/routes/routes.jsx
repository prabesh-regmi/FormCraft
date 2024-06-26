import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./ProtectedRoute";
import NotFound from "../pages/NotFound";
import UnauthorizedPage from "../pages/Unauthorized/UnauthorizedPage";
import Home from "../pages/Home/Home";
import FormPreviewPage from "../pages/Form/FormPreviewPage";
import Layout from "../components/Layout";
import LoginPage from "../pages/Auth/Login/LoginPage";
import SignUpPage from "../pages/Auth/SignUp/SignUpPage";
import FormCreationPage from "../pages/Form/FormCreationPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="form-preview/:formId" element={<FormPreviewPage />} />
          <Route element={<Auth allowedRoles={["admin"]} />}>
            <Route path="/form/create" element={<FormCreationPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
