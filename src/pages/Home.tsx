import hom1 from "../assets/homePage/hom1.png";
import hom2 from "../assets/homePage/hom2.png";
import hom3 from "../assets/homePage/hom3.png";
import sys1 from "../assets/homePage/sys1.png";
import sys2 from "../assets/homePage/sys2.png";
import sys3 from "../assets/homePage/sys3.png";
import sys4 from "../assets/homePage/sys4.png";

export default function Home() {
  return (
    <div className="text-gray-900">

      {/* HERO SECTION - Enhanced with gradient */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-100 py-16 -mx-6 px-6">
        <div className="max-w-6xl mx-auto space-y-8 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Faculty of Computing Research • SLIIT • 25-26J-121
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
            Auditory-Verbal Therapy<br />
            <span className="text-blue-600">with AI-Driven Learning</span>
          </h1>

          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            An intelligent, adaptive system combining machine learning with auditory-verbal therapy to support 
            <span className="font-semibold"> Sinhala-speaking hearing-impaired individuals</span> through personalized 
            learning, emergency sound detection, and interactive training.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 flex-wrap">
            <a
              href="/domain"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition font-semibold inline-block"
            >
              📚 Explore Research
            </a>

            <a
              href="/documents"
              className="px-8 py-3.5 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition font-semibold inline-block"
            >
              📄 Access Documents
            </a>

            <a
              href="https://silenspark.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition font-semibold inline-block"
            >
              🚀 Try the App
            </a>

            <a
              href="/contact"
              className="px-8 py-3.5 rounded-lg border border-gray-300 text-gray-900 hover:bg-gray-50 transition font-semibold inline-block"
            >
              💬 Contact Us
            </a>
          </div>

        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 space-y-24 py-16">

        {/* RESEARCH BACKGROUND */}
        <section className="space-y-12">

          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold">Research Challenges & Context</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Key problems that motivated this research initiative
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
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
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

        {/* RESEARCH OBJECTIVE - Enhanced */}
        <section className="bg-gradient-to-r from-blue-50 to-slate-100 p-10 rounded-2xl border-2 border-blue-100 space-y-6">

          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold">🎯 Research Objective</h2>
          </div>

          <p className="text-gray-800 max-w-3xl mx-auto text-lg leading-relaxed text-center">
            Develop an <span className="font-semibold">intelligent, adaptive auditory-verbal therapy system</span> with 
            <span className="font-semibold"> AI-driven personalization</span> specifically designed for 
            <span className="font-semibold"> Sinhala-speaking hearing-impaired individuals</span>. The system integrates 
            emergency sound detection, speech feedback, and gamified learning modules.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎵</div>
              <p className="font-semibold">Adaptive Learning</p>
              <p className="text-sm text-gray-600">Personalized exercises</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔊</div>
              <p className="font-semibold">Emergency Detection</p>
              <p className="text-sm text-gray-600">Critical sound alerts</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎮</div>
              <p className="font-semibold">Gamified Learning</p>
              <p className="text-sm text-gray-600">Engaging modules</p>
            </div>
          </div>

        </section>

        {/* SYSTEM ARCHITECTURE */}
        <section className="space-y-12">

          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold">🏗️ System Architecture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Modular AI-driven pipeline supporting adaptive learning and real-time feedback
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

        {/* NEXT STEPS CTA */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Explore Our Research?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Navigate through our comprehensive documentation, presentations, and project milestones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/domain" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Research Domain &rarr;
            </a>
            <a href="/milestones" className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-3 rounded-lg font-semibold transition">
              View Milestones &rarr;
            </a>
          </div>
        </section>

        <div className="h-6" />
      </div>
    </div>
  );
}