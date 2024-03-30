import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const navItems = [
        {
            title: "Home",
            to: "/",
        },
        {
            title: "About Us",
            to: "/about-us",
        },
    ];
    return (
        <nav className="bg-primary border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                <Link
                    to="/"
                    className="flex items-center space-x-2 rtl:space-x-reverse"
                >
                    <img
                        src="https://placehold.co/100x100?text=LOGO"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-white text-xl font-semibold">
                        Your Logo
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full flex flex-row justify-end md:block pr-8 md:w-auto"
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col items-center p-2 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {navItems.map((item) => (
                            <li key={item.title}>
                                <NavLink
                                    to={item.to}
                                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                        <Link
                            to="/login"
                            className="btn btn-sm bg-white text-primary hover:text-white hover:bg-secondary rounded-full"
                        >
                            Login
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
