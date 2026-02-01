import image7 from "../assets/image/image7.jpg"; // CEO image
import image2 from "../assets/image/image2.jpg"; // Services image

export default function AboutUs() {
  return (
    <>
      {/* ================= ABOUT US ================= */}
      <section className="w-full bg-[#FFFFFF] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#1E8F6F] font-semibold tracking-widest text-sm">
                ABOUT US
              </span>
              <span className="w-16 h-px bg-[#1E8F6F]" />
            </div>

            <h2 className="text-4xl font-extrabold text-[#0A3D62] leading-tight mb-6">
              We Specialize in Medical Diagnostics
            </h2>

            <p className="text-[#2C2C2C] leading-relaxed mb-10 max-w-xl">
              At Riverstone Hospital, our mission is to provide compassionate,
              comprehensive, and high-quality healthcare for every member of
              your family. We combine advanced medical technology with
              patient-centered care to improve health outcomes and strengthen
              community well-being.
              <br />
              <br />
              Our team of experienced physicians, nurses, and specialists
              delivers exceptional care across preventive services, chronic
              disease management, surgical procedures, and emergency medicine —
              always with professionalism, transparency, and respect.
            </p>

            <div className="flex items-center gap-4">
              <img
                src={image7}
                alt="CEO"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#1E8F6F]"
              />
              <div>
                <p className="font-bold text-[#0A3D62]">Ryan Reynolds</p>
                <p className="text-sm text-[#1E8F6F] uppercase">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PROGRESS BARS */}
          <div className="space-y-6">
            {[
              { label: "Standards of Treatment", value: 93 },
              { label: "Quality of Care Services", value: 95 },
              { label: "Clear Patient Communication", value: 95 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[#2C2C2C]">
                    {item.label}
                  </span>
                  <span className="font-semibold text-[#0A3D62]">
                    {item.value}%
                  </span>
                </div>

                <div className="w-full h-3 bg-[#E0E0E0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1E8F6F] rounded-full"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="w-full bg-[#E6F4F9] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src={image2}
              alt="Our Services"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#1E8F6F] font-semibold tracking-widest text-sm">
                OUR SERVICES
              </span>
              <span className="w-16 h-px bg-[#1E8F6F]" />
            </div>

            <h2 className="text-4xl font-extrabold text-[#0A3D62] leading-tight mb-6">
              Comprehensive Medical Solutions for Your Family
            </h2>

            <p className="text-[#2C2C2C] leading-relaxed mb-10 max-w-xl">
              From routine health screenings to advanced diagnostics and
              specialized treatments, Riverstone Hospital delivers a full
              spectrum of medical services tailored to individual patient needs.
              Our approach blends modern technology with compassionate,
              personalized care.
            </p>

            <ul className="space-y-4 text-[#2C2C2C] list-disc list-inside">
              <li>Preventive Health Screenings</li>
              <li>Chronic Disease Management</li>
              <li>Emergency & Trauma Care</li>
              <li>Surgical Procedures</li>
              <li>Pediatric & Family Care</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
