import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mockEvents = [
  {
    id: 1,
    title: "Book Reading: Classic Literature",
    date: "July 15, 2025",
    time: "5:00 PM",
    location: "City Library Hall",
    description: "Join us for a cozy evening as we read and discuss chapters from timeless classics.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
  },
  {
    id: 2,
    title: "Meet the Author: James Clear",
    date: "August 2, 2025",
    time: "6:30 PM",
    location: "Downtown Convention Center",
    description: "Bestselling author of Atomic Habits will be in conversation followed by a signing session.",
    image: "https://images.unsplash.com/photo-1515162305284-9c87ef9c93e3",
  },
  {
    id: 3,
    title: "Science & Philosophy Panel",
    date: "August 18, 2025",
    time: "4:00 PM",
    location: "Science Museum Auditorium",
    description: "Experts come together to discuss humanity, the cosmos, and the big questions.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  },
  {
    id: 4,
    title: "Local Poetry Slam",
    date: "September 10, 2025",
    time: "7:00 PM",
    location: "Cafe Literature Lounge",
    description: "An open mic night for poets to share verses and vibes with the community.",
    image: "https://images.unsplash.com/photo-1532635246-2f8d2c00f1d8",
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-12 text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Upcoming Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Be part of our inspiring author talks, interactive panels, and thoughtful literary gatherings.
        </motion.p>
      </section>

      {/* Events Grid */}
      <main className="px-6 md:px-20 py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {mockEvents.map((event, index) => (
            <motion.div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
              />
              {/* Date Badge */}
              <div className="absolute top-4 left-4 bg-white text-yellow-600 text-xs font-bold px-3 py-1 rounded-full shadow">
                {event.date}
              </div>
              <div className="p-6 bg-white space-y-3">
                <h2 className="text-xl font-bold">{event.title}</h2>
                <div className="text-sm text-gray-600 flex flex-col">
                  <span>{event.time}</span>
                  <span className="italic">{event.location}</span>
                </div>
                <p className="text-gray-700 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-44 object-cover"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-3 right-3 bg-white text-black rounded-full p-2 shadow hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
                <p className="text-sm text-gray-600">
                  <strong>Date:</strong> {selectedEvent.date} &nbsp; | &nbsp;
                  <strong>Time:</strong> {selectedEvent.time}
                </p>
                <p className="text-sm italic text-gray-500">{selectedEvent.location}</p>
                <p className="text-md text-gray-800 leading-relaxed">{selectedEvent.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
