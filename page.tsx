"use client";

import React from "react";

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col justify-center items-center px-6 md:px-20 lg:px-40">
      <div className="max-w-3xl text-center">
        <div className="mb-6">
          <div className="inline-block rounded-full bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-600 p-1">
            <div className="bg-black rounded-full p-6">
              <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-600">
                S
              </span>
            </div>
          </div>
        </div>
        <p className="uppercase text-sm mb-2 bg-gray-700 inline-block rounded-full px-4 py-1">
          Public Beta
        </p>
        <h1 className="text-5xl font-bold mb-4">
          Simular <span className="text-blue-400">Browser</span>
        </h1>
        <p className="text-lg mb-8">
          macOS-native agent, performing digital actions on your behalf
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition rounded-full px-8 py-3 font-semibold text-lg"
        >
          Download Simular (macOS 15+ Silicon) ✨
        </a>
      </div>
    </section>
  );
}
