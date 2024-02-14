import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Tippy from "@tippyjs/react";

export default function Clips({ videos }: {
  videos: any;
}) {

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {videos
        ? videos
          .sort((a: videoData, b: videoData) => b.view_count - a.view_count)
          .map((_: videoData, __: number) => (
            <SwiperSlide className="hover:scale-[1.03] duration-200 p-4 shadow-lg hover:shadow-xl transition-all rounded-lg w-full bg-[#191932]/20 " key={__}>
              <a
                href={_.url}
                target="_blank"
                rel="noreferrer"
              >
                <img alt="banner" src={_.thumbnail_url} width="1024" className="rounded-lg" height="512" />

                <p className="text-md text-white mt-4">
                  <span className="text-sm text-white/50 bg-black/25 px-2 py-1 rounded-md mr-1">
                    {_.title}
                  </span>
                </p>
                <div className="mt-5 flex justify-end w-full h-full items-center">
                  <div className="flex w-full justify-between items-center">
                    <Tippy
                      content={"İzlenme"}
                      arrow={false}
                      animation="shift-away"
                    >
                      <div className="flex items-center">
                        <p className="text-sm">
                          <i className="fa fa-eye mr-2" />
                        </p>
                        <p>{_.view_count}</p>
                      </div>
                    </Tippy>
                    <Tippy
                      content={"Oluşturan"}
                      arrow={false}
                      animation="shift-away"
                    >
                      <div className="flex items-center justify-end">
                        <p>{_.creator_name || "Bilinmiyor"}</p>
                        <p className="text-sm">
                          <i className="fa fa-crown ml-2" />
                        </p>
                      </div>
                    </Tippy>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))
        : Array.from({ length: 6 }).map((_, __) => (
          <SwiperSlide>
            <div
              key={__}
              className="bg-[#191932]/20 p-4 rounded-lg w-full"
            >
              <div className="bg-[#191932]/50 animate-pulse w-full h-[512px] rounded-md" />
              <div className="mt-5 flex w-full justify-between items-center">
                <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
              </div>
            </div>
          </SwiperSlide>
        ))
      }

    </Swiper>
  );
}

interface videoData {
  view_count: number;
  thumbnail_url: string;
  title: string;
  url: string;
  creator_name: string;
}