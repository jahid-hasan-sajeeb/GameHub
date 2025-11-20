import React, { useEffect, useState } from 'react';

const GameDetails = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/gameData.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setGames(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-black text-white px-4 py-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Game <span className="text-red-500">Details</span>
                </h2>
                <p className="text-gray-400 text-center mb-8">
                    Explore the available games in GameHub
                </p>

                {loading && (
                    <p className="text-center text-gray-400">
                        Loading games...
                    </p>
                )}

                {error && (
                    <p className="text-center text-red-500">
                        {error}
                    </p>
                )}

                {!loading && !error && (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {games.map((game) => (
                            <div
                                key={game.id}
                                className="bg-zinc-900 border border-gray-800 rounded-2xl p-4 flex flex-col shadow-md"
                            >
                                {/* Cover */}
                                <div className="w-full h-40 bg-zinc-800 rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                                    {game.coverPhoto ? (
                                        <img
                                            src={game.coverPhoto}
                                            alt={game.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-gray-500 text-sm">
                                            No cover image
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-1">
                                    {game.title}
                                </h3>

                                <p className="text-xs text-gray-400 mb-1">
                                    Category: <span className="text-gray-200">{game.category}</span>
                                </p>
                                <p className="text-xs text-gray-400 mb-2">
                                    Ratings: <span className="text-gray-200">{game.ratings}</span>
                                </p>
                                <p className="text-xs text-gray-400 mb-3">
                                    Developer: <span className="text-gray-200">{game.developer}</span>
                                </p>

                                {/* Description */}
                                <p className="text-sm text-gray-300 mb-4">
                                    {game.description}
                                </p>

                                {/* Download */}
                                <a
                                    href={game.downloadLink}
                                    target="_blank"
                                    className="mt-auto inline-block text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm font-semibold transition-all duration-300"
                                >
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameDetails;
