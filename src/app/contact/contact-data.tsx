import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let’s discuss your Project</h2>
          <p className="text-gray-600 mb-8">
            I’m available for freelance work. Drop a line if you have a project in mind or want to collaborate.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span>Rivers, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-600" />
              <span>myemail@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-600" />
              <span>+234 80 0000 0000</span>
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

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-purple-600 outline-none"
          ></textarea>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
