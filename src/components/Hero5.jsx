// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import image ONCE
import image3 from "../assets/image/image3.jpg";

const doctors = [
  {
    name: "Dr. Amelia Zhang",
    role: "Cardiologist",
    image: image3,
  },
  {
    name: "Dr. Michael Chen",
    role: "Neurologist",
    image: image3,
  },
  {
    name: "Dr. Sophia Liu",
    role: "Pediatrician",
    image: image3,
  },
  {
    name: "Dr. Daniel Wong",
    role: "Orthopedic Surgeon",
    image: image3,
  },
];

export default function OurTeam() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-widest mb-3">
            OUR TEAM
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Our Dedicated Doctors Team
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At [RIVERSTONE], our strength lies in our people. We have built a
            team of highly skilled, compassionate, and dedicated healthcare
            professionals who are committed to delivering exceptional care at
            every step. From experienced doctors and nurses to specialized
            technicians and support staff, each member of our team brings
            expertise, empathy, and integrity to their work. Meet the
            professionals who make Riverstone a trusted name in medical
            excellence.
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
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                {/* IMAGE */}
                <div className="h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* INFO */}
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{doctor.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
