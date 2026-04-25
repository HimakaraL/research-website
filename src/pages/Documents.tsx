import {
  FileText,
  FileCheck,
  Folder,
  ExternalLink,
} from "lucide-react";

const docs = [
  {
    title: "Project Charter",
    desc: "Initial project scope and planning document",
    link: "https://your-link.com/charter",
    icon: FileText,
  },
  {
    title: "Proposal Document",
    desc: "Detailed proposal and requirement analysis",
    link: "https://your-link.com/proposal",
    icon: FileText,
  },
  {
    title: "Progress Reports",
    desc: "All progress presentations and reports",
    link: "https://your-link.com/progress",
    icon: Folder,
  },
  {
    title: "Final Report",
    desc: "Complete research and implementation (PDF)",
    link: "https://your-link.com/final",
    icon: FileCheck,
  },
  {
    title: "Checklists",
    desc: "Project validation and submission checklists",
    link: "https://your-link.com/checklists",
    icon: FileText,
  },
];

export default function Documents() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-12">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Project Documents
          </h1>
          <p className="text-gray-600 mt-2">
            Access all important project files and reports
          </p>
        </div>

        {/* FILE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {docs.map((doc, i) => {
            const Icon = doc.icon;

            return (
              <div
                key={i}
                onClick={() => window.open(doc.link, "_blank")}
                className="cursor-pointer bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={22} />
                </div>

                {/* CONTENT */}
                <h3 className="font-semibold text-lg text-gray-900">
                  {doc.title}
                </h3>

                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {doc.desc}
                </p>

                {/* ACTION */}
                <div className="flex items-center gap-2 text-blue-600 text-sm mt-4 font-medium">
                  Open Document <ExternalLink size={16} />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}