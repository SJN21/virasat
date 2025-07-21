import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const mockBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    topic: "Fiction",
    language: "English",
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    tag: "Top",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    topic: "Self-help",
    language: "English",
    cover: "https://covers.openlibrary.org/b/id/10523313-L.jpg",
    tag: "New",
  },
  {
    id: 3,
    title: "Les Misérables",
    author: "Victor Hugo",
    topic: "Classic",
    language: "French",
    cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    tag: "Top",
  },
  {
    id: 4,
    title: "Brief Answers to the Big Questions",
    author: "Stephen Hawking",
    topic: "Science",
    language: "English",
    cover: "https://covers.openlibrary.org/b/id/9259323-L.jpg",
    tag: "New",
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    topic: "History",
    language: "English",
    cover: "https://covers.openlibrary.org/b/id/8372581-L.jpg",
    tag: "Top",
  },
];

const allAuthors = [...new Set(mockBooks.map(book => book.author))];
const allLanguages = [...new Set(mockBooks.map(book => book.language))];
const allTopics = [...new Set(mockBooks.map(book => book.topic))];
const tags = ["New", "Top"];

export default function Books() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleFilter = (value, setter, list) => {
    if (list.includes(value)) {
      setter(list.filter((item) => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  const filteredBooks = mockBooks.filter((book) => {
    const matchesSearch = (
      book.title + book.author + book.topic + book.language
    ).toLowerCase().includes(search.toLowerCase());

    const matchesTag = selectedTags.length === 0 || selectedTags.includes(book.tag);
    const matchesAuthor = selectedAuthors.length === 0 || selectedAuthors.includes(book.author);
    const matchesLang = selectedLanguages.length === 0 || selectedLanguages.includes(book.language);
    const matchesTopic = selectedTopics.length === 0 || selectedTopics.includes(book.topic);

    return matchesSearch && matchesTag && matchesAuthor && matchesLang && matchesTopic;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-12 text-center">
        <motion.h1 className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Your Next Favorite Book
        </motion.h1>
        <motion.p className="text-lg text-gray-600 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Browse a curated collection of trending, timeless, and top reads.
        </motion.p>
      </section>

      {/* Main Layout */}
      <main className="flex flex-col lg:flex-row gap-10 px-6 md:px-20 py-14">

        {/* Filter Sidebar */}
        <aside className="lg:w-[22%]">
          <div className="hidden lg:block sticky top-28 space-y-6">
            <input
              type="text"
              placeholder="Search title, author, etc..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            <div className="space-y-4 bg-gray-50 border p-4 rounded-xl shadow-sm">
              {/* Tags */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleFilter(tag, setSelectedTags, selectedTags)}
                      className={`text-sm px-3 py-1 rounded-full border ${
                        selectedTags.includes(tag)
                          ? "bg-black text-white"
                          : "bg-white text-black border-gray-300"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {allTopics.map(topic => (
                    <button
                      key={topic}
                      onClick={() => toggleFilter(topic, setSelectedTopics, selectedTopics)}
                      className={`text-sm px-3 py-1 rounded-full border ${
                        selectedTopics.includes(topic)
                          ? "bg-black text-white"
                          : "bg-white text-black border-gray-300"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {allLanguages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => toggleFilter(lang, setSelectedLanguages, selectedLanguages)}
                      className={`text-sm px-3 py-1 rounded-full border ${
                        selectedLanguages.includes(lang)
                          ? "bg-black text-white"
                          : "bg-white text-black border-gray-300"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Authors */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Authors</h4>
                <div className="flex flex-wrap gap-2">
                  {allAuthors.map(author => (
                    <button
                      key={author}
                      onClick={() => toggleFilter(author, setSelectedAuthors, selectedAuthors)}
                      className={`text-sm px-3 py-1 rounded-full border ${
                        selectedAuthors.includes(author)
                          ? "bg-black text-white"
                          : "bg-white text-black border-gray-300"
                      }`}
                    >
                      {author}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Books Section */}
        <section className="flex-1">
          <h2 className="text-2xl font-bold mb-6">
            Books <span className="text-gray-500 text-sm">({filteredBooks.length} found)</span>
          </h2>

          {filteredBooks.length === 0 ? (
            <p className="text-gray-500">No books found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredBooks.map((book) => (
                <Link key={book.id} to={`/book/${book.id}`} className="block">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                  >
                    <img src={book.cover} alt={book.title} className="w-full h-72 object-cover rounded-xl mb-4" />
                    {book.tag && (
                      <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-full shadow ${
                        book.tag === "New" ? "bg-green-600 text-white" : "bg-blue-600 text-white"
                      }`}>
                        {book.tag}
                      </span>
                    )}
                    <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
                    <div className="text-xs text-gray-600 flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-full border">{book.topic}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full border">{book.language}</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
