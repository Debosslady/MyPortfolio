export default function Clients() {
  const clients = ["im", "Spotify", "Google", "Dribbble", "LinkedIn", "Amazon", "Medium"];

  return (
    <section className="py-16 bg-gray-50 text-center px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Happy Clients</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        I’ve had the pleasure of working with a diverse range of companies, from startups to established brands.
      </p>
      <div className="flex flex-wrap justify-center gap-8 opacity-70">
        {clients.map((client, index) => (
          <div key={index} className="text-lg font-semibold text-gray-500">
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}
