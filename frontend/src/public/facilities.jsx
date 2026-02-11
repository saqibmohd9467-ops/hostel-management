import { Wifi, ShieldCheck, Utensils, BedDouble, Dumbbell, Sparkles } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const facilities = [
  {
    title: "Accommodation",
    description:
      "Fully furnished rooms with comfortable beds, study tables, cupboards and 24/7 water supply.",
    icon: <BedDouble size={40} />,
  },
  {
    title: "Mess & Dining",
    description:
      "Healthy and hygienic meals served daily with purified drinking water.",
    icon: <Utensils size={40} />,
  },
  {
    title: "High-Speed WiFi",
    description:
      "24/7 high-speed internet connectivity for study and entertainment.",
    icon: <Wifi size={40} />,
  },
  {
    title: "Security",
    description:
      "24/7 CCTV surveillance, biometric entry system and security guards.",
    icon: <ShieldCheck size={40} />,
  },
  {
    title: "Gym & Recreation",
    description:
      "Well-equipped gym, indoor games, TV room and sports facilities.",
    icon: <Dumbbell size={40} />,
  },
  {
    title: "Cleaning & Maintenance",
    description:
      "Daily cleaning services and quick maintenance support.",
    icon: <Sparkles size={40} />,
  },
];

const Facilities = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
        <Header/>
      <div className="max-w-6xl mx-auto">
        
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-4">
          Our Hostel Facilities
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We provide modern amenities to ensure a comfortable and secure stay for our students.
        </p>

        {/* Facilities Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition duration-300"
            >
              <div className="text-indigo-600 flex justify-center mb-4">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

      </div>
      <Footer/>
    </div>

  );
};

export default Facilities;


