import { FaHeartbeat, FaUserMd, FaHospital, FaAmbulance } from "react-icons/fa";

export default function About() {
  return (
    <main className="w-full bg-[#F4F9FB] text-[#1F2933]">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#0A3D62] to-[#145DA0] text-white py-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About Riverstone Hospital
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100">
            Compassionate healthcare, advanced medicine, and trusted medical
            professionals — all focused on one thing: your well-being.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* TEXT */}
          <div>
            <span className="text-[#1E8F6F] font-semibold tracking-widest text-sm">
              WHO WE ARE
            </span>
            <h2 className="text-3xl font-extrabold mt-4 mb-6">
              A Trusted Center for Modern Healthcare
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Riverstone Hospital is a modern medical institution dedicated to
              delivering world-class healthcare services across diagnostics,
              treatment, emergency care, and preventive medicine.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By combining advanced medical technology with highly skilled
              professionals, we ensure every patient receives safe, effective,
              and personalized care — from first consultation to full recovery.
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <ul className="space-y-8">
              <li className="flex gap-5">
                <FaHospital className="text-[#145DA0] text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">
                    State-of-the-Art Facilities
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Fully equipped diagnostic, surgical, and treatment units.
                  </p>
                </div>
              </li>

              <li className="flex gap-5">
                <FaUserMd className="text-[#145DA0] text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">
                    Expert Medical Professionals
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Board-certified doctors, nurses, and specialists.
                  </p>
                </div>
              </li>

              <li className="flex gap-5">
                <FaHeartbeat className="text-[#145DA0] text-3xl mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">
                    Patient-First Approach
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Compassion, safety, dignity, and respect at every stage.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border-l-4 border-[#1E8F6F] pl-6">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To deliver ethical, accessible, and high-quality healthcare
              services through innovation, medical excellence, and compassionate
              patient care.
            </p>
          </div>

          <div className="border-l-4 border-[#1E8F6F] pl-6">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be a leading healthcare institution recognized for advanced
              technology, clinical excellence, and outstanding patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EMERGENCY ================= */}
      <section className="bg-[#0A3D62] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              24/7 Emergency & Critical Care
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              Our emergency department operates around the clock with rapid
              response teams, advanced life-support systems, and experienced
              trauma specialists ready to act when every second counts.
            </p>

            <div className="flex items-center gap-4 font-semibold">
              <FaAmbulance className="text-4xl text-[#F39C12]" />
              Emergency Response • Intensive Care • Immediate Treatment
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-12">
            <h4 className="font-semibold mb-6 text-lg">
              Why Patients Trust Riverstone
            </h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li>✔ Rapid diagnosis and treatment</li>
              <li>✔ Advanced medical equipment</li>
              <li>✔ Strict safety and hygiene protocols</li>
              <li>✔ Compassionate medical professionals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6">
            Your Health Deserves Expert Care
          </h2>
          <p className="text-slate-600 mb-10">
            Choose Riverstone Hospital for trusted medical expertise,
            compassionate care, and modern healthcare solutions.
          </p>
          <button className="bg-[#1E8F6F] hover:bg-[#157A5C] text-white px-10 py-4 rounded-xl font-semibold transition">
            Book an Appointment
          </button>
        </div>
      </section>
    </main>
  );
}
