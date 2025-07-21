import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import books from "../images/maa.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    controls.start({ x: 0, opacity: 1 });
  }, [controls]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center px-6 md:px-20 py-20 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[40px] sm:text-5xl font-bold leading-tight mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              {t("hero.ctaStart")}
            </button>
            <button className="border border-gray-800 px-6 py-3 rounded-full text-gray-800 hover:bg-gray-100 transition">
              {t("hero.ctaBrowse")}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={books}
            alt={t("hero.imageAlt")}
            className="rounded-2xl w-[90%] md:w-[450px]"
          />
        </motion.div>
      </section>

      {/* Explore Sections */}
      <motion.section
        className="px-6 md:px-20 py-20 bg-gray-100"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">
          {t("explore.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Fiction", "Non-Fiction", "Biographies", "Children", "History", "Science", "Technology", "Mystery"].map((section) => (
            <div
              key={section}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition"
            >
              <h3 className="text-lg font-medium">{t(`explore.sections.${section}`)}</h3>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">{t("testimonials.title")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Aanya P.", quote: t("testimonials.quotes.0") },
            { name: "Ravi K.", quote: t("testimonials.quotes.1") },
            { name: "Meera S.", quote: t("testimonials.quotes.2") },
          ].map((t, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md text-center"
            >
              <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-6 md:px-20 py-20 bg-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t("newsletter.title")}</h2>
        <p className="text-gray-600 mb-6">{t("newsletter.subtitle")}</p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder={t("newsletter.placeholder")}
            className="px-5 py-3 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            {t("newsletter.cta")}
          </button>
        </form>
      </section>
    </div>
  );
}
