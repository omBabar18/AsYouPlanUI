import React from "react";
import '../assets/styles/navBarSTyle.css';


export  const NavBarComponent = () => {
    return (
        <div id="webcrumbs">
            <div className="w-full bg-blue-600 text-white shadow-lg relative z-50 px-4 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-blue-600 text-2xl">flight_takeoff</span>
                        </div>
                        <span className="ml-3 text-xl font-bold">TravelCo</span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        <a
                            href="#"
                            className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
                        >
                            <span className="material-symbols-outlined text-sm">home</span>
                            <span>Home</span>
                        </a>

                        <a
                            href="#"
                            className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
                        >
                            <span className="material-symbols-outlined text-sm">info</span>
                            <span>About Us</span>
                        </a>

                        <details className="relative">
                            <summary className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200 cursor-pointer list-none">
                                <span className="material-symbols-outlined text-sm">business_center</span>
                                <span>Services</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </summary>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl z-50 py-2">
                                <a
                                    href="#"
                                    className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
                                >
                                    <span className="material-symbols-outlined text-sm">hotel</span>
                                    <span>Hotel</span>
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
                                >
                                    <span className="material-symbols-outlined text-sm">tour</span>
                                    <span>Tour</span>
                                </a>
                            </div>
                        </details>

                        <a
                            href="#"
                            className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
                        >
                            <span className="material-symbols-outlined text-sm">contact_mail</span>
                            <span>Contact Us</span>
                        </a>

                        <details className="relative">
                            <summary className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200 cursor-pointer list-none">
                                <span className="material-symbols-outlined text-sm">language</span>
                                <span>English</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </summary>
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white text-gray-800 rounded-lg shadow-xl z-50 py-2">
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    English
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    Japanese
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    Egyptian
                                </a>
                            </div>
                        </details>

                        <details className="relative">
                            <summary className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200 cursor-pointer list-none">
                                <span className="material-symbols-outlined text-sm">currency_rupee</span>
                                <span>INR</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </summary>
                            <div className="absolute top-full right-0 mt-2 w-24 bg-white text-gray-800 rounded-lg shadow-xl z-50 py-2">
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    INR
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    EUR
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    JPY
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    USD
                                </a>
                            </div>
                        </details>

                        <div className="flex items-center space-x-3 ml-6">
                            <button className="flex items-center space-x-1 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                                <span className="material-symbols-outlined text-sm">login</span>
                                <span>Sign In</span>
                            </button>
                            <button className="flex items-center space-x-1 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200">
                                <span className="material-symbols-outlined text-sm">person_add</span>
                                <span>Sign Up</span>
                            </button>
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <details className="relative">
                            <summary className="p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer list-none">
                                <span className="material-symbols-outlined text-2xl">menu</span>
                            </summary>
                            <div className="absolute top-full right-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-xl z-50 py-4">
                                <div className="px-4 pb-4 border-b">
                                    <div className="flex space-x-3">
                                        <button className="flex items-center space-x-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 flex-1">
                                            <span className="material-symbols-outlined text-sm">login</span>
                                            <span>Sign In</span>
                                        </button>
                                        <button className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex-1">
                                            <span className="material-symbols-outlined text-sm">person_add</span>
                                            <span>Sign Up</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="py-2">
                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span className="material-symbols-outlined text-blue-600">home</span>
                                        <span>Home</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span className="material-symbols-outlined text-blue-600">info</span>
                                        <span>About Us</span>
                                    </a>

                                    <details className="px-4">
                                        <summary className="flex items-center space-x-3 py-3 hover:bg-blue-50 transition-colors duration-200 cursor-pointer list-none">
                                            <span className="material-symbols-outlined text-blue-600">
                                                business_center
                                            </span>
                                            <span>Services</span>
                                            <span className="material-symbols-outlined text-sm ml-auto">
                                                expand_more
                                            </span>
                                        </summary>
                                        <div className="ml-8 py-2">
                                            <a
                                                href="#"
                                                className="flex items-center space-x-3 py-2 hover:text-blue-600 transition-colors duration-200"
                                            >
                                                <span className="material-symbols-outlined text-sm">hotel</span>
                                                <span>Hotel</span>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex items-center space-x-3 py-2 hover:text-blue-600 transition-colors duration-200"
                                            >
                                                <span className="material-symbols-outlined text-sm">tour</span>
                                                <span>Tour</span>
                                            </a>
                                        </div>
                                    </details>

                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span className="material-symbols-outlined text-blue-600">contact_mail</span>
                                        <span>Contact Us</span>
                                    </a>
                                </div>

                                <div className="px-4 pt-4 border-t">
                                    <div className="grid grid-cols-2 gap-4">
                                        <details>
                                            <summary className="flex items-center space-x-2 py-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer list-none">
                                                <span className="material-symbols-outlined text-sm">language</span>
                                                <span>English</span>
                                                <span className="material-symbols-outlined text-xs">expand_more</span>
                                            </summary>
                                            <div className="ml-6 py-1">
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    English
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    Japanese
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    Egyptian
                                                </a>
                                            </div>
                                        </details>

                                        <details>
                                            <summary className="flex items-center space-x-2 py-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer list-none">
                                                <span className="material-symbols-outlined text-sm">
                                                    currency_rupee
                                                </span>
                                                <span>INR</span>
                                                <span className="material-symbols-outlined text-xs">expand_more</span>
                                            </summary>
                                            <div className="ml-6 py-1">
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    INR
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    EUR
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    JPY
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    USD
                                                </a>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </nav>
                {/* Next: "Add search functionality with autocomplete suggestions" */}
            </div>
        </div>
    )
}
