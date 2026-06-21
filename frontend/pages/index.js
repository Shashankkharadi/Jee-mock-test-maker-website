import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">JEE Mock Test Maker</h1>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <Link href="/tests" className="text-gray-600 hover:text-indigo-600">Tests</Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600">Dashboard</Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Master Your JEE Preparation
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Create personalized mock tests, identify weak points, and excel in your competitive exams
          </p>
          <Link
            href="/tests"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Start Taking Tests
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Tests</h3>
            <p className="text-gray-600">
              Create mock tests tailored to your preparation level and preferences
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Detailed Analytics</h3>
            <p className="text-gray-600">
              Get comprehensive insights into your performance and weak areas
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Progress Tracking</h3>
            <p className="text-gray-600">
              Monitor your improvement over time and stay motivated
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 text-white rounded-lg p-12 mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Excel?</h3>
          <p className="mb-6">Join thousands of students preparing for their JEE exams</p>
          <Link
            href="/tests"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 JEE Mock Test Maker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">

      <nav className="p-6 flex justify-between">
        <h1 className="text-3xl font-bold">
          Smart Mock Test Maker
        </h1>

        <div>
          <Link href="/login">Login</Link>
        </div>
      </nav>

      <section className="text-center mt-20">
        <h2 className="text-6xl font-bold">
          Create Smart Mock Tests
        </h2>

        <p className="mt-5 text-xl">
          JEE • NEET • CUET • Boards
        </p>

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg mt-10">
          Start Test
        </button>
      </section>
    </div>
  );
}
