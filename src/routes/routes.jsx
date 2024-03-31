import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import FormPreviewPage from "../pages/Form/FormPreviewPage";
import Layout from "../components/Layout";
import LoginPage from "../pages/Auth/Login/LoginPage";
import SignUpPage from "../pages/Auth/SignUp/SignUpPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="form-preview/:formId"
                        element={<FormPreviewPage />}
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<SignUpPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
