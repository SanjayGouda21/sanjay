"use client";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  // Array of images and videos for different sections
  const sections = [
    {
      title: "Together Us",
      description: "Special moments shared between us.",
      items: [
      { id: 2, type: "image", src: "/us/us2.jpg", alt: "Together Us 2" },
      { id: 3, type: "image", src: "/us/us3.jpg", alt: "Together Us Video 1" },
      { id: 4, type: "image", src: "/us/us4.jpg", alt: "Together Us 3" },
      { id: 5, type: "image", src: "/us/us5.jpg", alt: "Together Us 4" },
      { id: 6, type: "image", src: "/us/us6.jpg", alt: "Together Us Video 2" },
      { id: 7, type: "image", src: "/us/us7.jpg", alt: "Together Us 5" },
      { id: 8, type: "image", src: "/us/us8.jpg", alt: "Together Us 6" },
      { id: 9, type: "image", src: "/us/us9.jpg", alt: "Together Us Video 3" },
      { id: 10, type: "image", src: "/us/us10.jpg", alt: "Together Us 7" },
      { id: 11, type: "image", src: "/us/us11.jpg", alt: "Together Us 8" },
      { id: 12, type: "image", src: "/us/us12.jpg", alt: "Together Us Video 4" },
      { id: 13, type: "image", src: "/us/us13.jpg", alt: "Together Us 9" },
      ],
    },
    {
      title: "Ice Cream Parlour",
      description: "Bari Ice Cream ",
      items: [
        { id: 16, type: "image", src: "/ice/ice1.jpg", alt: "Ice Cream Parlour 1" },
        { id: 17, type: "image", src: "/ice/ice2.jpg", alt: "Ice Cream Parlour 2" },
        { id: 19, type: "image", src: "/ice/ice4.jpg", alt: "Ice Cream Parlour 1" },
        { id: 21, type: "image", src: "/ice/ice6.jpg", alt: "Ice Cream Parlour 3" },
      ],
    },
   
  ];

  // State for selected video (if you want to show a modal for videos)
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-300 to-pink-500 px-4 py-6">
      {/* Page Header */}
    

      {/* Sections */}
      {sections.map((section) => (
        <div key={section.title} className="mb-12">
          {/* Section Header */}
          <h2 className="text-4xl font-semibold mb-12 text-white flex items-center justify-center">
  <span className="flex-grow border-t border-white mx-4"></span> {/* Left Divider */}
  {section.title}
  <span className="flex-grow border-t border-white mx-4"></span> {/* Right Divider */}
</h2>

          {/* Gallery Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {section.items.map((item) => (
    <div
      key={item.id}
      className="relative group w-full h-64 rounded-lg overflow-hidden shadow-md cursor-pointer"
    >
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={item.alt}
          width={500}
          height={500}
          className="w-full h-full object-contain mx-auto bg-white"
        />
      ) : (
        <video
          src={item.src}
          className="w-full h-full object-contain"
          muted
          autoPlay
          loop
        ></video>
      )}
    </div>
  ))}
</div>

        </div>
      ))}

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
              {selectedVideo.alt}
            </h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
              <video
                src={selectedVideo.src}
                controls
                className="w-full h-full rounded-lg"
              ></video>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center mt-12 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a href="/" className="text-lg font-medium hover:text-purple-400 transition duration-300">Home</a>
            <a href="#videos" className="text-lg font-medium hover:text-purple-400 transition duration-300">Videos</a>
            <a href="#gallery" className="text-lg font-medium hover:text-purple-400 transition duration-300">Gallery</a>
            <a href="#about" className="text-lg font-medium hover:text-purple-400 transition duration-300">About</a>
          </div>

          {/* Footer Text */}
          <p className="mt-4 sm:mt-0 text-lg">
            Made with ❤️ for [Your Friend’s Name]
          </p>
        </div>
      </footer>
    </div>
  );
}
