import { useEffect, useState } from "react";
import Link from "next/link";
import feedbacks from "../lib/feedbacks"
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';

export default function Feedbacks({t}: {t: any}) {


  return (
    <div id="feedback-component">
    
    <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {feedbacks.map((_: any, __: number) => (
            <SwiperSlide>
              <div className="w-64 mx-auto rounded-lg bg-zinc-900/90 hover:bg-zinc-200/20 p-5 text-zinc-100 font-light cursor-default mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50">
                    <img src={_.avatar} alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-300 line-clamp-1">{_.name}</h6>
                    <p className="text-xs text-gray-400">{_.role}</p>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight line-clamp-[10] hover:line-clamp-none"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>{t("lang") == "tr" ? _.desc_tr : _.desc}<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
    </div>
  );
}
