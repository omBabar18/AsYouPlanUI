import React, { useState } from "react"
import "../assets/styles/createTicket.css"

const CreateTicket = () => {
    const [showForm, setShowForm] = useState(false)

    return (
        <div id="webcrumbs">
            {!showForm && (
                <div className="flex justify-center items-center min-h-screen">
                    <button
                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg text-xl"
                        onClick={() => setShowForm(true)}
                    >
                        Create Ticket
                    </button>
                </div>
            )}
            <div
                className={`transition-all duration-1000 ease-in-out ${showForm ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto animate-fade-in' : 'opacity-0 scale-95 -translate-y-10 pointer-events-none'}`}
                style={{ willChange: 'opacity, transform' }}
            >
                <div style={{ display: showForm ? 'block' : 'none' }}>
                    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen p-4 md:p-6 lg:p-8">
                        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-slow">
                            <div className="bg-primary-600 text-white p-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">support_agent</span>
                                    Create Support Ticket
                                </h2>
                                <p className="text-center mt-2 text-primary-100">
                                    We're here to help with your travel concerns
                                </p>
                            </div>

                            <form className="p-6 md:p-8 space-y-5">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Issue Category <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200 appearance-none"
                                            required
                                        >
                                            <option value="">-- Please Select --</option>
                                            <option value="booking">Booking Related</option>
                                            <option value="cancellation">Cancellation & Refund</option>
                                            <option value="payment">Payment Issue</option>
                                            <option value="visa">VISA or Document</option>
                                            <option value="insurance">Insurance</option>
                                            <option value="technical">Website or Login</option>
                                            <option value="others">Other</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                                            expand_more
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                person
                                            </span>
                                            <input
                                                type="text"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email ID <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                mail
                                            </span>
                                            <input
                                                type="email"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                call
                                            </span>
                                            <input
                                                type="tel"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
                                                placeholder="+1 (234) 567-8901"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Booking ID</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                confirmation_number
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Tell us what's going wrong <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200 min-h-[120px]"
                                        placeholder="Please describe your issue in detail so we can assist you better..."
                                        rows={5}
                                        required
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <details className="text-sm text-gray-600 mb-4 cursor-pointer group">
                                        <summary className="flex items-center gap-1 hover:text-primary-600 transition-colors duration-200">
                                            <span className="material-symbols-outlined text-sm transform group-open:rotate-180 transition-transform duration-200">
                                                expand_more
                                            </span>
                                            Additional information about tickets
                                        </summary>
                                        <div className="mt-3 pl-6 text-gray-500 text-sm">
                                            <p>
                                                Our support team typically responds within 24 hours. For urgent matters, please
                                                contact our emergency hotline at +1-800-TRAVEL.
                                            </p>
                                            <p className="mt-2">
                                                You'll receive a confirmation email with your ticket number for reference.
                                            </p>
                                        </div>
                                    </details>
                                </div>

                                <div className="flex items-center pt-2">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                        required
                                    />
                                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                                        I agree to the{" "}
                                        <a href="#" className="text-primary-600 hover:underline">
                                            Privacy Policy
                                        </a>{" "}
                                        and consent to processing my data
                                    </label>
                                </div>

                                <div className="flex justify-center pt-4">
                                    <button
                                        type="submit"
                                        className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">send</span>
                                        Submit Ticket
                                    </button>
                                </div>

                                <div className="text-center text-sm text-gray-500 pt-2">
                                    <p>
                                        Need immediate assistance?{" "}
                                        <a href="#" className="text-primary-600 hover:underline">
                                            Live chat with an agent
                                        </a>
                                    </p>
                                </div>
                            </form>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
                                placeholder="Enter booking ID if applicable"
                            />

                            <div className="bg-gray-50 p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-gray-500">support</span>
                                    <div>
                                        <h3 className="font-medium">Contact Center</h3>
                                        <p className="text-sm text-gray-500">Available 24/7 for urgent matters</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="#"
                                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        <span className="material-symbols-outlined">call</span> Call Us
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        <span className="material-symbols-outlined">forum</span> Live Chat
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        <span className="material-symbols-outlined">help</span> FAQ
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Next: "Add a confirmation modal after ticket submission" */}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fadeInSlow {
                    0% { opacity: 0; transform: scale(0.95) translateY(20px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-fade-in-slow {
                    animation: fadeInSlow 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
            `}</style>
        </div>
    )
}

export default CreateTicket
