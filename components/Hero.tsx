import { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { tr, en } from "../lib/config.js";

export default function Hero({ t }: { t: any }) {
  return (
    <div id="hero" className="flex text-center md:text-left md:flex-row flex-col-reverse items-center space-x-4">
      <div>
        <h1 className="text-5xl font-semibold text-white">
          <span className="text-primary font-bold">{t("lang") == "tr" ? "Merhaba" : "Hi"},</span> {t("lang") == "tr" ? "Ben" : "I'm"} <Typewriter
            options={{
              strings: t("lang") == "tr" ? tr : en,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="mt-4 text-md text-gray-200">{t("description")}</p>
      </div>
      <img src="https://avatars.githubusercontent.com/u/73245847?v=4" alt="Hero" className="inset-0 rounded-full h-40 object-cover" />
    </div>
  );
}
