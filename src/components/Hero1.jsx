import { FaHeart, FaStethoscope, FaTooth, FaAmbulance } from "react-icons/fa";

const services = [
  { title: "Critical Care", icon: FaHeart },
  { title: "Internal Medicine", icon: FaStethoscope },
  { title: "Dental", icon: FaTooth },
  { title: "Emergency", icon: FaAmbulance },
];

export default function Hero1() {
  return (
    <section className="bg-[#E6F4F9] py-20 overflow-hidden">
      {/* Section Label */}
      <div className="flex items-center justify-center gap-6 mb-6 animate-fadeUp">
        <span className="h-px w-24 md:w-48 bg-[#1E8F6F]" />
        <span className="uppercase tracking-widest text-sm font-semibold text-[#1E8F6F]">
          Our Services
        </span>
        <span className="h-px w-24 md:w-48 bg-[#1E8F6F]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0A3D62] mb-14 animate-fadeUp">
          Common Medical Specialties
        </h2>

        {/* Services Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
                className="bg-white border border-[#E0E0E0] rounded-2xl p-8
                flex flex-col items-center justify-center
                shadow-sm transition-all duration-300
                hover:-translate-y-2 hover:shadow-lg
                animate-fadeUp"
              >
                <div className="bg-[#1E8F6F] text-white p-4 rounded-full mb-4">
                  <Icon size={28} />
                </div>
                <p className="font-semibold text-[#2C2C2C] text-center">
                  {service.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0A3D62] leading-tight animate-fadeUp">
            Caring For The Health And <br />
            Well-Being Of You And Your Family.
          </h3>

          <div className="animate-fadeUp" style={{ animationDelay: "200ms" }}>
            <p className="text-[#2C2C2C] mb-6 leading-relaxed">
              We provide comprehensive medical services for the whole family,
              including routine health check-ups, disease diagnosis, and
              professional treatment for various injuries. Our hospital is fully
              equipped with approved medications and evidence-based treatment
              programs to support patients with major conditions such as
              HIV/AIDS and cancer, ensuring safe, continuous, and compassionate
              care.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#F39C12] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e08c0f] transition">
                Find A Doctor
              </button>

              <button className="border border-[#0A3D62] text-[#0A3D62] px-6 py-3 rounded-lg font-semibold hover:bg-[#0A3D62] hover:text-white transition">
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
