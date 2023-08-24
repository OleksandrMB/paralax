import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";
import "@glidejs/glide/dist/css/glide.theme.css";
import "./CoverflowCarousel.css";

const Slide = () => {
  return (
    <div className="glide__slide flex flex-col justify-center gap-[20px] bg-white px-[30px] py-[47px] h-[343px]">
      <img
        className="h-[245px] w-[381px]"
        src="/imgs/wowImg.png"
        alt="Healthcare platform img"
      />
      <span className="text-center text-[#222] text-[19px] font-bold font-epilogue-font leading-[140%]">
        Healthcare platform
      </span>
    </div>
  );
};

const CoverflowCarousel: React.FC = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 3,
      focusAt: "center",
      gap: 10,
      breakpoints: {
        800: {
          perView: 1,
        },
      },
    });

    glide.on(["mount.after", "run.after"], () => {
      const slides = document.querySelectorAll(".glide__slide");
      const activeSlide = document.querySelector(".glide__slide--active");

      slides.forEach((slide) => {
        slide.classList.remove(
          "glide__slide--left",
          "glide__slide--right",
          "glide__slide--inactive"
        );
        slide.classList.add("glide__slide--inactive");
      });

      activeSlide?.classList.remove("glide__slide--inactive");
      const prevSlide = activeSlide?.previousElementSibling;
      if (prevSlide) {
        prevSlide.classList.remove("glide__slide--inactive");
        prevSlide.classList.add("glide__slide--left");
      }

      const nextSlide = activeSlide?.nextElementSibling;
      if (nextSlide) {
        nextSlide.classList.remove("glide__slide--inactive");
        nextSlide.classList.add("glide__slide--right");
      }
    });

    glide.mount();
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          <Slide />
          <Slide />
          <Slide />
        </div>
      </div>
    </div>
  );
};

export default CoverflowCarousel;
