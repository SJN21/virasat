import React from "react";
import WhyReadBooks from "../components/whyReadBooks";
import Maa from "../images/maa.png";
import gurudev from "../../public/gurudev.png";

export default function Home() {
  return (
    <>
    <section className="grid md:grid-cols-2 items-center px-6 md:px-20 py-20 gap-12 bg-white text-gray-900">
      {/* Left Side: Headline + Description + Cards */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Quickly Expand your Workforce.
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-xl">
          Take advantage of our global employment products to hire who you want, wherever you want – starting in just minutes.
        </p>
      </div>

      {/* Right Side: Profile Card */}
      <img
        src={Maa}
        className="rounded-2xl w-[90%] md:w-[450px] mx-auto"
      />
    </section>

    {/* Featured Books Section */}
    <section className="px-6 md:px-20 py-16 bg-gray-50 text-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Books</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {/* Book 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <img
            src="/books/book1.jpg"
            alt="Book 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">The Power of Now</h4>
          <p className="text-sm text-gray-600">By Eckhart Tolle</p>
        </div>

        {/* Book 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <img
            src="/books/book2.jpg"
            alt="Book 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Atomic Habits</h4>
          <p className="text-sm text-gray-600">By James Clear</p>
        </div>

        {/* Book 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <img
            src="/books/book3.jpg"
            alt="Book 3"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Deep Work</h4>
          <p className="text-sm text-gray-600">By Cal Newport</p>
        </div>

        {/* Book 4 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <img
            src="/books/book2.jpg"
            alt="Book 4"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Thinking Fast and Slow</h4>
          <p className="text-sm text-gray-600">By Daniel Kahneman</p>
        </div>
      </div>
    </section>

    <section className="relative w-full h-[450px] bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <img
        src={gurudev}
        alt="Elegant Model"
        className="absolute top-0 left-0 w-full h-full object-center object-cover"
        // className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/10" />

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-24 text-gray-900">
        <div className="max-w-lg p-6 rounded-xl backdrop-blur-md">
          <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            ReallyGreatSite Co.
          </h4>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Bringing <br />
            <span className="font-semibold">Your Inner Glow</span>
          </h1>
          <button className="bg-gray-900 text-white font-semibold py-2 px-6 rounded hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>

      <WhyReadBooks/>
      {/* Testimonial Section */}
      <section className="relative px-6 md:px-20 py-20 bg-white">
        {/* Floating avatars */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { src: "/testi/user1.jpg", style: "top-10 left-6" },
            { src: "/testi/user2.jpg", style: "top-6 right-20" },
            { src: "/testi/user3.jpg", style: "bottom-20 left-20" },
            { src: "/testi/user4.jpg", style: "bottom-10 right-10" },
            { src: "/testi/user5.jpg", style: "top-1/2 left-1/4" },
            { src: "/testi/user6.jpg", style: "top-1/2 right-1/4" },
          ].map((user, i) => (
            <img key={i} src={user.src} alt="" className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full absolute ${user.style}`} />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl mb-6 text-gray-700">
            Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal.
            Use it where it makes sense to use it, and pull it once the natural process indicates that it’s time.
          </p>
          <h4 className="font-bold text-lg">Fergus Douchébag</h4>
          <p className="text-sm text-gray-500 mb-2">Product Designer, @dribbble</p>
          <div className="flex justify-center gap-1 text-yellow-400 text-xl">
            ★ ★ ★ ★ ☆
          </div>
        </div>
      </section>
      
    {/* Newsletter Section */}
      <section className="px-6 md:px-20 py-16 bg-blue-50 text-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with New Releases</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter to get the latest book releases and curated reading tips.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-80"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
