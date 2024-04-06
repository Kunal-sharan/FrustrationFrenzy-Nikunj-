"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
import bg from "./bg01.png";
import bgc1 from "../../public/ffzy.png";
import rage from "../../public/rageroom.jpg";
import info from "../../public/info.jpg";
import sess from "../../public/session.jpg";
import Link from "next/link";
import bg_footer from "../../public/footer_bg.png";
import Unleash from "../Components/Unleash";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import Icons from "../Components/Icons";

gsap.registerPlugin(ScrollTrigger);
const MainPage = () => {
  async function fetchData() {
    try {
      const response = await fetch('../api/connect');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  //fetchData();
  const [showImage, setShowImage] = useState(false);
  const [opacity, setOpacity] = useState(0);

  // Spring animation configuration
  const imageSpring = useSpring({
    opacity: showImage ? 1 : 0,
    transform: showImage ? "translateX(0)" : "translateX(-1000px)",
    config: config.slow,
    onRest: () => {
      setOpacity(showImage ? 1 : 0);
    },
  });

  useEffect(() => {
    // Trigger animation when the component mounts
    setShowImage(true);
  }, []);

  const refs = useRef([]);

  // const ref = useRef(null);

  refs.current = [];

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  // useEffect(() => {
  //   gsap.from(ref.current, {
  //     duration: 1,
  //     x: "50vw",
  //     ease: "power1.out",
  //   });
  // }, []);

  useEffect(() => {
    refs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full flex-col p-0 m-0">
      <div className="w-full flex place-content-center  ">
        <div className=" w-full h-[79vh] flex place-content-start relative">
          <div
            className="w-full h-[95vh] bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('./bg01.jpg')" }}
          >
            <Image src={bg} className="w-full h-5/6" />
          </div>
          <div className="w-1/4 h-full absolute bg-white/20 backdrop-blur-lg grid place-content-start  duration-500 ease-in p-4">
            <animated.div style={imageSpring}>
              <div className="rounded-3xl grid place-content-center">
                <Image
                  src={bgc1}
                  className="w-2/3 h-full  drop-shadow-xl  rounded-3xl"
                />
              </div>
              <div className="m-2 text-white">
                Welcome to Frustration Frenzy, a sanctuary of holistic
                well-being and self-discovery. Our journey began in 2023, driven
                by the founder&apos; own search for inner peace and balance
                amidst the chaos of modern life. What started as a humble home
                and hobby venture soon blossomed into a global phenomenon, as
                our products found their way into homes across India.
              </div>
            </animated.div>
          </div>
        </div>
      </div>
      <div className="w-full m-8 px-8 font-bold text-6xl text-dark-green text-center font-dancing">
        Explore and Immerse yourself in Peace
      </div>
      <div
        className="flex gap-x-2 p-0 flex-row place-content-evenly"
        ref={addToRefs}
      >
        <div className="w-1/4 h-1/3 flex flex-col gap-4 place-content-center ">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full">
              <Image src={sess} />
            </div>
            <div className="text-white text-2xl font-extrabold font-dancing absolute">
              Marketing Events
            </div>
          </div>
          <div className="text-dark-green w-full text-center p-4 text-3xl font-crimson">
            Events
          </div>
          <Link href="./sessions">
            <div className="text-black w-full flex justify-center">
              <button className=" p-4 w-1/2 bg-sec-red text-white-green ">
                Explore
              </button>
            </div>
          </Link>
        </div>
        <div className="w-1/4 h-1/3 flex flex-col gap-4 place-content-center ">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full">
              <Image src={rage} />
            </div>
            <div className="text-white text-2xl font-extrabold font-dancing absolute">
              Release Your Anger
            </div>
          </div>

          <div className="text-dark-green w-full text-center p-4 text-3xl font-crimson">
            Smash Room
          </div>

          <Link href="/ragebooking">
            <div className="text-black w-full flex justify-center">
              <button className=" p-4 w-1/2 bg-sec-red text-white-green ">
                Explore
              </button>
            </div>
          </Link>
        </div>
        <div className="w-1/4 h-1/3 flex flex-col gap-4 place-content-center ">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full">
              <Image src={info} />
            </div>
            <div className="text-white text-2xl font-extrabold absolute font-dancing">
              Gift Your Loved Ones
            </div>
          </div>
          <div className="text-dark-green w-full text-center p-4 text-3xl font-crimson">
            Products
          </div>
          <Link href="/product">
            <div className="text-black w-full flex justify-center">
              <button className=" w-1/2 p-4  bg-sec-red text-white-green ">
                Explore
              </button>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="my-8" ref={addToRefs}>
        <VideoPage />
      </div> */}
      <div ref={addToRefs}>
        <Unleash />
      </div>
      <div className="my-8" ref={addToRefs}>
        <Image src={bg_footer} className="w-full h-5/6" />
      </div>

      <div className="w-full flex flex-col" ref={addToRefs}>
        <div className="text-center text-4xl font-bold text-black p-8 border-b-4 rounded-xl border-black border-solid mb-4 mx-28">
          Follow US@FrustrationFrenzy
        </div>
        <div className=" flex flex-row  ">
          <div className="flex place-content-center flex-col px-40 py-8 gap-8 w-2/3">
            <Link href="/aboutUs">
              <div className="text-black  underline ">About Us</div>
            </Link>
            <Link href="/contactUs">
              <div className="text-black  underline ">Contact Us</div>
            </Link>
            <Link href="/termsAndConditions">
              <div className="text-black  underline">Terms & Conditions</div>
            </Link>
            <div className="text-black underline ">Privacy Policy</div>
            <Link href = "/cancelation">
            <div className="text-black underline ">
              Cancellation
            </div>
            </Link>
          </div>
          <div className="flex flex-col gap-8 place-content-center justify-center align-middle w-full px-64">
            <div className="text-black text-center text-xl">Become Member</div>
            <div>
              <input
                className="w-full border-solid border-4 border-dark-green p-4 "
                placeholder="Email"
              />
            </div>
            <div className="w-full text-center text-lg text-white-green bg-dark-green p-4 hover:bg-sec-red ">
              <button>SUBCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Icons />
      </div>
    </div>
  );
};

export default MainPage;
