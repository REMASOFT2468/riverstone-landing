// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Icons
import { FaStar } from "react-icons/fa";

// Images
import image10 from "../assets/image/image10.jpg";
import image11 from "../assets/image/image11.jpg";
import image12 from "../assets/image/image12.jpg";

const testimonials = [
  {
    name: "James Robertson",
    role: "Patient",
    image: image10,
    message:
      "The doctors were professional, attentive, and genuinely caring. From diagnosis to treatment, everything was handled with excellence.",
  },
  {
    name: "Linda Chen",
    role: "Patient",
    image: image11,
    message:
      "Exceptional healthcare service. Communication was clear, the staff was supportive, and the facilities were modern and reassuring.",
  },
  {
    name: "Michael Ade",
    role: "Patient",
    image: image12,
    message:
      "I felt safe and well cared for throughout my treatment. The medical team showed real professionalism and compassion.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#E6F4F9] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#1E8F6F] font-semibold tracking-widest mb-3">
            PATIENT TESTIMONIALS
          </p>
          <h2 className="text-4xl font-extrabold text-[#0A3D62] mb-6">
            Trusted by Our Patients
          </h2>
          <p className="text-[#2C2C2C] leading-relaxed">
            Real experiences from patients who have received care at Riverstone
            Hospital. Their stories reflect our commitment to quality,
            compassion, and clinical excellence.
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          spaceBetween={30}
          grabCursor
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E0E0E0] transition hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                {/* STARS */}
                <div className="flex gap-1 mb-4 text-[#F39C12]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* MESSAGE */}
                <p className="text-[#2C2C2C] leading-relaxed mb-6 flex-grow">
                  “{item.message}”
                </p>

                {/* CLIENT */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#1E8F6F]"
                  />
                  <div>
                    <h4 className="font-bold text-[#0A3D62]">{item.name}</h4>
                    <p className="text-sm text-[#1E8F6F]">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
