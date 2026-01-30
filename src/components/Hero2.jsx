import image2 from "../assets/image/image2.png";
import { FaCalendarAlt } from "react-icons/fa";

export default function HeroHealthcare() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — DOCTOR IMAGE */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Circular background */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[460px] lg:h-[460px] bg-blue-100 rounded-full left-1/2 -translate-x-1/2 lg:left-40 top-12 -z-10"></div>

          <img
            src={image2}
            alt="Chinese Female Doctor"
            className="w-64 sm:w-72 md:w-80 lg:w-[360px] object-cover rounded-t-[40vh] lg:rounded-t-[80vh] shadow-xl"
          />
        </div>

        {/* RIGHT — TEXT + OPERATING HOURS */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-snug">
            A great system application for <br className="hidden sm:block" />
            hospital center & health care
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0">
            Our hospital officially opened its doors to the public with a
            commitment to delivering safe, reliable, and patient-centered
            medical care. Patients can easily connect with us online by
            searching for the hospital name, booking appointments, chatting with
            qualified doctors, and receiving professional guidance before
            visiting the hospital.
          </p>

          {/* Operating Hours Card */}
          <div className="mt-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-white w-full max-w-md mx-auto lg:mx-0 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Operating Hours
            </h3>

            <ul className="space-y-4 text-sm">
              {[
                ["Monday", "8:00 am - 6:00 pm"],
                ["Tuesday", "7:00 am - 5:00 pm"],
                ["Wednesday", "9:00 am - 7:00 pm"],
                ["Thursday", "8:00 am - 6:00 pm"],
                ["Friday", "8:30 am - 6:00 pm"],
                ["Saturday", "9:30 am - 5:00 pm"],
                ["Sunday", "Closed"],
              ].map(([day, time]) => (
                <li
                  key={day}
                  className="flex items-center justify-between border-b border-blue-300/40 pb-2"
                >
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-white/80 text-sm" />
                    <span>{day}</span>
                  </div>
                  <span className="font-medium">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
