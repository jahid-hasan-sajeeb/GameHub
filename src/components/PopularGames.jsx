import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PopularGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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

    // sorted by rating
    const popularGames = [...games]
        .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
        .slice(0, 3);

    const handleCardClick = () => {
        navigate(`/game-details`);
    };

    return (
        <div className="bg-black text-white px-4 py-10 mt-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-2">
                    Popular <span className="text-red-500">Games</span>
                </h2>
                <p className="text-gray-400 mb-6">
                    Top rated games from our collection
                </p>

                {loading && (
                    <p className="text-gray-400 text-sm">Loading games...</p>
                )}

                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}

                {!loading && !error && (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {popularGames.map((game) => (
                            <div
                                key={game.id}
                                onClick={() => handleCardClick(game.id)}
                                className="bg-zinc-900 border border-gray-800 rounded-2xl p-4 shadow-md cursor-pointer hover:border-red-500 hover:-translate-y-1 transition-all duration-200 flex flex-col"
                            >
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
                                <h3 className="text-lg font-semibold mb-1 line-clamp-2">
                                    {game.title}
                                </h3>

                       
                                <p className="text-xs text-gray-400 mb-1">
                                    Category: <span className="text-gray-200">{game.category}</span>
                                </p>
                                <p className="text-xs text-gray-400 mb-2">
                                    Rating: <span className="text-yellow-400">{game.ratings}</span> / 5
                                </p>

                               
                                <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                                    {game.description}
                                </p>

                                <span className="mt-auto text-xs text-red-400">
                                    View details →
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopularGames;
