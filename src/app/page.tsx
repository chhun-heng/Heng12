// 'use client';
import Image from "next/image";
import Header from "../components/navbar/navbar";
import Navbar from "../components/navbar/navbar";
import { use } from "react";
import type { ReactElement } from "react";

export default function Home() {
  const nativeLanguages = [
    { name: "English", flag: "https://flagcdn.com/48x36/gb.png" },
    { name: "français", flag: "https://flagcdn.com/48x36/fr.png" },
    { name: "español", flag: "https://flagcdn.com/48x36/es.png" },
    { name: "Türkçe", flag: "https://flagcdn.com/48x36/tr.png" },
    { name: "italiano", flag: "https://flagcdn.com/48x36/it.png" },
    { name: "русский", flag: "https://flagcdn.com/48x36/ru.png" },
    { name: "українська", flag: "https://flagcdn.com/48x36/ua.png" },
    { name: "Tiếng Việt", flag: "https://flagcdn.com/48x36/vn.png" },
    { name: "हिन्दी", flag: "https://flagcdn.com/48x36/in.png" },
    { name: "العربية", flag: "https://flagcdn.com/48x36/sa.png" },
    { name: "Filipino", flag: "https://flagcdn.com/48x36/ph.png" },
    { name: "فارسی", flag: "https://flagcdn.com/48x36/ir.png" },
    { name: "Indonesia", flag: "https://flagcdn.com/48x36/id.png" },
    { name: "Deutsch", flag: "https://flagcdn.com/48x36/de.png" },
    { name: "português", flag: "https://flagcdn.com/48x36/pt.png" },
    { name: "日本語", flag: "https://flagcdn.com/48x36/jp.png" },
    { name: "中文", flag: "https://flagcdn.com/48x36/cn.png" },
    { name: "한국어", flag: "https://flagcdn.com/48x36/kr.png" },
    { name: "polski", flag: "https://flagcdn.com/48x36/pl.png" },
    { name: "Ελληνικά", flag: "https://flagcdn.com/48x36/gr.png" },
    { name: "বাংলা", flag: "https://flagcdn.com/48x36/bd.png" },
    { name: "Nederlands", flag: "https://flagcdn.com/48x36/nl.png" },
    { name: "svenska", flag: "https://flagcdn.com/48x36/se.png" },
    { name: "čeština", flag: "https://flagcdn.com/48x36/cz.png" },
    { name: "română", flag: "https://flagcdn.com/48x36/ro.png" },
    { name: "magyar", flag: "https://flagcdn.com/48x36/hu.png" },
  ];

  
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <section className="relative bg-gradient-to-b from-purple-50 via-pink-50 to-white pt-20 pb-32 overflow-hidden">
        {/* Floating plus decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-8 text-purple-300 text-4xl font-bold opacity-40">+</div>
          <div className="absolute top-24 left-16 text-blue-300 text-3xl opacity-30">+</div>
          <div className="absolute top-40 left-10 text-purple-200 text-5xl opacity-40">+</div>
          <div className="absolute top-32 left-32 text-pink-200 text-3xl opacity-30">+</div>
          <div className="absolute bottom-40 left-20 text-purple-300 text-4xl opacity-30">+</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Title with flags */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            {/* <span className="inline-block align-middle mr-3">
              <Image src="https://langeek.co/assets/images/uk-flag.svg" alt="UK" width={48} height={48} className="inline" />
            </span> */}
            Learn English with{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              LanGeek
            </span>
            {/* <span className="inline-block align-middle ml-3">
              <Image src="https://langeek.co/assets/images/uk-flag.svg" alt="UK" width={48} height={48} className="inline" />
            </span> */}
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
            LanGeek is a language learning platform that makes your learning process faster and easier.
          </p>
        </div>

        {/* FEATURE CARDS - Exact colors, icons, and layout */}
        <div className="relative max-w-7xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start justify-center">

            {/* Vocabulary */}
            <div className="group relative bg-gradient-to-br from-sky-400 to-blue-600 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-3 duration-300">
              <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
              <div className="relative text-center">
                <div className="w-20 h-20 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Vocabulary</h3>
                <p className="mt-3 text-sm opacity-95 leading-relaxed">
                  Learn English<br />Vocabulary
                </p>
              </div>
            </div>

            {/* Expressions */}
            <div className="group relative bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-3 duration-300">
              <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
              <div className="relative text-center">
                <div className="w-20 h-20 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.07 4.93a10 10 0 00-14.14 0c-3.91 3.91-3.91 10.24 0 14.14l7.07 7.07 7.07-7.07a10 10 0 000-14.14z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Expressions</h3>
                <p className="mt-3 text-sm opacity-95 leading-relaxed">
                  Learn Expressions<br />and Idioms
                </p>
              </div>
            </div>

            {/* Reading */}
            <div className="group relative bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-3 duration-300">
              <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
              <div className="relative text-center">
                <div className="w-20 h-20 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Reading</h3>
                <p className="mt-3 text-sm opacity-95 leading-relaxed">
                  Reading<br />comprehension
                </p>
              </div>
            </div>

            {/* Pronunciation */}
            <div className="group relative bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-3 duration-300">
              <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
              <div className="relative text-center">
                <div className="w-20 h-20 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Pronunciation</h3>
                <p className="mt-3 text-sm opacity-95 leading-relaxed">
                  Pronunciation<br />Lessons
                </p>
              </div>
            </div>

            {/* Grammar */}
            <div className="group relative bg-gradient-to-br from-rose-400 to-pink-600 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-3 duration-300">
              <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
              <div className="relative text-center">
                <div className="w-20 h-20 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Grammar</h3>
                <p className="mt-3 text-sm opacity-95 leading-relaxed">
                  English Grammar<br />lessons
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-gradient-to-b from-purple-50/50 to-blue-50/30 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Target Languages - Big Cards */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-10">
            Select the language you want to learn
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {[
              { name: "German", native: "Deutsch", flag: "https://flagcdn.com/96x72/de.png" },
              { name: "French", native: "français", flag: "https://flagcdn.com/96x72/fr.png" },
              { name: "Spanish", native: "español", flag: "https://flagcdn.com/96x72/es.png" },
            ].map((lang) => (
              <div
                key={lang.name}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 px-12 py-8 flex items-center gap-6 min-w-[300px] cursor-pointer group"
              >
                <img
                  src={lang.flag}
                  alt={lang.name}
                  className="w-20 h-14 rounded-lg shadow-md object-cover"
                />
                <div>
                  <div className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                    {lang.name}
                  </div>
                  <div className="text-gray-500">{lang.native}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Native Languages Grid */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-12">
            Select your native language
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
            {nativeLanguages.map((lang) => (
              <button
                key={lang.name}
                className="flex items-center gap-3 bg-white/90 hover:bg-white rounded-2xl px-5 py-4 transition-all hover:shadow-lg hover:scale-105 group"
              >
                <img
                  src={lang.flag}
                  alt={lang.name}
                  className="w-10 h-7 rounded shadow-sm"
                  width={40}
                  height={30}
                  loading='lazy'
                />
                <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900">
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>

    
    </div>
    
  );
}
