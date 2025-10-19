import Image from "next/image";

export default function Blog() {
  const posts = [
    {
      title: "Building Scalable Web Apps with Next.js",
      date: "Oct 10, 2025",
      image: "/assets/images/blog-1.jpg",
    },
    {
      title: "UI/UX Principles Every Developer Should Know",
      date: "Sept 28, 2025",
      image: "/assets/images/blog-4.jpg",
    },
    {
      title: "Optimizing Website Performance in React",
      date: "Aug 15, 2025",
      image: "/assets/images/blog-3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 md:px-20 shadow-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Blog</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore insights, tutorials, and industry tips on web development, design, and tech innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
            <Image src={post.image} alt={post.title} width={400} height={250} className="object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <a href="#" className="text-purple-900 mt-2 inline-block font-medium">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
