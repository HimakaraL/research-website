import { ExternalLink, Presentation } from "lucide-react";

// import thumbnails (use screenshots of first slide)
import slide1 from "../assets/slides/slide1.png";
import slide2 from "../assets/slides/slide2.png";
import slide3 from "../assets/slides/slide3.png";
import slide4 from "../assets/slides/slide4.png";

const slides = [
  {
    title: "Proposal Presentation",
    desc: "Initial idea validation and system proposal",
    image: slide1,
    link: "https://drive.google.com/file/d/1RfQ2KYx35pWir4_WNvG6GSHWWq5a7ZlQ/view?usp=sharing",
  },
  {
    title: "Progress Presentation 1",
    desc: "System design and early prototype",
    image: slide2,
    link: "https://docs.google.com/presentation/d/1JsC7vjE84SvRohy3oII1Op6sM57ut1gX/edit?usp=sharing&ouid=102335334961747806733&rtpof=true&sd=true",
  },
  {
    title: "Progress Presentation 2",
    desc: "ML models and implementation progress",
    image: slide3,
    link: "https://docs.google.com/presentation/d/1Dop6VXac-HrPBXqi5Fc5zh_91cfD97Fc/edit?usp=sharing&ouid=102335334961747806733&rtpof=true&sd=true",
  },
  {
    title: "Final Presentation",
    desc: "Complete system demonstration and results",
    image: slide4,
    link: "#",
  },
];

export default function Slides() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16 py-12">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Presentations & Milestones
          </h1>
          <p className="text-gray-600 mt-2">
            A journey through the project development and academic milestones
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

          {slides.map((slide, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                  <button
                    onClick={() => {
                      if (slide.link !== "#") {
                        window.open(slide.link, "_blank");
                      }
                    }}
                    className={`opacity-0 group-hover:opacity-100 px-5 py-2 rounded-xl flex items-center gap-2 shadow-lg transition ${
                      slide.link === "#"
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-white text-gray-900 hover:bg-green-600 hover:text-white"
                    }`}
                  >
                    {slide.link === "#" ? "Coming Soon" : "View Slides"}
                    {slide.link !== "#" && <ExternalLink size={16} />}
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-green-600 mb-2">
                  <Presentation size={18} />
                  <span className="text-sm font-medium">Presentation</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {slide.title}
                </h3>

                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {slide.desc}
                </p>

                {/* CTA */}
                <button
                  onClick={() => {
                    if (slide.link !== "#") {
                      window.open(slide.link, "_blank");
                    }
                  }}
                  className={`mt-4 text-sm font-medium flex items-center gap-1 ${
                    slide.link === "#"
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-green-600 hover:underline"
                  }`}
                >
                  {slide.link === "#" ? "Coming soon..." : "Click to view presentation slides"}
                  {slide.link !== "#" && <ExternalLink size={14} />}
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}