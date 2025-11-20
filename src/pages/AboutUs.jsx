import React from 'react';

const AboutUs = () => {

  return (
    <main className="bg-black text-gray-300">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          About <span className="text-red-500">GameHub</span>
        </h1>
        <p className="mt-4 max-w-3xl text-gray-400">
          GameHub is your one-stop destination for discovering games, reading trusted reviews,
          and staying up to date with events and news—all in a sleek, fast experience.
        </p>
      </section>

      {/* Mission / What we do */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h3 className="text-white font-semibold text-xl">Our Mission</h3>
            <p className="mt-2 text-sm text-gray-400">
              Empower players to find, evaluate, and enjoy great games—faster.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h3 className="text-white font-semibold text-xl">What We Do</h3>
            <p className="mt-2 text-sm text-gray-400">
              Curated lists, ratings, and deep-dive details for titles across genres, plus
              a protected details page for a premium experience.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h3 className="text-white font-semibold text-xl">Why It Matters</h3>
            <p className="mt-2 text-sm text-gray-400">
              Save time. Play better. Stay in the loop with updates and newsletters.
            </p>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-y border-gray-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 grid gap-6 sm:grid-cols-3 text-center">
          <div>
            <div className="text-3xl font-extrabold text-white">500+</div>
            <div className="text-sm text-gray-400">Games Indexed</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">4.8★</div>
            <div className="text-sm text-gray-400">Avg User Rating</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">24/7</div>
            <div className="text-sm text-gray-400">News & Updates</div>
          </div>
        </div>
      </section>

      {/* Mini team / values row (optional, simple) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12">
        <h2 className="text-2xl font-bold text-white">Built by Gamers</h2>
        <p className="mt-2 text-sm text-gray-400 max-w-3xl">
          We’re a small team that loves great gameplay, clean UI, and honest reviews. Have feedback?
          We’d love to hear it.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          {/* Placeholder avatars (replace with real team later) */}
          <img
            className="h-12 w-12 rounded-full border border-gray-700"
            src="https://api.dicebear.com/7.x/identicon/svg?seed=PlayerOne"
            alt="Team member"
          />
          <img
            className="h-12 w-12 rounded-full border border-gray-700"
            src="https://api.dicebear.com/7.x/identicon/svg?seed=PlayerTwo"
            alt="Team member"
          />
          <img
            className="h-12 w-12 rounded-full border border-gray-700"
            src="https://api.dicebear.com/7.x/identicon/svg?seed=PlayerThree"
            alt="Team member"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-16">
        <div className="rounded-2xl border border-gray-800 bg-linear-to-r from-zinc-950 to-black p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-white text-xl font-semibold">Join the GameHub community</h3>
            <p className="text-sm text-gray-400">
              Create an account to unlock protected game details, save favorites, and subscribe to the newsletter.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/register"
              className="btn inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium transition"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="inline-block border border-gray-700 hover:border-gray-500 text-gray-200 px-5 py-2 rounded-md font-medium transition"
            >
              Login
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
