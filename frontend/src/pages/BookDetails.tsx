import { useParams, useNavigate } from "react-router-dom";

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
    topic: "Fiction",
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

export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = mockBooks.find((b) => b.id === parseInt(id));

  if (!book) return <div className="text-center py-20 text-lg">📚 Book not found</div>;

  const relatedBooks = mockBooks.filter(b => b.topic === book.topic && b.id !== book.id);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <main className="flex-grow px-6 md:px-20 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-blue-600 hover:underline transition"
        >
          ← Back to Books
        </button>

        {/* Book Detail Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          {/* Book Cover */}
          <div className="w-full lg:w-1/3">
            <img
              src={book.cover}
              alt={book.title}
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          {/* Book Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
            <p className="text-gray-600 text-lg mb-4">by <span className="font-medium">{book.author}</span></p>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-full border">{book.topic}</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full border">{book.language}</span>
              {book.tag && (
                <span className={`px-3 py-1 rounded-full text-white font-semibold shadow-sm ${
                  book.tag === "New" ? "bg-green-500" : "bg-blue-500"
                }`}>
                  {book.tag}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-md text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Dive into <strong>{book.title}</strong>, a remarkable work of {book.topic} literature authored by {book.author}.
              This book is available in <em>{book.language}</em> and promises an engaging experience for readers and learners alike.
            </p>

            {/* Download Button */}
            <button
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-full shadow hover:bg-gray-800 transition duration-200"
            >
              ⬇️ Download Book
            </button>
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">📚 Related Books in {book.topic}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {relatedBooks.map((related) => (
                <div key={related.id} className="bg-white rounded-2xl border p-4 shadow-md hover:shadow-xl transition-all">
                  <img src={related.cover} alt={related.title} className="w-full h-64 object-cover rounded-xl mb-3" />
                  <h3 className="text-lg font-semibold">{related.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {related.author}</p>
                  <p className="text-xs text-gray-500">{related.language}</p>
                  <button
                    onClick={() => navigate(`/book/${related.id}`)}
                    className="mt-3 text-blue-600 text-sm hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
