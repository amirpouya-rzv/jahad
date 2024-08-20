"use client";
import { useState } from "react";
import Link from 'next/link';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-b-4 border-  dark:bg-gray-900  w-screen   h-20 shadow-lg fixed top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/download (1).png" className="h-16 w-16 rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out" alt="Logo" />
                </Link>
                <button
                    onClick={toggle}
                    type="button"
                    className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-teal-800 transition-all duration-300 ease-in-out"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" className="block py-2 px-4 text-lg font-semibold text-gray-900 rounded-lg hover:bg-indigo-200 dark:text-white dark:hover:bg-gray-700 transition-all duration-300 ease-in-out">ورود/ثبت نام</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-4 text-lg font-semibold text-gray-900 rounded-lg hover:bg-indigo-200 dark:text-white dark:hover:bg-gray-700 transition-all duration-300 ease-in-out">درباره ما</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-4 text-lg font-semibold text-gray-900 rounded-lg hover:bg-indigo-200 dark:text-white dark:hover:bg-gray-700 transition-all duration-300 ease-in-out">واحدها و مراکز آموزشی</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-4 text-lg font-semibold text-gray-900 rounded-lg hover:bg-indigo-200 dark:text-white dark:hover:bg-gray-700 transition-all duration-300 ease-in-out">مقالات</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 px-4 text-lg font-semibold text-gray-900 bg-teal-800 rounded-lg hover:bg-teal-800 md:bg-transparent md:text-teal-800md:dark:text-indigo-400 transition-all duration-300 ease-in-out">خانه</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
