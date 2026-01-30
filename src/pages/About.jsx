import { FaHeartbeat, FaUserMd, FaHospital, FaAmbulance } from "react-icons/fa";

export default function About() {
  return (
    <main className="w-full bg-slate-50 text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Riverstone Hospital
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100">
            Riverstone Hospital is built on one simple belief — healthcare
            should be compassionate, precise, and accessible to everyone.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Riverstone Hospital is a modern healthcare institution delivering
              world-class medical services across diagnostics, treatment,
              emergency care, and preventive medicine.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We combine advanced medical technology with highly trained
              professionals to ensure every patient receives safe, effective,
              and personalized care — from first consultation to full recovery.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-10">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <FaHospital className="text-blue-700 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Modern Facilities</h4>
                  <p className="text-slate-600 text-sm">
                    Fully equipped diagnostic and treatment units.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <FaUserMd className="text-blue-700 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Expert Medical Team</h4>
                  <p className="text-slate-600 text-sm">
                    Certified doctors, nurses, and specialists.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <FaHeartbeat className="text-blue-700 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Patient-Centered Care</h4>
                  <p className="text-slate-600 text-sm">
                    Compassion, dignity, and safety come first.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border-l-4 border-blue-700 pl-6">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To deliver high-quality, ethical, and affordable healthcare
              services through innovation, excellence, and compassionate patient
              engagement.
            </p>
          </div>

          <div className="border-l-4 border-blue-700 pl-6">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be a trusted healthcare leader recognized for clinical
              excellence, advanced technology, and outstanding patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EMERGENCY CARE ================= */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              24/7 Emergency & Critical Care
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              Our emergency department operates round-the-clock with rapid
              response teams, advanced life-support equipment, and dedicated
              trauma specialists to handle critical medical situations.
            </p>
            <div className="flex items-center gap-4">
              <FaAmbulance className="text-4xl text-blue-300" />
              <span className="font-semibold">
                Emergency Response • Intensive Care • Immediate Treatment
              </span>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-10 backdrop-blur">
            <h4 className="font-semibold mb-4">
              Why Patients Trust Riverstone
            </h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li>✔ Fast diagnosis and treatment</li>
              <li>✔ Advanced medical equipment</li>
              <li>✔ Strict safety and hygiene standards</li>
              <li>✔ Compassionate medical professionals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Your Health Deserves Expert Care
          </h2>
          <p className="text-slate-600 mb-8">
            At Riverstone Hospital, your well-being is our priority. Book an
            appointment today and experience healthcare built on trust,
            innovation, and compassion.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition">
            Book an Appointment
          </button>
        </div>
      </section>
    </main>
  );
}
