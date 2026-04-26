import { useState } from "react";
import {
  FileText,
  FileCheck,
  ExternalLink,
  Search,
} from "lucide-react";

const docs = [
  {
    title: "Project Charter",
    desc: "Initial project scope, timeline, and planning document",
    link: "https://drive.google.com/file/d/19sAoqZMaaey8ob0dfv7duImZxIaz7ZHo/view?usp=sharing",
    icon: FileText,
    category: "Charter",
    status: "Completed",
    date: "Aug 2025",
  },
  {
    title: "Proposal Document",
    desc: "Detailed proposal and comprehensive requirement analysis",
    link: "https://drive.google.com/file/d/1q79kF20HU8pR0gTnWQUbcM-k_3q_tS07/view?usp=sharing",
    icon: FileText,
    category: "Proposal",
    status: "Completed",
    date: "Sep 2025",
  },
  {
    title: "Checklist 1",
    desc: "Project validation checklist - Completed (Google Sheets)",
    link: "https://docs.google.com/spreadsheets/d/1_cUf1JqcLmonGD1hTURRsSIR2rhLjAw3/edit?usp=sharing&ouid=102335334961747806733&rtpof=true&sd=true",
    icon: FileCheck,
    category: "Checklist",
    status: "Completed",
    date: "Jan 2026",
  },
  {
    title: "Checklist 2",
    desc: "Project submission checklist - Completed",
    link: "https://drive.google.com/file/d/1P4Aye7j8TH97H3fhOoHDETFKH2cGxa1L/view?usp=sharing",
    icon: FileCheck,
    category: "Checklist",
    status: "Completed",
    date: "Feb 2026",
  },
  {
    title: "Final Document - Part 1",
    desc: "Complete research documentation (Main) - Pending",
    link: "#",
    icon: FileCheck,
    category: "Final",
    status: "Pending",
    date: "Apr 2026",
  },
  {
    title: "Final Document - Part 2",
    desc: "Implementation details and system architecture - Pending",
    link: "#",
    icon: FileText,
    category: "Final",
    status: "Pending",
    date: "Apr 2026",
  },
  {
    title: "Final Document - Part 3",
    desc: "Test results and evaluation findings - Pending",
    link: "#",
    icon: FileText,
    category: "Final",
    status: "Pending",
    date: "Apr 2026",
  },
  {
    title: "Final Document - Part 4",
    desc: "Appendices and supplementary materials - Pending",
    link: "#",
    icon: FileText,
    category: "Final",
    status: "Pending",
    date: "Apr 2026",
  },
];

const categories = ["All", "Charter", "Proposal", "Checklist", "Final"];

export default function Documents() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDocs = docs.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-14 -mx-6 px-6 mb-16">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold">📄 Project Documents</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access all project files, reports, checklists, and comprehensive documentation for the AVT AI System research project.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-12 pb-16">

        {/* SEARCH BAR */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-gray-900 placeholder-gray-500 bg-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-gray-400 hover:text-gray-600 font-medium text-sm"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RESULTS COUNT */}
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold">{filteredDocs.length}</span> document{filteredDocs.length !== 1 ? "s" : ""}
        </div>

        {/* FILE GRID */}
        {filteredDocs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc, i) => {
              const Icon = doc.icon;
              const statusColor = doc.status === "Completed" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700";

              return (
                <div
                  key={i}
                  onClick={() => {
                    if (doc.link !== "#") {
                      window.open(doc.link, "_blank");
                    }
                  }}
                  className={`group ${doc.link !== "#" ? "cursor-pointer" : "cursor-not-allowed opacity-60"} bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                  {/* HEADER */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition">
                      <Icon className="text-blue-600" size={22} />
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColor}`}>
                      {doc.status}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition">
                    {doc.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {doc.desc}
                  </p>

                  {/* FOOTER */}
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{doc.date}</span>
                    {doc.link !== "#" ? (
                      <div className="flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                        Open <ExternalLink size={16} />
                      </div>
                    ) : (
                      <div className="text-xs text-gray-400 font-medium">Coming Soon</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No documents found matching your search.</p>
          </div>
        )}

      </div>
    </div>
  );
}