import React from 'react';

const newsArticles = [
    {
        id: 1,
        title: "PUBG Mobile New Season Brings Fresh Battle Pass & Map Tweaks",
        game: "PUBG Mobile",
        category: "Update",
        date: "Nov 18, 2025",
        coverPhoto: "https://example.com/images/pubg-update.jpg",
        description:
            "The latest PUBG Mobile season introduces a revamped battle pass, balance changes, and visual updates across multiple classic maps.",
        link: "#"
    },
    {
        id: 2,
        title: "Genshin Impact Reveals New Region & Playable Characters",
        game: "Genshin Impact",
        category: "Announcement",
        date: "Nov 15, 2025",
        coverPhoto: "https://example.com/images/genshin-region.jpg",
        description:
            "HoYoverse teases a new region with unique enemies, puzzles, and elemental reactions, along with several highly anticipated characters.",
        link: "#"
    },
    {
        id: 3,
        title: "Call of Duty Mobile Esports Championship Finals Recap",
        game: "Call of Duty Mobile",
        category: "Esports",
        date: "Nov 10, 2025",
        coverPhoto: "https://example.com/images/codm-esports.jpg",
        description:
            "Top teams clashed in an intense grand final, showcasing insane plays, clutch moments, and a surprising underdog victory.",
        link: "#"
    },
    {
        id: 4,
        title: "Free Fire Adds New Ranked Rewards & Limited-Time Mode",
        game: "Free Fire",
        category: "Update",
        date: "Nov 08, 2025",
        coverPhoto: "https://example.com/images/freefire-mode.jpg",
        description:
            "Garena rolls out a new limited-time mode focused on high-speed combat, along with fresh skins and ranked season rewards.",
        link: "#"
    },
    {
        id: 5,
        title: "Indie Spotlight: Pixel Rogue Reimagines Classic Dungeon Crawlers",
        game: "Pixel Rogue",
        category: "Indie",
        date: "Nov 05, 2025",
        coverPhoto: "https://example.com/images/pixel-rogue.jpg",
        description:
            "Pixel Rogue blends retro aesthetics with modern combat mechanics, offering deep builds, randomized levels, and co-op support.",
        link: "#"
    }
];

const GameUpdates = () => {
    return (
        <div className="min-h-screen bg-black text-white px-4 py-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <header className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        GameHub <span className="text-red-500">Articles</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base">
                        All the latest updates from PUBG Mobile.
                    </p>
                </header>

                <section className="space-y-10">
                    {newsArticles.map((article) => (
                        <div
                            key={article.id}
                            className="grid md:grid-cols-2 gap-6 bg-zinc-900 border border-gray-800 rounded-2xl p-5 shadow-lg"
                        >
                            <div className="w-full h-56 md:h-full bg-zinc-800 rounded-xl overflow-hidden flex items-center justify-center">
                                {article.coverPhoto ? (
                                    <img
                                        src={article.coverPhoto}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-gray-500 text-sm">No cover image</span>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                                    <span className="px-2 py-0.5 rounded-full bg-red-600/20 text-red-400">
                                        {article.category}
                                    </span>
                                    <span>•</span>
                                    <span>{article.date}</span>
                                </div>

                                <h2 className="text-2xl font-semibold mb-2">
                                    {article.title}
                                </h2>

                                <p className="text-sm text-gray-300 mb-3">
                                    {article.description}
                                </p>

                                <p className="text-xs text-gray-400 mb-4">
                                    Related game: <span className="text-gray-200">{article.game}</span>
                                </p>

                                <a
                                    href={article.link}
                                    className="mt-auto inline-block text-sm bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold transition-all duration-300"
                                >
                                    Read full story
                                </a>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </div>
    );
};

export default GameUpdates;
