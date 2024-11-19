import BigTitle from "@/components/common/BigTitle";
import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <BigTitle text={"Contact"} className={"bg-contactBg"} />
      <div className="flex flex-col md:flex-row justify-center md:justify-between px-20 my-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-orange-400">Opening Hours</h1>
          <p className="font-bold text-2xl">Weekdays: 12:00 - 23:59</p>
          <p className="font-bold text-2xl">Friday: 12:00 - 23:59</p>
          <p className="font-bold text-2xl">Saturday: 12:00 - 23:59</p>
        </div>
        <div className="my-10 py-6 flex flex-col justify-center items-center">
          <h1 className="text-3xl text-orange-400 font-bold">Reservations</h1>
          <button className="text-orange-400 font-bold text-2xl ">
            <a
              href="tel:01855745531"
              className="flex items-center justify-center gap-3"
            >
              <PhoneCall /> +8801855745531
            </a>
          </button>
          <button className="text-orange-400 font-bold text-2xl ">
            <a
              href="tel:01855745531"
              className="flex items-center justify-center gap-3"
            >
              <PhoneCall /> +8801855745531
            </a>
          </button>
          <button className="text-orange-400 font-bold text-2xl ">
            <a
              href="mailto:programmermoto@gmail.com"
              className="flex items-center justify-center gap-3"
            >
              <Mail /> programmermoto@gmail.com
            </a>
          </button>
        </div>
        <div className="w-full px-4 flex flex-col items-center justify-center h-80 border-0">
          <iframe
            className=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4106913493993!2d92.0485086743767!3d21.294782480421986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc5e07879c025%3A0x32d5199cbe8410ca!2sReju%20Khal%20Bridge!5e0!3m2!1sen!2sbd!4v1731858422162!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default page;
