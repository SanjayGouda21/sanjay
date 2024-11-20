"use client";
import { useState } from "react";

export default function Videos() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        { id: 1, title: "Snap Girl", src: "/vid/vid1.mp4", description: "Look! How cute I am" },
        { id: 4, title: "First Gift", src: "/vid/vid4.mp4", description: "The First gift I given to you. I still have that post receipt" },
        { id: 5, title: "Happy Birthday", src: "/vid/vid5.mp4", description: "The Edit X The Song !" },
        { id: 6, title: "First Cake Cut", src: "/vid/vid6.mp4", description: "Remember This Cake cut? " },
        { id: 7, title: "2 Dogs Playing", src: "/vid/vid7.mp4", description: "No comments" },
        { id: 8, title: "Study Time", src: "/vid/vid8.mp4", description: "See that 'tale alladsudu'" },
        { id: 9, title: "My Editing", src: "/vid/vid9.mp4", description: "Look At your pics! Dont say 'Im not beautiful'" },
        { id: 10, title: "Singer Shreya", src: "/vid/vid10.mp4", description: "Istu kaala ottigiddu.." },

        { id: 11, title: "2 cute dogs", src: "/vid/vid12.mp4", description: "Trip hodaga dog jote aaata aduttiruva hudugi" },

        { id: 12, title: "Water Love", src: "/vid/vid13.mp4", description: "Simple me playing with water" },

    ];

    return (
        <div className="min-h-[91vh] w-full bg-gradient-to-b from-purple-300 to-pink-500 px-2 py-4 ">
            {/* Header */}
         



            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-screen-xxl px-10 mx-auto mt-20">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="relative group w-full h-48 rounded-lg overflow-hidden shadow-md cursor-pointer"
                        onClick={() => setSelectedVideo(video)}
                    >
                        <video
                            src={video.src}
                            className="w-full h-full object-cover"
                            muted
                            autoPlay
                            loop
                        ></video>
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <h3 className="text-white text-lg font-semibold">{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Video Details */}
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-20 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-4 relative">
                        <button
                            className="absolute top-2 right-2 text-xl font-bold text-red-600"
                            onClick={() => setSelectedVideo(null)}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold text-purple-800 mb-2 text-center">
                            {selectedVideo.title}
                        </h2>
                        <p className="text-sm text-gray-600 mb-3 text-center">
                            {selectedVideo.description}
                        </p>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                            <video
                                src={selectedVideo.src}
                                controls
                                className="w-full h-full  rounded-lg"
                            ></video>
                        </div>
                    </div>
                </div>
            )}


            {/* Footer */}
    

        </div>
    );
}
