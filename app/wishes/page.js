"use client";
import { useState } from "react";

export default function MakeAWishPage() {
    const [wish, setWish] = useState(""); // Store the wish in the state
    const [wishSent, setWishSent] = useState(false); // Track whether the wish has been sent

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Send the form data to the API route
        const response = await fetch("/api/sendwish", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ wish }),
        });

        const data = await response.json();

        if (data.success) {
            setWishSent(true); // Mark the wish as sent
        } else {
            alert("Failed to send your wish.");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-teal-200 to-purple-300 p-8">
            <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-2xl relative overflow-hidden">
                {/* Envelope (for display only) */}
                <div className="absolute top-0 left-0 right-0 bg-white p-4 rounded-md border-2 border-gray-300 shadow-xl z-10">
                    <div className="flex justify-between items-center">
                        <div className="font-semibold text-xl text-blue-800">To: H S Shreya</div>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                        <p>Jammanakodla Hadinabal,</p>
                        <p>581361</p>
                        <p>India</p>
                    </div>
                </div>

                {/* Postmark Design */}
                <div className="absolute top-4 left-4 text-xs text-gray-500 rotate-12">
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Postmark</span> - <span>November 2024</span>
                    </div>
                </div>

                {/* Letter Body */}
                <div className="mt-20">
                    <div className="text-xl font-serif text-gray-800 text-center mb-6">
                        <p>Dear Shreya,</p>
                    </div>
                    <div className="text-lg text-gray-700 font-serif leading-relaxed">
                        <p>
                            My dearest Putta,
                        </p>
                        <p className="mt-4">
                            I hope this letter finds you in the best of health and spirits. I’ve been thinking a lot about how lucky I am to have you in my life. You have a heart that shines brighter than the stars, and your presence makes the world a better place. I just wanted to take a moment to send you my warmest and most heartfelt wishes. May this year bring you endless joy, love, and unforgettable moments. You deserve all the happiness in the world, and more.
                        </p>
                        <p className="mt-4">
                            I am so grateful for the laughter, the adventures, and the memories we've created together. The bond we share is something truly special, and I wouldn't trade it for anything. You have an incredible way of making everything better just by being you. You inspire me every single day, Putta, and I am in awe of the way you chase your dreams with so much passion and strength.
                        </p>
                        <p className="mt-4">
                            Your kindness and your beautiful soul touch everyone around you, and I feel blessed to be one of those people. I have no doubt that the universe has amazing things in store for you. Whatever you set your mind to, I know you'll accomplish, because you are nothing short of amazing.
                        </p>
                        <p className="mt-6">
                            With all my love,
                            <br />
                            Your forever friend, Sanju (Putta’s number one fan)
                        </p>
                    </div>

                    {/* Wish Form */}
                    <div className="mt-10 border-t pt-6">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">Make Your Wish!</h2>
                        {!wishSent ? (
                            <form onSubmit={handleSubmit}>
                                <textarea
                                    className="w-full p-4 border border-gray-300 rounded-lg shadow-md resize-none"
                                    placeholder="Write your wish here..."
                                    rows="4"
                                    value={wish}
                                    onChange={(e) => setWish(e.target.value)} // Capture the wish text
                                />
                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                                >
                                    Send Your Wish
                                </button>
                            </form>
                        ) : (
                            <div className="text-center">
                                <p className="text-xl font-bold text-gray-800">Your wish has been sent!</p>
                                <button
                                    onClick={() => setWishSent(false)} // Allow to reset and submit another wish
                                    className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                                >
                                    Send Another Wish
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
