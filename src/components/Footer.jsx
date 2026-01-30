import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

// import your logo
import image3 from "../assets/image/image3.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* COMPANY INFO */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={image3}
              alt="Company Logo"
              className="w-10 h-10 object-contain"
            />
            <h3 className="text-2xl font-bold text-white">DunMedic</h3>
          </div>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Caring for life with advanced medical solutions, trusted doctors,
            and patient-focused healthcare services.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="mailto:info@dunmedic.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {[
              "About Us",
              "Make Appointment",
              "Customer Treatments",
              "Consulting Your Health",
              "Our Doctors Team",
            ].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-500 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
          <ul className="space-y-3">
            {[
              "Surgery",
              "Cardiology",
              "Pediatric",
              "Anesthesiology",
              "Psychological",
            ].map((service, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-500 transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* PROMISE */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6">Our Promise</h4>
          <p className="text-gray-400 leading-relaxed">
            Delivering excellence in healthcare through compassion, innovation,
            and trust — because your health matters most.
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DunMedic. All Rights Reserved.
      </div>
    </footer>
  );
}
