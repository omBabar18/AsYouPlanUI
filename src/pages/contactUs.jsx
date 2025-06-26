import React from "react"

import "../assets/styles/contactUs.css"
import {WhyToChooseUsComponent} from '../components/whyToChooseUs.jsx';

export const ContactUsComponent = () => {
    return (
        <div id="webcrumbs">
            <div className="w-full min-h-screen bg-gray-50">
                <div className="relative h-96 mb-12">
                    <iframe
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdHxlbnwwfHx8fDE3NTA3MzQ4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080'50.3%22N%2072%C2%B051'51.5%22E!5e0!3m2!1sen!2sin!4v1234567890123"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        keywords="mumbai map, office location, contact us"
                    ></iframe>
                    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
                        <div className="flex items-start space-x-3">
                            <div className="bg-primary-500 rounded-full p-2 flex-shrink-0">
                                <span className="material-symbols-outlined text-white text-lg">location_on</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Our Office Location</h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    19°03'50.3"N 72°51'51.5"E
                                    <br />
                                    3V77+HPM Mumbai, Maharashtra
                                </p>
                                <div className="flex items-center text-xs text-primary-600">
                                    <span className="material-symbols-outlined text-sm mr-1">business</span>
                                    Head Office
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary-600">
                                                location_on
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                                            <p className="text-gray-600">
                                                3V77+HPM Mumbai, Maharashtra
                                                <br />
                                                19°03'50.3"N 72°51'51.5"E
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary-600">phone</span>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                                            <p className="text-gray-600">+91 98765 43210</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary-600">mail</span>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                                            <p className="text-gray-600">contact@company.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-primary-100 rounded-full p-3 flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary-600">schedule</span>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                                            <p className="text-gray-600">
                                                Monday - Friday: 9:00 AM - 6:00 PM
                                                <br />
                                                Saturday: 10:00 AM - 4:00 PM
                                                <br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Why Choose Us?</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-600 text-lg mr-2">
                                            check_circle
                                        </span>
                                        Quick response time within 24 hours
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-600 text-lg mr-2">
                                            check_circle
                                        </span>
                                        Professional and experienced team
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-600 text-lg mr-2">
                                            check_circle
                                        </span>
                                        Personalized solutions for your needs
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 outline-none"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 outline-none"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 outline-none resize-none"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                                >
                                    <span>Send Message</span>
                                    <span className="material-symbols-outlined">send</span>
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Next: "Add social media links section" */}
                {/* Next: "Add FAQ section below contact form" */}
                {/* Next: "Add office photos gallery" */}

                <WhyToChooseUsComponent />
            </div>
        </div>
    )
}
