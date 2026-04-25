import { Mail, Phone, Globe, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us anytime.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 space-y-5">

              <h2 className="text-xl font-semibold">Get in Touch</h2>

              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">
                    yourproject@email.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <div className="bg-green-50 p-3 rounded-xl">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900">
                    +94 7X XXX XXXX
                  </p>
                </div>
              </div>

              {/* GITHUB */}
              <div
                onClick={() => window.open("https://github.com/your-repo", "_blank")}
                className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition"
              >
                <div className="bg-gray-100 p-3 rounded-xl">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="font-medium text-gray-900">
                    View Repository
                  </p>
                </div>
              </div>

            </div>

            {/* OPTIONAL SUPERVISOR */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold mb-2">
                Supervisor
              </h2>
              <p className="text-gray-600 text-sm">
                Dr. XYZ — Senior Lecturer, SLIIT
              </p>
              <p className="text-gray-500 text-sm">
                supervisor@email.com
              </p>
            </div>

          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">

            <h2 className="text-xl font-semibold mb-4">
              Send a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition"
              >
                Send Message <Send size={16} />
              </button>

            </form>
          </div>

        </div>

     
        {/* <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            src="https://maps.google.com/maps?q=SLIIT&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 border-0"
            loading="lazy"
          />
        </div> */}

      </div>
    </div>
  );
}