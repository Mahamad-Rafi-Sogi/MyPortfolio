import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  type: "image" | "video" | "gif";
  source: string;
  title: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  {
    type: "gif",
    source: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3l3bHJpNWRzaWN5YnZpcm9qeWo4NnpnaTZydWN3MmU0bGZ4b3Q1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rpl1sod1vCXK0L2SUN/giphy.webp",
    title: "Techie",
    description: "Passionate about technology and always exploring new innovations.",
    link: "https://example.com/product1",
  },
  {
    type: "gif",
    source: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDI5OHUzY2F2Z3puNTUydDIyMXdpZGhrYXl2Z2xldGdpY3F4aXcxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kLT22uVf7dIMPWn7cb/giphy.gif",
    title: "Wanderlust",
    description: "A glimpse into my travel adventures and the beauty of nature.",
    link: "https://example.com/product2",
  },
  {
    type: "gif",
    source: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2VtOXJreXoza2ZsdHQwbjAwcHJmbHVxZTdpaGd4aTM3dXE5aXdtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lW5goaThIFAQLFk3in/giphy.gif",
    title: "Chai / Coffee Lover",
    description: "Enjoys the perfect brew and connecting over a cup of coffee.",
    link: "https://example.com/product3",
  },
  {
    type: "gif",
    source: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGl1N2VnYTY5NWFid3I4bjBuZWFhcjMxdmwya2swOGs4ZGhrY3EyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1vlBgKjXEz1jTtsuiH/giphy.webp",
    title: "DIY Projects",
    description: "Working on creative and hands-on projects at home.",
    link: "https://example.com/product3",
  },
  {
    type: "gif",
    source: "https://media1.giphy.com/media/9BPi7RYeWwXJvq7FsZ/giphy.webp?cid=790b76117cdzdyvy4q93uvhg9cahpujrxut9f4t3ybo8hd9u&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    title: "Playing Chess",
    description: "I enjoy playing chess in my free time, as it helps sharpen my strategic thinking and decision-making skills.",
    link: "https://example.com/product3",
  }
];

export const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="carousel" className="carousel-container py-20 bg-white dark:bg-darkBg transition-colors duration-300">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-darkText">
        Interests and Passions
      </h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide px-4">
              <div className="bg-white dark:bg-darkCard rounded-lg overflow-hidden transition-colors duration-300">
                {slide.type === "image" ? (
                  <img
                    src={slide.source}
                    alt={slide.title}
                    className="w-full h-[500px] object-cover"
                  />
                ) : slide.type === "video" ? (
                  <iframe
                    src={slide.source}
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={slide.title}
                  ></iframe>
                ) : (
                  <img
                    src={slide.source}
                    alt={slide.title}
                    className="w-full h-[600px] object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-darkText">
                    {slide.title}
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        /* Custom styles for slider dots and arrows in dark mode */
        .slick-dots li button:before {
          color: #718096;
          opacity: 0.75;
          transition: all 0.3s ease;
        }
        .slick-dots li.slick-active button:before {
          color: #4A5568;
          opacity: 1;
        }
        .dark .slick-dots li button:before {
          color: #9CA3AF;
        }
        .dark .slick-dots li.slick-active button:before {
          color: #D1D5DB;
        }
        .slick-prev:before,
        .slick-next:before {
          color: #4A5568;
          opacity: 0.75;
          transition: all 0.3s ease;
        }
        .dark .slick-prev:before,
        .dark .slick-next:before {
          color: #D1D5DB;
        }
        .slick-prev:hover:before,
        .slick-next:hover:before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
