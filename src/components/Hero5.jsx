// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Images
import image3 from "../assets/image/image3.jpg";
import image9 from "../assets/image/image9.jpg";
import image6 from "../assets/image/image6.jpg";

const doctors = [
  {
    name: "Dr. Amelia Zhang",
    role: "Consultant Cardiologist",
    image: image3,
  },
  {
    name: "Dr. Michael Chen",
    role: "Neurology Specialist",
    image: image6,
  },
  {
    name: "Dr. Sophia Liu",
    role: "Pediatric Medicine",
    image: image9,
  },
];

export default function OurTeam() {
  return (
    <section className="w-full bg-[#E6F4F9] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#1E8F6F] font-semibold tracking-widest mb-3">
            OUR MEDICAL TEAM
          </p>
          <h2 className="text-4xl font-extrabold text-[#0A3D62] mb-6">
            Meet Our Dedicated Doctors
          </h2>
          <p className="text-[#2C2C2C] leading-relaxed">
            Our clinical team is made up of highly trained, experienced, and
            compassionate medical professionals dedicated to providing safe,
            evidence-based, and patient-centered care. Each doctor brings
            specialized expertise and a commitment to excellence that defines
            Riverstone Hospital.
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#FFFFFF] rounded-2xl border border-[#E0E0E0] overflow-hidden transition hover:-translate-y-2 hover:shadow-xl">
                {/* IMAGE */}
                <div className="h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* INFO */}
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-[#0A3D62]">
                    {doctor.name}
                  </h3>
                  <p className="text-[#1E8F6F] font-medium mt-1">
                    {doctor.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
