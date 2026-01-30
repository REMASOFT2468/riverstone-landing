import { FaHeart, FaStethoscope, FaTooth, FaAmbulance } from "react-icons/fa";

const services = [
  { title: "Critical Care", icon: FaHeart },
  { title: "Internal Medicine", icon: FaStethoscope },
  { title: "Dental", icon: FaTooth },
  { title: "Emergency", icon: FaAmbulance },
];

export default function Hero1() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 overflow-hidden">
      <div className="flex items-center justify-center gap-6 mb-4 animate-fadeUp">
        <span className="h-[1px] w-24 md:w-48 bg-[#6c7cff]"></span>
        <span className="uppercase tracking-widest text-sm font-semibold text-[#6c7cff]">
          Our Services
        </span>
        <span className="h-[1px] w-24 md:w-48 bg-[#6c7cff]"></span>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#1d2b6b] mb-14 animate-fadeUp">
          常见专科
        </h2>

        {/* Services Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
                className="bg-[#6c7cff] text-white rounded-2xl p-8
                flex flex-col items-center justify-center
                shadow-lg transition-all duration-300
                hover:bg-[#5b6bff] hover:-translate-y-2
                animate-fadeUp"
              >
                <div className="bg-white text-[#6c7cff] p-4 rounded-full mb-4 transition-transform duration-300 hover:scale-110">
                  <Icon size={28} />
                </div>
                <p className="font-semibold text-center">{service.title}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#1d2b6b] leading-tight animate-fadeUp">
            Caring For The Health And <br />
            Well Being Of You And Your Family.
          </h3>

          <div className="animate-fadeUp" style={{ animationDelay: "200ms" }}>
            <p className="font-semibold text-gray-700 mb-4">
              We provide comprehensive medical services for the whole family,
              including routine health check-ups, disease diagnosis, and
              professional treatment for various injuries. The hospital is fully
              equipped with appropriate medications and treatment programs to
              support patients with major conditions such as HIV/AIDS and
              cancer, delivering standardized, safe, and continuous medical care
              focused on improving quality of life and safeguarding health.
            </p>

            <p className="text-gray-500 mb-8">
              我们为全家提供全面的医疗服务，
              涵盖常规健康体检、疾病诊断及各类损伤的专业治疗。
              医院配备完善的药品与治疗方案，
              为艾滋病（HIV/AIDS）、癌症等重大疾病患者
              提供规范、安全、持续的医疗支持，
              致力于改善生活质量，守护生命健康。
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#6c7cff] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5b6bff] transition">
                Find A Doctor
              </button>

              <button className="border border-[#6c7cff] text-[#6c7cff] px-6 py-3 rounded-lg font-medium hover:bg-[#6c7cff] hover:text-white transition">
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
