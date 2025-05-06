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
    <div id="carousel" className="carousel-container py-20">
      <h2 className="text-2xl font-bold text-center mb-6">Interests and Passions</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <a target="_blank" rel="noopener noreferrer">
              {/* Render different content based on slide type */}
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
              <h3 className="text-center text-lg font-semibold mt-4">
                {slide.title}
              </h3>
              <p className="text-center text-gray-600 mt-2">
                {slide.description}
              </p>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};