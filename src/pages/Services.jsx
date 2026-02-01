import {
  FaStethoscope,
  FaHeartbeat,
  FaBrain,
  FaXRay,
  FaProcedures,
  FaAmbulance,
} from "react-icons/fa";
import { FaRibbon, FaEye, FaVirus } from "react-icons/fa";

export default function Services() {
  return (
    <main className="w-full bg-[#F4F9FB] text-[#2C2C2C]">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#0A3D62] to-[#145DA0] text-white py-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our Medical Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100">
            Comprehensive healthcare services delivered with precision,
            compassion, and advanced medical expertise.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6">
            Comprehensive Care Across Every Specialty
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Riverstone Hospital provides accurate diagnosis, effective
            treatment, and continuous patient support across a wide range of
            medical specialties — ensuring personalized, high-quality care at
            every stage.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard
            icon={<FaStethoscope />}
            title="General Medicine"
            desc="Diagnosis, treatment, and long-term management of common and complex medical conditions using evidence-based care."
          />

          <ServiceCard
            icon={<FaHeartbeat />}
            title="Cardiology"
            desc="Prevention, diagnosis, monitoring, and treatment of heart and cardiovascular conditions."
          />

          <ServiceCard
            icon={<FaBrain />}
            title="Neurology"
            desc="Advanced evaluation and treatment of disorders affecting the brain, spine, and nervous system."
          />

          <ServiceCard
            icon={<FaXRay />}
            title="Diagnostic Imaging"
            desc="High-precision imaging services including X-ray, ultrasound, and advanced diagnostic scans."
          />

          <ServiceCard
            icon={<FaProcedures />}
            title="Surgical Services"
            desc="Safe and effective surgical procedures performed by experienced surgeons using modern operating facilities."
          />

          <ServiceCard
            icon={<FaAmbulance />}
            title="Emergency & Trauma Care"
            desc="24/7 emergency services with rapid response teams, intensive care support, and life-saving equipment."
          />

          <ServiceCard
            icon={<FaVirus />}
            title="HIV / AIDS Treatment & Care"
            desc="Confidential testing, diagnosis, antiretroviral therapy, monitoring, and long-term support delivered with dignity."
          />

          <ServiceCard
            icon={<FaRibbon />}
            title="Cancer Care (Oncology)"
            desc="Comprehensive cancer screening, diagnosis, treatment planning, and supportive oncology care."
          />

          <ServiceCard
            icon={<FaEye />}
            title="Ophthalmology & Vision Care"
            desc="Diagnosis, treatment, and preventive care for eye conditions and vision health."
          />
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Why Choose Riverstone Hospital
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our healthcare services are guided by clinical excellence, ethical
              practice, and an unwavering commitment to patient safety.
            </p>

            <ul className="space-y-4 text-slate-600">
              <li>✔ Highly qualified and certified specialists</li>
              <li>✔ Advanced diagnostic and treatment facilities</li>
              <li>✔ Patient-centered, ethical medical care</li>
              <li>✔ Strict safety and hygiene standards</li>
            </ul>
          </div>

          <div className="bg-[#E6F4F9] rounded-2xl p-12">
            <h4 className="font-semibold mb-4 text-[#0A3D62]">
              Our Commitment
            </h4>
            <p className="text-slate-600 leading-relaxed">
              We continuously invest in medical technology, professional
              development, and quality assurance systems to deliver reliable,
              efficient, and compassionate healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0A3D62] text-white py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6">
            Need Expert Medical Care?
          </h2>
          <p className="text-blue-100 mb-10">
            Our medical team is ready to guide you to the right service and
            specialist for your health needs.
          </p>
          <button className="bg-[#F39C12] hover:bg-[#d8890b] text-white px-10 py-4 rounded-xl font-semibold transition">
            Book an Appointment
          </button>
        </div>
      </section>
    </main>
  );
}

/* ================= SERVICE CARD ================= */

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
      <div className="w-14 h-14 rounded-full bg-[#E6F4F9] text-[#0A3D62] flex items-center justify-center text-2xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
