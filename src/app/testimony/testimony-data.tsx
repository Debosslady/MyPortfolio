export default function Testimony() {
  return (
    <section className="py-20 bg-white text-center px-6 md:px-20 shadow-sm">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Testimonial</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Working with this team was a fantastic experience. Their attention to detail and commitment to quality exceeded
        our expectations.
      </p>

      <blockquote className="text-gray-800 italic max-w-2xl mx-auto">
        “From the initial consultation to the final delivery, every step was handled professionally.  
        The end result was a product that not only met our needs but also impressed our stakeholders.  
        Highly recommended!”
      </blockquote>

      <p className="mt-6 font-semibold text-gray-900">Esther Howard</p>
      <p className="text-sm text-gray-500">Manager @ Example Inc.</p>
    </section>
  );
}
