import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10 bg-gradient-to-br from-gray-50 to-blue-50">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6">

        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-800">
            Contact Us
          </h2>
          <p className="text-sm text-gray-500">
            We’d love to hear from you. Send us a message.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-xs text-gray-500">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-gray-500">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-xs text-gray-500">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={4}
              className="w-full mt-1 px-3 py-2 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2.5 rounded-xl font-medium
            hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition"
          >
            Send Message
          </button>

        </div>

      </div>
    </div>
  );
}