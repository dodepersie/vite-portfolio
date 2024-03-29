import React, { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import p2 from "./../../assets/2.jpg";

export const Footer = () => {
  const [currentTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const formattedDateTime = currentDate.toLocaleString("en-US", options).replace("at", "-");
      setCurrentDateTime(formattedDateTime);
    }, 1000);    

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="wave__wrapper">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>

      <footer className="footer footer-center p-5 text-gray-50">
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/DodePersie"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-125"
          >
            <AiFillFacebook size="2rem" />
          </a>
          <a
            href="https://github.com/DodePersie"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-125"
          >
            <AiFillGithub size="2rem" />
          </a>
          <a
            href="https://instagram.com/mahadisptr"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-125"
          >
            <AiFillInstagram size="2rem" />
          </a>
          <a
            href="https://wa.me/+6287862191120?text=Hi,%20i%20want%20to%20use%20your%20service%20to%20develop%20our%20site"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-125"
          >
            <AiOutlineWhatsApp size="2rem" />
          </a>
        </div>

        <div className="flex justify-items-start lg:items-center">
          <div className="avatar inline-block mr-1">
            <div className="w-8 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2 cursor-pointer">
              <img src={p2} alt="Mahadi Saputra's Avatar" />
            </div>
          </div>

          <p className="text-xs md:text-sm">
            By Mahadi Saputra @ {currentTime} ✨
          </p>
        </div>
      </footer>
    </>
  );
};
