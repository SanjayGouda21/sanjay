"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showCelebration, setShowCelebration] = useState(false);
  const audioRef = useRef(null); // Ref for audio element
  const [startedCelebration, setStartedCelebration] = useState(false); // State to track user interaction

  // Countdown logic
  useEffect(() => {
    const targetDate = new Date("2024-11-20T17:25:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        sendBirthdayEmail();
        setShowCelebration(true); // Trigger celebration when countdown ends
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const images = [
    "/us/us2.jpg",
    "/us/us3.jpg",
    "/us/us8.jpg",
    "/us/us7.jpg",
    "/us/us9.jpg",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const sendBirthdayEmail = async () => {
    const message = `
      My dearest Putta,
      I hope this letter finds you in the best of health and spirits. I’ve been thinking a lot about how lucky I am to have you in my life. You have a heart that shines brighter than the stars, and your presence makes the world a better place. I just wanted to take a moment to send you my warmest and most heartfelt wishes. May this year bring you endless joy, love, and unforgettable moments. You deserve all the happiness in the world, and more.
  
      The bond we share is something truly special, and I wouldn't trade it for anything. You have an incredible way of making everything better just by being you. You inspire me every single day, Putta, and I am in awe of the way you chase your dreams with so much passion and strength.
  
      Your kindness and your beautiful soul touch everyone around you, and I feel blessed to be one of those people. I have no doubt that the universe has amazing things in store for you. Whatever you set your mind to, I know you'll accomplish, because you are nothing short of amazing.
  
      With all my love,
      Your forever friend, Sanju (Putta’s number one fan)
    `;
  
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Shreya',
          message: message,
          recipientEmail: 'shreyahegde281@gmail.com', // Replace with actual recipient email
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log('Email sent successfully');
      } else {
        console.log('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  const handleStartCelebration = () => {
    // Trigger music play after user clicks
    if (audioRef.current) {
      audioRef.current.play(); // Play the celebration music
    }
    setStartedCelebration(true); // Mark that celebration has started
  };

  return (
    <div className="relative min-h-[91vh] w-full bg-gradient-to-b from-pink-300 to-purple-500 p-6 overflow-x-hidden">
      {/* Celebration Effect */}
      {showCelebration && !startedCelebration && (
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="relative text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-xl shadow-lg animate-bounce drop-shadow-lg">
              🎉 Happy Birthday Puttaaa ❤️  🎉
            </h1>
            {["yellow-300", "blue-300", "green-300", "red-300"].map((color, index) => (
              <div
                key={index}
                className={`absolute w-10 h-10 bg-${color} rounded-full animate-balloon`}
                style={{
                  top: index % 2 === 0 ? "-10px" : "unset",
                  bottom: index % 2 === 0 ? "unset" : "-10px",
                  left: index < 2 ? "-10px" : "unset",
                  right: index < 2 ? "unset" : "-10px",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Countdown Section */}
      <div className="text-center bg-white p-6 rounded-lg shadow-xl mb-20 max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">Countdown to Your Big Day!</h2>
        {!showCelebration ? (
          <div className="mt-4 text-2xl font-mono flex justify-center gap-4">
            <span className="px-6 py-3 bg-purple-100 rounded-lg shadow-lg">{timeLeft.days}d</span>
            <span className="px-6 py-3 bg-purple-100 rounded-lg shadow-lg">{timeLeft.hours}h</span>
            <span className="px-6 py-3 bg-purple-100 rounded-lg shadow-lg">{timeLeft.minutes}m</span>
            <span className="px-6 py-3 bg-purple-100 rounded-lg shadow-lg">{timeLeft.seconds}s</span>
          </div>
        ) : (
          <div className="text-center mt-4 relative z-20">
            {/* Replace button with clickable text */}
            <span
              onClick={handleStartCelebration}
              className="text-xl text-black font-semibold cursor-pointer hover:text-purple-600 transition duration-300"
            >
              Click here to start the celebration 🎉
            </span>
          </div>
        )}
      </div>

      {/* Image Slider */}
      <div className="max-w-screen-lg mx-auto p-2 mb-12">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="relative p-2 w-full aspect-square rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-500">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Birthday Message */}
      <div className="text-center mb-6">
        <p className="text-xl sm:text-2xl text-white font-medium">
          Thank you for being an amazing friend! Here’s to more memories and laughter!
        </p>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full text-center text-white py-4 bg-gradient-to-t from-purple-600 to-transparent">
        <p className="text-lg">
          Made with ❤️ for Shreya
        </p>
      </footer>

      {/* Background Music */}
      <audio ref={audioRef}>
        <source src="/song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Styles for Balloons Animation */}
      <style jsx>{`
        @keyframes balloon {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-balloon {
          animation: balloon 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
