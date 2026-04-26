import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Contact: Message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:lakshants500@gmail.com?subject=${subject}&body=${body}`;
  };

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
                <div className="bg-green-50 p-3 rounded-xl">
                  <Mail className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">
                    lakshants500@gmail.com
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
                    0740884483
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
                Lokesha Weerasinghe — SLIIT
              </p>
              <p className="text-gray-500 text-sm">
                lokesha.w@sliit.lk
              </p>
            </div>

          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">

            <h2 className="text-xl font-semibold mb-4">
              Send a Message
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition"
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