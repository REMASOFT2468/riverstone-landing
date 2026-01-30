import { FaCog } from "react-icons/fa";
import image1 from "../assets/image/image1.png";

export default function BookAppointment() {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {/* ================= EMERGENCY CASES ================= */}
          <div
            className="relative rounded-2xl overflow-hidden text-white min-h-[380px]"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/80" />

            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <FaCog className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Emergency Cases</h3>
                    <p className="text-sm opacity-90">6240-123-4560</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed opacity-90">
                  Riverstone Hospital provides 24/7 emergency medical care for
                  urgent and life-threatening conditions. Our emergency unit is
                  staffed by experienced physicians, nurses, and trauma
                  specialists, supported by advanced diagnostic and life-saving
                  equipment.
                  <br />
                  <br />
                  From severe injuries and sudden illnesses to critical medical
                  emergencies, our team responds swiftly to assess, stabilize,
                  and treat patients with precision and compassion. Immediate
                  care, strict safety protocols, and rapid response are at the
                  core of our emergency services.
                </p>
              </div>

              <button className="mt-8 w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium">
                Contact Emergency Unit
              </button>
            </div>
          </div>

          {/* ================= APPOINTMENT INFO WRITE-UP ================= */}
          <div className="lg:col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-10 md:p-14 text-white border-2 border-white/40 flex flex-col justify-center">
            {/* Title */}
            <div className="mb-8">
              <span className="inline-block px-6 py-2 rounded-full border border-white/60 text-2xl font-semibold">
                Appointments at Riverstone
              </span>
            </div>

            {/* Write-up */}
            <div className="space-y-6 text-blue-100 leading-relaxed">
              <p>
                At Riverstone Hospital, we believe quality healthcare begins
                with easy access to the right medical professionals. Our
                appointment system is designed to connect patients with
                experienced doctors across a wide range of specialties, ensuring
                timely consultations and personalized treatment plans.
              </p>

              <p>
                Whether you require routine medical checkups, specialist care,
                diagnostic services, or follow-up consultations, our clinical
                team is committed to providing attentive, patient-focused care
                in a comfortable and professional environment.
              </p>

              <p>
                Patients can schedule appointments by contacting our support
                team or visiting the hospital directly. Our staff will guide you
                through the process, help you choose the appropriate specialist,
                and ensure your visit is handled efficiently and with care.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="px-10 py-4 rounded-xl bg-blue-900 hover:bg-blue-950 transition font-semibold">
                Learn How to Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
