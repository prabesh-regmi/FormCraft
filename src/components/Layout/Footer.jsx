/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                Web Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                Graphic Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                SEO Optimization
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                App Development
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul>
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-8 flex justify-between items-center">
        <p className="text-sm text-center w-full">
          &copy; 2024 Your Company. All rights reserved.
        </p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
