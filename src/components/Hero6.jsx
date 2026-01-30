// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Icons
import { FaStar } from "react-icons/fa";

// Images (replace with real client images)
import image3 from "../assets/image/image3.jpg";

const testimonials = [
  {
    name: "James Robertson",
    role: "Patient",
    image: image3,
    message:
      "The doctors were professional, attentive, and genuinely caring. From diagnosis to treatment, everything was handled with excellence.",
  },
  {
    name: "Linda Chen",
    role: "Client",
    image: image3,
    message:
      "Exceptional healthcare service. The communication was clear, the staff was friendly, and the medical facilities were top-notch.",
  },
  {
    name: "Michael Ade",
    role: "Patient",
    image: image3,
    message:
      "I felt safe and well cared for throughout my treatment. Highly recommend their medical team and services.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-widest mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Our Customers & Clients
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Hear what our patients and clients say about our medical services,
            care quality, and professional healthcare team.
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col">
                {/* STARS */}
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* MESSAGE */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  “{item.message}”
                </p>

                {/* CLIENT */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={image3}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-blue-600">{item.role}</p>
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
