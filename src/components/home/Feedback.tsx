"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FEEDBACK } from "@/contants/home";
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });


export function Feedback() {
  return (
    <section className="bg-white pt-32 mb-20 md:mb-[120px]">
      <div className="relative mx-auto text-center">
        <div
          className={`${bricolageGrotesque.className} md:text-[64px] text-[40px] md:leading-[80px] leading-0 font-semibold`}
        >
          Cộng Đồng Chia sẻ
        </div>
        <div className="text-secondary text-center my-8 md:mt-2">
          Những đánh giá giúp chúng tôi tốt lên mỗi ngày
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute top-0 left-0 w-0 md:w-50 xl:w-100 h-full z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute top-0 right-0 w-0 md:w-50 xl:w-100 h-full z-10 bg-gradient-to-l from-white to-transparent"></div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              1536: { slidesPerView: 5},
            }}
          >
            {FEEDBACK.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col justify-between p-8 rounded-[40px] bg-[#F4F6F8] min-h-[240px]">
                  <div className="text-left">{item.feedback}</div>
                  <div className="flex items-center gap-4 mt-8">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={item.image}
                    />
                    <div className="text-left">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-secondary">{item.username}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
