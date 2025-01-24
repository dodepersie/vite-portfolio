import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";

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
      const formattedDateTime = currentDate
        .toLocaleString("en-US", options)
        .replace("at", "-");
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

      <footer className="footer footer-center p-5 text-gray-50 pb-24">
        <div className="grid grid-flow-col gap-4">
          <Link
            to="https://www.facebook.com/Dode404"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-125"
          >
            <AiFillFacebook size="2rem" />
          </Link>
          <Link
            to="https://github.com/DodePersie"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-125"
          >
            <AiFillGithub size="2rem" />
          </Link>
          <Link
            to="https://instagram.com/t4kezy"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-125"
          >
            <AiFillInstagram size="2rem" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mahadisaputra"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-125"
          >
            <AiFillLinkedin size="2rem" />
          </Link>
          <Link
            to="https://wa.me/+6287862191120?text=Hi,%20i%20want%20to%20use%20your%20service%20to%20develop%20our%20site"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out transform hover:scale-125"
          >
            <AiOutlineWhatsApp size="2rem" />
          </Link>
        </div>

        <div className="flex justify-items-start lg:items-center">
          <p className="text-xs lg:text-[16px] tracking-wide">
            By Mahadi Saputra @ {currentTime} ✨
          </p>
        </div>
      </footer>
    </>
  );
};
