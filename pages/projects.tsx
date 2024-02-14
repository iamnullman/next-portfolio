import Link from "next/link";
import Image from "next/image";
import projects from "lib/projects";

import { useEffect, useState } from "react";
import Head from "next/head"
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export default function ProjectsPage({ t }: { t: any }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="projects" className="mt-20" data-aos="fade-right">
      <Head>
        <title>Projects | NullMan Portfolio</title>
      </Head>
      <div id="title" className="relative">
        <h2 className="text-5xl ml-9 absolute pointer-events-none left-24 -top-4 z-0 -translate-x-1/2 transform font-bold uppercase text-heading opacity-15 text-white opacity-20">{t("projects")}</h2>
        <h2 className="text-3xl font-semibold text-white ml-[18px] -pt-4">{t("projects")}</h2>
      </div>
      <div id="body">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 w-full gap-2 items-center mt-4">
          {projects.map((item, index) => (
            <Link key={index} href={item.status == 1 ? item.url : "#"} target={item.status == 1 ? "_blank" : "_self"} className="cursor-pointer w-full bg-zinc-900/90 p-4 rounded-lg hover:bg-zinc-400/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200">
              <div className="mt-4">
                <div className="flex items-center space-x-4">
                  <Image src={item.bg} alt={item.name} width={300} height={300} className="h-12 w-10 shadow-lg rounded-lg" />
                  <div>
                    <p className="font-semibold text-xl">{item.name}</p>
                    <span className="text-xs font-normal text-gray-400">{item.location}</span>
                  </div>
                </div>
                <p className="text-sm max-h-24 mt-4 overflow-auto font-normal h-24">{t("lang") == "tr" ? item.text_tr : item.text}</p>
              </div>
              <p className="text-xs italic mt-2">
                {item.status == 1 ? <i className="fal fa-arrow-up-right-from-square mr-1" /> : ""}
                {item.status == 1 ? item.url : item.status == 2 ? "end or start?" : item.status == 3 ? "coming soon" : "undefined"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
