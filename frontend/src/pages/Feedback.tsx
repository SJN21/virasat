import { useState } from "react";

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "General",
    message: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for your feedback! ⭐ Rating: ${form.rating}/5`);
    setForm({ name: "", email: "", type: "General", message: "", rating: 0 });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Main Content */}
      <main className="flex-grow px-6 md:px-20 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Feedback Form */}
          <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us Your Feedback</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-800">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-800">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">Rate Us</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      className={`text-2xl transition ${
                        form.rating >= star ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-800">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 transition"
              >
                Submit Feedback
              </button>
            </form>
          </div>

          {/* Right-side Illustration */}
          <div className="hidden md:block">
            <img
              src="https://illustrations.popsy.co/gray/web-feedback.svg"
              alt="Feedback Illustration"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
