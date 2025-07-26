import React from "react";

export default function WhyReadBooks() {
  const points = [
    {
      title: "Boosts Imagination & Creativity",
      description:
        "Books help develop the mind's creative muscles, allowing readers to visualize new worlds and ideas.",
    },
    {
      title: "Enhances Focus & Discipline",
      description:
        "Reading requires sustained attention, helping improve focus, patience, and discipline over time.",
    },
    {
      title: "Expands Knowledge & Perspective",
      description:
        "Reading across genres and cultures offers deeper understanding of different beliefs and global issues.",
    },
    {
      title: "Improves Emotional Intelligence",
      description:
        "Books let us explore human emotions, deepening empathy and interpersonal awareness.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-24 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="uppercase text-sm text-gray-400 tracking-wider">Why Read Books</p>
          <h2 className="text-4xl font-bold leading-snug">
            Books Shape Minds, Build Empathy and Unlock Worlds
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Reading isn’t just a hobby — it’s a transformative practice that sharpens the mind, expands worldviews,
            and nurtures emotional depth.
          </p>
        </div>

        {/* Right Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
              <p className="text-sm text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
