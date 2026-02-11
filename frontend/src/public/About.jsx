import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>

            <Header />
            <div className="bg-slate-50 text-slate-800">

                {/* Hero Section */}
                <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            About Verma Heights
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
                            Building trust, comfort, and premium living spaces designed for
                            modern lifestyles.
                        </p>
                    </div>
                </section>

                {/* Company Intro */}
                <section className="py-16 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                        {/* Image */}
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                                alt="Building"
                                className="rounded-xl shadow-lg w-full object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                Who We Are
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Verma Heights is committed to delivering high-quality residential
                                and commercial spaces that blend luxury with affordability.
                                Our mission is to provide modern infrastructure, prime locations,
                                and thoughtfully designed properties.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                With years of expertise in real estate development, we ensure
                                transparency, reliability, and excellence in every project we
                                undertake.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="bg-white py-16 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

                        <div className="bg-slate-100 p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
                                Our Mission
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                To create sustainable and innovative living spaces that
                                enhance quality of life while maintaining the highest
                                standards of construction and customer satisfaction.
                            </p>
                        </div>

                        <div className="bg-slate-100 p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
                                Our Vision
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                To become a trusted name in real estate development by
                                delivering landmark projects that redefine modern living.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 px-6">
                    <div className="max-w-6xl mx-auto text-center">

                        <h2 className="text-3xl font-bold mb-12">
                            Why Choose Verma Heights?
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <h4 className="text-xl font-semibold mb-2">
                                    Premium Locations
                                </h4>
                                <p className="text-slate-600 text-sm">
                                    Strategically located properties ensuring convenience,
                                    connectivity, and future value growth.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <h4 className="text-xl font-semibold mb-2">
                                    Modern Design
                                </h4>
                                <p className="text-slate-600 text-sm">
                                    Contemporary architecture with efficient space planning
                                    and aesthetic appeal.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <h4 className="text-xl font-semibold mb-2">
                                    Trusted Quality
                                </h4>
                                <p className="text-slate-600 text-sm">
                                    Built with superior materials and strict quality
                                    control standards.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-blue-600 text-white py-16 px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">
                            Experience Better Living Today
                        </h2>
                        <p className="mb-6 text-blue-100">
                            Discover your dream home with Verma Heights. Contact us to
                            explore our latest projects.
                        </p>
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-slate-100 transition">
                            Contact Us
                        </button>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default About;
