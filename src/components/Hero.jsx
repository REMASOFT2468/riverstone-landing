import image1 from "../assets/image/image1.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-blue-500 to-blue-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight">
            Better care for <br className="hidden sm:block" /> your health
          </h1>

          <p className="mt-6 text-gray-700 max-w-md mx-auto lg:mx-0">
            患者及医护团队的健康与福祉始终是我们的首要任务，
            因此我们严格遵循最高标准的清洁与消毒规范。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              View our services
            </button>

            <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
              ☎ Emergency
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full flex justify-center"
        >
          <img
            src={image1}
            alt="Doctors"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />

          {/* Floating cards – desktop only */}
          <div className="hidden lg:block">
            <DoctorCard
              name="Dr. Zhāng Wěi"
              role="Dermatology"
              className="bottom-10 left-0"
            />

            <DoctorCard
              name="Dr. Lǐ Xīn-Yí"
              role="Emergency medicine"
              className="bottom-28 right-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Floating card component */
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
      <div className="w-10 h-10 rounded-full bg-blue-200 overflow-hidden">
        <img src={image1} alt="Doctor" className="w-full h-full object-cover" />
      </div>

      <div>
        <p className="font-semibold text-blue-900 text-sm">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </motion.div>
  );
}
