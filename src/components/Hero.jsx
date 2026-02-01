import image1 from "../assets/image/image1.jpg";
import image13 from "../assets/image/image13.gif";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* GIF BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={image13}
          alt="Background animation"
          className="w-full h-full object-cover"
        />

        {/* Brand-safe overlay */}
        <div className="absolute inset-0 bg-[#0A3D62]/85" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Better Care For <br className="hidden sm:block" />
            Your Health
          </h1>

          <p className="mt-6 max-w-md mx-auto lg:mx-0 text-white/90 leading-relaxed">
            The health, safety, and overall well-being of our patients and
            healthcare professionals are our highest priority. We maintain the
            highest standards of hygiene, infection control, and clinical
            excellence to ensure safe and compassionate care.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#F39C12] hover:bg-[#e08c0f] text-white px-6 py-3 rounded-lg font-semibold transition">
              View Our Services
            </button>

            <button className="flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0A3D62] transition">
              ☎ Emergency
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full h-[420px] sm:h-[500px] lg:h-[600px]"
        >
          <img
            src={image1}
            alt="Medical Team"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />

          {/* Floating cards – desktop only */}
          <div className="hidden lg:block">
            <DoctorCard
              name="Dr. Michael Carter"
              role="Dermatology Specialist"
              className="bottom-10 left-6"
            />
            <DoctorCard
              name="Dr. Emily Johnson"
              role="Emergency Medicine"
              className="bottom-28 right-6"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Floating doctor card */
function DoctorCard({ name, role, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.5 },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute ${className} bg-white shadow-xl rounded-xl px-4 py-3 w-64 flex items-center gap-4`}
    >
      <div className="w-10 h-10 rounded-full bg-[#E6F4F9] overflow-hidden">
        <img src={image1} alt="Doctor" className="w-full h-full object-cover" />
      </div>

      <div>
        <p className="font-semibold text-[#0A3D62] text-sm">{name}</p>
        <p className="text-xs text-[#2C2C2C]">{role}</p>
      </div>
    </motion.div>
  );
}
