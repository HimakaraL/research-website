import hom1 from "../assets/homePage/hom1.png";
import hom2 from "../assets/homePage/hom2.png";
import hom3 from "../assets/homePage/hom3.png";
import sys1 from "../assets/homePage/sys1.png";
import sys2 from "../assets/homePage/sys2.png";
import sys3 from "../assets/homePage/sys3.png";
import sys4 from "../assets/homePage/sys4.png";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 text-gray-900">

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 space-y-28 py-12">

        {/* HERO (more powerful + structured) */}
        <section className="text-center space-y-8 pt-10">

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
            AI-Powered Assistive Healthcare System
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Smarter Auditory Learning for
            <span className="text-blue-600"> Hearing-Impaired Children</span>
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            An AI-driven platform that enhances auditory-verbal therapy,
            emergency sound recognition, and Sinhala-based learning through
            adaptive machine learning systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition"
              onClick={() => window.open("https://silenspark.online", "_blank")}
            >
              Explore System
            </button>

            <button className="px-8 py-3 rounded-2xl border border-gray-300 hover:bg-white transition">
              View Architecture
            </button>
          </div>

        </section>

        {/* PROBLEM (story style) */}
        <section className="space-y-12">

          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Why This Project Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-world challenges faced by hearing-impaired communities
              that inspired this solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Global Accessibility Gap",
                desc: "Over 430M people suffer from hearing loss, with limited access to personalized therapy.",
                image: hom1,
              },
              {
                title: "Limited Local Solutions",
                desc: "Sri Lanka lacks Sinhala-based auditory-verbal therapy platforms.",
                image: hom2,
              },
              {
                title: "Emergency Awareness",
                desc: "Hearing-impaired users struggle to recognize critical emergency sounds.",
                image: hom3,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition overflow-hidden"
              >
                <div className="h-48 bg-slate-50 flex items-center justify-center p-6">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full object-contain hover:scale-105 transition"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* SOLUTION (more structured, less paragraph heavy) */}
        <section className="text-center space-y-6">

          <h2 className="text-3xl sm:text-4xl font-bold">
            💡 Proposed Solution
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            A unified AI system combining auditory training, pronunciation coaching,
            emergency detection, and gamified learning — built specifically for
            Sinhala-speaking hearing-impaired users.
          </p>

        </section>

        {/* SYSTEM (more “architecture feel”) */}
        <section className="space-y-10">

          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">System Architecture</h2>
            <p className="text-gray-600">
              Modular AI-driven pipeline supporting adaptive learning
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {[sys1, sys2, sys3, sys4].map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition p-6"
              >
                <img
                  src={img}
                  className="w-full h-72 object-contain"
                  alt=""
                />
              </div>
            ))}

          </div>

        </section>

        <div className="h-10" />
      </div>
    </div>
  );
}