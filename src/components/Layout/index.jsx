import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <Navbar />
            <main className="min-h-[53vh]">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
