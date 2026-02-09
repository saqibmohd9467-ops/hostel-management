import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">

            {/* ================= HEADER ================= */}
            
              <Header/>
            {/* ================= HERO SECTION ================= */}
            <section className="bg-slate-100 flex-1">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Hero Content */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight">
                            Smart Hostel Living at <br />
                            <span className="text-blue-600">Verma Heights</span>
                        </h1>
                        <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-lg">
                            A modern hostel management system to manage students, rooms,
                            payments, and daily operations with ease and transparency.
                        </p>

                        <div className="mt-6 flex space-x-4">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Get Started
                            </button>
                            <button className="px-6 py-3 border border-slate-400 rounded-md hover:bg-slate-200">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Hero Image */}
                    {/* <div className="flex justify-center">
                        <img
                            src="https://via.placeholder.com/450x300"
                            alt="Hostel Illustration"
                            className="rounded-lg shadow-lg w-full max-w-md"
                        />
                    </div> */}
                </div>
            </section>

            {/* ================= CARDS SECTION ================= */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-center text-slate-800">
                        Why Choose Verma Heights?
                    </h2>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-lg font-semibold text-slate-800">
                                Student Management
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Maintain student records, attendance, and profiles efficiently.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-lg font-semibold text-slate-800">
                                Room Allocation
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Real-time room availability and seamless allocation system.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-lg font-semibold text-slate-800">
                                Secure Payments
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Track fees, dues, and payments with complete transparency.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
           
            <Footer />
            
        </div>
    );
};

export default Home
