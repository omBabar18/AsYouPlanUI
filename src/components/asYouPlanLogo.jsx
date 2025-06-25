import React from "react"

import "../assets/styles/asYouPlanLogo.css";

export const AsyouPlanLogoLoader = () => {
    return (
        <div id="webcrumbs">
            <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
                <div className="text-center space-y-12">
                    <div className="relative">
                        <h1 className="text-6xl md:text-8xl font-bold text-primary-600 tracking-wide">asYouPlan</h1>
                        <div className="absolute -top-4 -right-4 animate-bounce">
                            <div className="bg-white rounded-full p-4 shadow-lg transform rotate-45 animate-pulse">
                                <svg
                                    className="w-12 h-12 text-primary-500 transform -rotate-45 animate-bounce"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-center space-x-2">
                            <div className="w-3 h-3 bg-primary-400 rounded-full animate-bounce"></div>
                            <div
                                className="w-3 h-3 bg-primary-500 rounded-full animate-bounce"
                                style={{animationDelay: "0.1s"}}
                            ></div>
                            <div
                                className="w-3 h-3 bg-primary-600 rounded-full animate-bounce"
                                style={{animationDelay: "0.2s"}}
                            ></div>
                        </div>
                        <p className="text-lg text-gray-600 animate-pulse">Planning your journey...</p>
                    </div>

                </div>
                {/* Next: "Add progress bar with percentage indicator" */}
            </div>
        </div>
    )
}
