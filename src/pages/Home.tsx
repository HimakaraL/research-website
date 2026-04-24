export default function Home() {
  return (
    <div className="space-y-12 px-4 sm:px-0">

      {/* HERO SECTION */}
      <section className="text-center space-y-5 pt-6 sm:pt-10">

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Smart First Aid IoT System
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          A real-time IoT-based system that monitors medical supplies,
          detects conditions, and improves emergency response efficiency.
        </p>

        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 sm:px-8 py-2.5 rounded-xl shadow-md
        hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition">
          Explore Project
        </button>

      </section>

      {/* FEATURE CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

        {[
          {
            title: "Real-Time Monitoring",
            desc: "Live IoT sensor tracking",
          },
          {
            title: "Smart Alerts",
            desc: "Instant emergency notifications",
          },
          {
            title: "Analytics Dashboard",
            desc: "Visual insights & trends",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200"
          >

            <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-800">
              {item.title}
            </h3>

            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </section>

    </div>
  );
}