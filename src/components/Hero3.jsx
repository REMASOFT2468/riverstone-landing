import { FaCog } from "react-icons/fa";
import image1 from "../assets/image/image1.jpg";

export default function BookAppointment() {
  return (
    <section className="w-full py-20 bg-[#FFFFFF]">
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
            {/* Trust overlay */}
            <div className="absolute inset-0 bg-[#0A3D62]/85" />

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

                <p className="text-sm leading-relaxed opacity-95">
                  Riverstone Hospital provides 24/7 emergency medical care for
                  urgent and life-threatening conditions. Our emergency unit is
                  staffed by experienced physicians, nurses, and trauma
                  specialists, supported by advanced diagnostic and life-saving
                  equipment.
                  <br />
                  <br />
                  From severe injuries to sudden medical emergencies, our team
                  responds rapidly to assess, stabilize, and treat patients with
                  precision, safety, and compassion.
                </p>
              </div>

              <button className="mt-8 w-full py-3 rounded-lg bg-[#F39C12] hover:bg-[#e08c0f] transition font-semibold">
                Contact Emergency Unit
              </button>
            </div>
          </div>

          {/* ================= APPOINTMENT INFO ================= */}
          <div className="lg:col-span-2 bg-[#E6F4F9] rounded-2xl p-10 md:p-14 border border-[#E0E0E0] flex flex-col justify-center">
            {/* Title */}
            <div className="mb-8">
              <span className="inline-block px-6 py-2 rounded-full border border-[#1E8F6F] text-[#0A3D62] text-2xl font-semibold bg-white">
                Appointments at Riverstone
              </span>
            </div>

            {/* Write-up */}
            <div className="space-y-6 text-[#2C2C2C] leading-relaxed">
              <p>
                At Riverstone Hospital, we believe quality healthcare begins
                with easy access to the right medical professionals. Our
                appointment system connects patients with experienced doctors
                across a wide range of specialties, ensuring timely
                consultations and personalized treatment plans.
              </p>

              <p>
                Whether you require routine checkups, specialist care,
                diagnostic services, or follow-up consultations, our clinical
                team is committed to delivering attentive, patient-centered care
                in a professional and comfortable environment.
              </p>

              <p>
                Patients may schedule appointments by contacting our support
                team or visiting the hospital directly. Our staff will guide you
                through the process and ensure your visit is handled efficiently
                and with care.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="px-10 py-4 rounded-xl bg-[#0A3D62] text-white hover:bg-[#082f4f] transition font-semibold">
                Learn How to Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
