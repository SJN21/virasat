import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ArticlePage() {
  const [article, setArticle] = useState({
    title: "Paryushan Mahaparv Insights",
    author: "Acharya Hemchandra",
    date: "2025-09-12",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Paryushan_puja.jpg",
    content: `
      Paryushan Mahaparv is the most important annual holy event for Jains. It is observed by the Jain community during the month of Bhadrapada (August/September). 
      
      The festival lasts 8-10 days and is a time for intense spiritual introspection, fasting, and penance. Jains seek forgiveness, self-purification, and make efforts to discard bad karma.

      During this period, followers observe various rituals such as Pratikraman, meditation, and scriptural readings. On the last day, known as Samvatsari, Jains ask for forgiveness from everyone: 'Micchami Dukkadam'.

      This sacred occasion brings together the entire Jain community in harmony, fostering peace, compassion, and non-violence.
    `
  });

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button className="mb-6 flex items-center text-sm text-gray-500 hover:text-black transition">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Gallery
        </button>

        <h1 className="text-4xl font-bold mb-2 leading-tight">
          {article.title}
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          By <span className="font-medium">{article.author}</span> • {article.date}
        </p>

        <motion.img
          src={article.coverImage}
          alt="cover"
          className="rounded-lg w-full h-64 object-cover mb-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {article.content.split("\n").map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
