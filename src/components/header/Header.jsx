import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://svgsilh.com/svg/1484725.svg"
              className="h-8 transition-transform duration-300 hover:scale-110"
              alt=""
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Приют
            </span>
          </Link>
          <div
            className="hidden w-full md:block md:w-auto animate-fade-in"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-900 rounded-sm transition-colors duration-300 hover:text-blue-700 md:dark:hover:bg-transparent"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="block py-2 px-3 text-gray-900 rounded-sm transition-colors duration-300 hover:text-blue-700 md:dark:hover:bg-transparent"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="block py-2 px-3 text-gray-900 rounded-sm transition-colors duration-300 hover:text-blue-700 md:dark:hover:bg-transparent"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <a
                  href="https://youtube.com/shorts/hP-4vC4wTDc?si=RBGF7IWppwqL_60D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform duration-300 hover:scale-105"
                >
                  Хочу забрать
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;