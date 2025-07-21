import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import { X } from "lucide-react"; // npm install lucide-react

const mockGallery = [
  {
    id: 1,
    title: "Paryushan Mahaparv",
    date: "2025-09-10",
    location: "Shree Jain Derasar, Palitana",
    photos: [
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/bhadreshwar/Bhadreshwar-Banner.jpg",
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/bhadreshwar/Bhadreshwar1.jpg",
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/bhadreshwar/gallery/Bhadreshwar%20Jain%20Temple5.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg"
    ]
  },
  {
    id: 2,
    title: "Snatra Puja Celebration",
    date: "2025-05-15",
    location: "Mumbai Jain Temple",
    photos: [
      "https://i.ytimg.com/vi/liYOycJZlbA/maxresdefault.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Jain_rituals_snatra_puja.jpg"
    ]
  },
  {
    id: 3,
    title: "Mahavir Janma Kalyanak",
    date: "2025-04-04",
    location: "Hutheesing Jain Temple, Ahmedabad",
    photos: [
      "https://www.msjs.org.au/media/13525/mahavir-janma-kalyanak.jpg?width=650"
    ]
  }
];

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [focusedImage, setFocusedImage] = useState(null);

  const openEventGallery = (event) => {
    setSelectedEvent(event);
    setFocusedImage(null);
  };

  const closePopup = () => {
    setSelectedEvent(null);
    setFocusedImage(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-12 bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <h1 className="text-4xl font-extrabold mb-2">Event Gallery</h1>
        <p className="text-gray-600">Explore sacred moments and celebrations from Jainism events</p>
      </section>

      <main className="px-6 md:px-20 py-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockGallery.map((event) => (
          <div
            key={event.id}
            onClick={() => openEventGallery(event)}
            className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white border"
          >
            <img
              src={event.photos[0]}
              alt={event.title}
              className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4">
              <h2 className="text-lg font-bold">{event.title}</h2>
              <p className="text-sm">
                {dayjs(event.date).format("MMMM D, YYYY")} • {event.location}
              </p>
              <span className="inline-block mt-2 text-xs bg-white/20 px-2 py-0.5 rounded-md">
                {event.photos.length} photos
              </span>
            </div>
          </div>
        ))}
      </main>

      {/* Event Gallery Popup */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <motion.div
              className="relative bg-white rounded-xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
              <p className="text-sm text-gray-500 mb-6">
                {dayjs(selectedEvent.date).format("MMMM D, YYYY")} • {selectedEvent.location}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {selectedEvent.photos.map((photo, index) => (
                  <div key={index} className="cursor-pointer" onClick={() => setFocusedImage(photo)}>
                    <img
                      src={photo}
                      alt="event pic"
                      className="rounded-lg h-40 object-cover w-full hover:scale-105 transition"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focused Image Popup */}
      <AnimatePresence>
        {focusedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFocusedImage(null)}
          >
            <motion.img
              src={focusedImage}
              alt="Focused"
              className="max-h-[90vh] max-w-full rounded-lg shadow-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
