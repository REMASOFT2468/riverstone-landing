import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

// Logo
import image4 from "../assets/image/image4.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A3D62] text-[#E6F4F9] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* COMPANY INFO */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={image4}
              alt="Riverstone Logo"
              className="w-20 h-20 object-contain"
            />
            <h3 className="text-2xl font-bold text-white">Riverstone</h3>
          </div>

          <p className="text-[#E6F4F9]/80 mb-6 leading-relaxed">
            Providing trusted, compassionate, and advanced healthcare services
            through experienced medical professionals and modern facilities.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 flex-wrap">
            {[
              { icon: <FaFacebookF />, link: "https://facebook.com" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
              { icon: <FaYoutube />, link: "https://youtube.com" },
              { icon: <FaXTwitter />, link: "https://x.com" },
              { icon: <FaEnvelope />, link: "mailto:info@riverstone.com" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E8F6F] text-white hover:bg-[#F39C12] transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {[
              "About Us",
              "Book Appointment",
              "Patient Services",
              "Health Consultation",
              "Our Doctors",
            ].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-[#F39C12] transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6">
            Medical Services
          </h4>
          <ul className="space-y-3">
            {[
              "General Surgery",
              "Cardiology",
              "Pediatrics",
              "Anesthesiology",
              "Mental Health",
            ].map((service, index) => (
              <li key={index}>
                <a href="#" className="hover:text-[#F39C12] transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* PROMISE */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6">Our Promise</h4>
          <p className="text-[#E6F4F9]/80 leading-relaxed">
            We are committed to delivering safe, ethical, and high-quality
            healthcare — guided by compassion, integrity, and medical
            excellence.
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#1E8F6F]/40 mt-16 pt-6 text-center text-sm text-[#E6F4F9]/70">
        © {new Date().getFullYear()} Riverstone Medical Center. All Rights
        Reserved.
      </div>
    </footer>
  );
}
