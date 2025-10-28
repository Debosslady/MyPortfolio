"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { sendContact } from "@/lib/api"; 
import { ContactForm } from "@/hooks/types";

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await sendContact(form);
      if (res.status) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ " + res.message);
      }
    } catch (error: any) {
      setStatus("❌ " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <section className="pt-28 pb-64 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-10 grid md:grid-cols-2 gap-10">
        
        {/* --- Contact Info Section --- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold pb-5 text-gray-900 mb-4">
            Contact Me
          </h2>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Let&rsquo;s discuss your Project
          </h2>
          <p className="text-gray-600 mb-8">
            I&rsquo;m available for freelance work. Drop a line if you have a project in mind or want to collaborate.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span>Rivers, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-600" />
              <span>millerhelenu@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-600" />
              <span>+234 90 2708 8714</span>
            </li>
          </ul>

          <div className="flex gap-4 mt-8">
            <a href="#" className="text-purple-600 hover:text-purple-800">
              <i className="ri-facebook-fill text-2xl"></i>
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-800">
              <i className="ri-twitter-fill text-2xl"></i>
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-800">
              <i className="ri-instagram-fill text-2xl"></i>
            </a>
          </div>
        </div>

        {/* --- Contact Form Section --- */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject (optional)"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            {status === "Sending..." ? "Sending..." : "Submit"}
          </button>

          {status && <p className="text-center text-gray-700 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}

// "use client";
// import { MapPin, Mail, Phone } from "lucide-react";

// export default function Contact() {
  
//   return (
//     <section className="pt-28 pb64  px-6 md:px-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-10 grid md:grid-cols-2 gap-10">
//         <div> 
//           <h2 className="text-3xl md:text-4xl font-bold pb-5 text-gray-900 mb-4">Contact Me</h2>
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Let&rsquo;s discuss your Project</h2>
//           <p className="text-gray-600 mb-8">
//             I&rsquo;m available for freelance work. Drop a line if you have a project in mind or want to collaborate.
//           </p>

//           <ul className="space-y-4 text-gray-700">
//             <li className="flex items-center gap-3">
//               <MapPin className="w-5 h-5 text-purple-600" />
//               <span>Rivers, Nigeria</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <Mail className="w-5 h-5 text-purple-600" />
//               <span className="py-5">millerhelenu@gmail.com</span>
//             </li>
//             <li className="flex items-center gap-3">
//               <Phone className="w-5 h-5 text-purple-600" />
//               <span>+234 90 2708 8714</span>
//             </li>
//           </ul>

//           <div className="flex gap-4 mt-8">
//             <a href="#" className="text-purple-600 hover:text-purple-800">
//               <i className="ri-facebook-fill text-2xl"></i>
//             </a>
//             <a href="#" className="text-purple-600 hover:text-purple-800">
//               <i className="ri-twitter-fill text-2xl"></i>
//             </a>
//             <a href="#" className="text-purple-600 hover:text-purple-800">
//               <i className="ri-instagram-fill text-2xl"></i>
//             </a>
//           </div>
//         </div>

//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Subject"
//             className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
//           />
//           <textarea
//             placeholder="Message"
//             rows={5}
//             className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
//           ></textarea>
//           <button className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
