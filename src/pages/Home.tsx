import hom1 from "../assets/homePage/hom1.png";
import hom2 from "../assets/homePage/hom2.png";
import hom3 from "../assets/homePage/hom3.png";
import sys1 from "../assets/homePage/sys1.png";
import sys2 from "../assets/homePage/sys2.png";
import sys3 from "../assets/homePage/sys3.png";
import sys4 from "../assets/homePage/sys4.png";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [sys1, sys2, sys3, sys4];

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div className="text-gray-900">

      {/* HERO SECTION - Enhanced with gradient */}
      <section className="bg-gradient-to-br from-green-50 via-white to-slate-100 py-16 -mx-6 px-6">
        <div className="max-w-6xl mx-auto space-y-8 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            SilentSpark • Innovation in Auditory Verbal Therapy
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
            Auditory-Verbal Therapy<br />
            <span className="text-green-600">with AI-Driven Learning</span>
          </h1>

          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            An intelligent, adaptive system combining machine learning with auditory-verbal therapy to support 
            <span className="font-semibold"> Sinhala-speaking hearing-impaired individuals</span> through personalized 
            learning, emergency sound detection, and interactive training.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 flex-wrap">
            <a
              href="/domain"
              className="bg-green-600 text-white px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-700 transition font-semibold inline-block"
            >
              Explore Research
            </a>

            <a
              href="/documents"
              className="px-8 py-3.5 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-50 transition font-semibold inline-block"
            >
              Access Documents
            </a>

            <a
              href="https://silenspark.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition font-semibold inline-block"
            >
              Try the App
            </a>

            <a
              href="/contact"
              className="px-8 py-3.5 rounded-lg border border-gray-300 text-gray-900 hover:bg-gray-50 transition font-semibold inline-block"
            >
              Contact Us
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
        <section className="bg-gradient-to-r from-green-50 to-slate-100 p-10 rounded-2xl border-2 border-green-100 space-y-6">

          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold">Research Objective</h2>
          </div>

          <p className="text-gray-800 max-w-3xl mx-auto text-lg leading-relaxed text-center">
            Develop an <span className="font-semibold">intelligent, adaptive auditory-verbal therapy system</span> with 
            <span className="font-semibold"> AI-driven personalization</span> specifically designed for 
            <span className="font-semibold"> Sinhala-speaking hearing-impaired individuals</span>. The system integrates 
            emergency sound detection, speech feedback, and gamified learning modules.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <div className="text-3xl mb-2"></div>
              <p className="font-semibold">Adaptive Learning</p>
              <p className="text-sm text-gray-600">Personalized exercises</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2"></div>
              <p className="font-semibold">Emergency Detection</p>
              <p className="text-sm text-gray-600">Critical sound alerts</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2"></div>
              <p className="font-semibold">Gamified Learning</p>
              <p className="text-sm text-gray-600">Engaging modules</p>
            </div>
          </div>

        </section>

        {/* SYSTEM ARCHITECTURE */}
        <section className="space-y-12">

          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold">System Architecture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Modular AI-driven pipeline supporting adaptive learning and real-time feedback
            </p>
          </div>

          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-md p-2 sm:p-6 group max-w-4xl mx-auto">
            
            {/* The Image Container */}
            <div className="w-full relative aspect-video flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
              {slides.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                    i === currentSlide ? "opacity-100 relative z-10" : "opacity-0 absolute inset-0 z-0"
                  }`}
                />
              ))}
            </div>

            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/90 backdrop-blur border border-gray-200 text-gray-800 rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-20 focus:opacity-100 disabled:opacity-50"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/90 backdrop-blur border border-gray-200 text-gray-800 rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all opacity-0 group-hover:opacity-100 z-20 focus:opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            {/* Navigation Dots */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all shadow-sm ${
                    i === currentSlide ? "bg-green-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

          </div>

        </section>

        {/* NEXT STEPS CTA */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Explore Our Research?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Navigate through our comprehensive documentation, presentations, and project milestones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/domain" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Research Domain
            </a>
            <a href="/milestones" className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-3 rounded-lg font-semibold transition">
              View Milestones
            </a>
          </div>
        </section>

        <div className="h-6" />
      </div>
    </div>
  );
}