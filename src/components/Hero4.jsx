import image1 from "../assets/image/image1.png"; // CEO image
import image2 from "../assets/image/image2.png"; // New section image

export default function AboutUs() {
  return (
    <>
      {/* FIRST SECTION: About Us */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-blue-600 font-semibold tracking-widest text-sm">
                ABOUT US
              </span>
              <span className="w-16 h-[2px] bg-blue-600"></span>
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              We Specialize in Medical Diagnostics
            </h2>

            <p className="text-gray-700 leading-relaxed mb-10 max-w-xl">
              At [RIVERSTONE], our mission is to provide compassionate,
              comprehensive, and high-quality healthcare for every member of
              your family. Established with a vision to combine cutting-edge
              medical technology with patient-centered care, we are committed to
              improving health outcomes and enhancing the well-being of our
              community. Our team of experienced doctors, nurses, and
              specialists is dedicated to delivering exceptional care across a
              full spectrum of medical services, including preventive health
              screenings, chronic disease management, surgical procedures, and
              emergency care. We pride ourselves on creating a welcoming
              environment where patients feel supported, informed, and empowered
              throughout their healthcare journey.
            </p>

            <div className="flex items-center gap-4">
              <img
                src={image1}
                alt="CEO"
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
              />
              <div>
                <p className="font-bold text-gray-900">Ryan Reynolds</p>
                <p className="text-sm text-blue-600 uppercase">CEO Dunmedic</p>
              </div>
            </div>
          </div>

          {/* RIGHT PROGRESS BARS */}
          <div className="space-y-6">
            {[
              { label: "Standards of Treatment", value: 93 },
              { label: "Quality of Care Services", value: 95 },
              { label: "Well Communication", value: 95 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">
                    {item.label}
                  </span>
                  <span className="font-semibold text-blue-600">
                    {item.value}%
                  </span>
                </div>

                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND SECTION: Our Services */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-24">
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
              <span className="text-blue-600 font-semibold tracking-widest text-sm">
                OUR SERVICES
              </span>
              <span className="w-16 h-[2px] bg-blue-600"></span>
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Comprehensive Medical Solutions for Your Family
            </h2>

            <p className="text-gray-700 leading-relaxed mb-10 max-w-xl">
              From routine check-ups to advanced diagnostics, we offer a wide
              range of medical services tailored to meet the unique needs of
              each patient. Our dedicated team of healthcare professionals
              ensures precise, timely, and compassionate care, empowering you
              and your loved ones to live healthier, happier lives. Experience a
              seamless blend of modern technology and personalized care in every
              visit.
            </p>

            <ul className="space-y-4 text-gray-700 list-disc list-inside">
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
