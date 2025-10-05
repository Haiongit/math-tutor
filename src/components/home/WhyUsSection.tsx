"use client";

import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export function WhyUsSection() {
  return (
    <div className="py-32 bg-[#F4F6F8] flex flex-col items-center self-stretch">
      <div className="text-center relative w-full">
        <div className="absolute rotate-[-20] xl:right-[20%] translate-x-[50%] top-[50px] right-[10%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="64"
            viewBox="0 0 103 64"
            fill="none"
          >
            <g clipPath="url(#clip0_11100_37295)">
              <path
                d="M15.5563 45.7488L15.1646 44.6727C14.0941 41.7314 15.6143 38.468 18.555 37.3977C21.4957 36.3274 24.7595 37.8495 25.8307 40.7924C28.8485 49.0839 38.0442 53.3748 46.3278 50.3598C54.613 47.3442 58.897 38.1453 55.8798 29.8554C54.8092 26.9141 56.331 23.6501 59.2717 22.5798C62.2124 21.5095 65.4762 23.0316 66.5474 25.9745C69.5652 34.266 78.7593 38.5575 87.043 35.5425C95.3282 32.5269 99.6122 23.328 96.5949 15.0381L96.2033 13.9621L86.5107 17.4899L86.9023 18.5659C87.9734 21.5088 86.4522 24.7744 83.5115 25.8447C80.5708 26.915 77.3064 25.3913 76.2352 22.4484C73.2184 14.1548 64.0243 9.86331 55.7407 12.8783C47.4554 15.8939 43.1709 25.0912 46.1882 33.3811C47.2593 36.324 45.738 39.5896 42.7973 40.6599C39.8567 41.7302 36.5922 40.2065 35.5211 37.2636C32.5023 28.9743 23.3082 24.6828 15.023 27.6983C6.73932 30.7133 2.45476 39.9107 5.47204 48.2006L5.86367 49.2766L15.5563 45.7488Z"
                fill="#FF3DE0"
              />
            </g>
            <defs>
              <clipPath id="clip0_11100_37295">
                <rect
                  width="96.9697"
                  height="32"
                  fill="white"
                  transform="translate(0 33.1663) rotate(-20)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute rotate-[-20] xl:right-[8%] translate-x-[50%] top-[150px] hidden xl:flex">
          <svg
            width="80"
            height="76"
            viewBox="0 0 80 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_13057_44503)">
              <path
                d="M79.8274 28.7549C78.3303 24.1738 67.5645 23.5438 55.7818 27.3476C53.0276 28.2375 50.465 29.291 48.1694 30.441C48.5606 27.9159 48.7764 25.1683 48.7764 22.292C48.7764 9.98276 44.8461 0.00292969 39.9987 0.00292969C35.1512 0.00292969 31.221 9.98276 31.221 22.292C31.221 25.1683 31.4368 27.9159 31.8279 30.441C29.5323 29.291 26.9697 28.2375 24.2155 27.3476C12.4382 23.5438 1.67248 24.1738 0.175359 28.7549C-1.32176 33.336 7.01354 40.134 18.7963 43.9378C21.5504 44.8277 24.2479 45.471 26.7836 45.8812C24.9735 47.6959 23.1743 49.7921 21.4722 52.1189C14.1916 62.0773 11.4671 72.4485 15.3893 75.2792C19.3115 78.1099 28.394 72.3332 35.6746 62.3721C37.3767 60.0454 38.8252 57.6945 40.0041 55.4241C41.1802 57.6945 42.6314 60.0454 44.3336 62.3721C51.6141 72.3305 60.6966 78.1099 64.6188 75.2792C68.541 72.4485 65.8165 62.08 58.5359 52.1189C56.8338 49.7921 55.0346 47.6959 53.2245 45.8812C55.7629 45.471 58.4577 44.8277 61.2119 43.9378C72.9946 40.134 81.3299 33.336 79.8328 28.7549H79.8274Z"
                fill="#0F46C4"
              />
            </g>
            <defs>
              <clipPath id="clip0_13057_44503">
                <rect
                  width="80"
                  height="76"
                  fill="white"
                  transform="translate(0 0.000244141)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute xl:left-[20%] left-[5%] translate-x-[50%] top-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <g clipPath="url(#clip0_11100_37291)">
              <path
                d="M56 28.0012C42.1536 24.6591 31.3411 13.8486 28.001 0.000244141C24.6589 13.8486 13.8484 24.6591 0 28.0012C13.8464 31.3433 24.6589 42.1538 28.001 56.0022C31.3431 42.1538 42.1536 31.3433 56.002 28.0012H56Z"
                fill="#FF6B00"
              />
            </g>
            <defs>
              <clipPath id="clip0_11100_37291">
                <rect
                  width="56"
                  height="56"
                  fill="white"
                  transform="translate(0 0.000244141)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute xl:left-[8%] left-[5%] translate-x-[50%] top-[190px] hidden xl:flex">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_13057_44507)">
              <path
                d="M64 64.0002H41.923C41.9207 40.8833 23.1147 22.0772 0 22.0772V0.000244141C35.3464 0.000244141 64 28.6539 64 64.0002Z"
                fill="#C7FF03"
              />
            </g>
            <defs>
              <clipPath id="clip0_13057_44507">
                <rect
                  width="64"
                  height="64"
                  fill="white"
                  transform="translate(0 0.000244141)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className={`${bricolageGrotesque.className} md:text-[64px] text-[40px] md:leading-[80px] leading-0 font-semibold text-[#212B36]`}
        >
          Tại Sao Chúng Tôi
        </div>
        <div
          className={`${bricolageGrotesque.className} md:text-[64px] text-[40px] md:leading-[80px] leading-20 font-semibold text-[#212B36]`}
        >
          Khác Biệt
        </div>
      </div>
      <div className="text-secondary max-w-[550px] text-center">
        Chúng tôi không chỉ dạy toán, chúng tôi truyền cảm hứng và thắp sáng
        niềm đam mê toán học trong mỗi bạn nhỏ
      </div>
      <div className="pt-16 flex items-start justify-center self-stretch gap-8 md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto w-full lg:px-10 px-5 md:flex-row flex-col">
        <div className="flex-1 flex flex-col p-8 items-center gap-6 bg-white rounded-[40px] border">
          <img className="w-60" src="/images/home/img_20.png" />
          <div className="flex flex-col gap-2 items-start">
            <div
              className={`${bricolageGrotesque.className} text-2xl font-semibold self-stretch`}
            >
              Học ở bất cứ đâu
            </div>
            <div className="text-secondary text-xl">
              Học toán mọi lúc, mọi nơi, chỉ cần có internet.
            </div>
            <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <path
                  d="M27.5192 0.5V17.1143L28.3727 16.2607L39.2662 5.36621L43.2985 9.39844L32.4059 20.2939L31.5524 21.1475H48.1666V26.8525H31.5524L32.4059 27.7061L43.2985 38.5996L39.2662 42.6318L28.3727 31.7393L27.5192 30.8857V47.5H21.8141V30.8857L20.9606 31.7393L10.0651 42.6318L6.03284 38.5996L16.9274 27.7061L17.7809 26.8525H1.16663V21.1475H17.7809L6.03284 9.39941L10.066 5.36621L21.8141 17.1143V0.5H27.5192Z"
                  stroke="#212B36"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-8 items-center gap-6 bg-white rounded-[40px] md:mt-20 mt-0 border">
          <img className="w-60" src="/images/home/img_21.png" />
          <div className="flex flex-col gap-2 items-start">
            <div
              className={`${bricolageGrotesque.className} text-2xl font-semibold self-stretch`}
            >
              Giảng viên giàu kinh nghiệm
            </div>
            <div className="text-secondary text-xl">
              Đội ngũ giáo viên chuyên môn cao, truyền cảm hứng học toán.
            </div>
            <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <path
                  d="M27.5192 0.5V17.1143L28.3727 16.2607L39.2662 5.36621L43.2985 9.39844L32.4059 20.2939L31.5524 21.1475H48.1666V26.8525H31.5524L32.4059 27.7061L43.2985 38.5996L39.2662 42.6318L28.3727 31.7393L27.5192 30.8857V47.5H21.8141V30.8857L20.9606 31.7393L10.0651 42.6318L6.03284 38.5996L16.9274 27.7061L17.7809 26.8525H1.16663V21.1475H17.7809L6.03284 9.39941L10.066 5.36621L21.8141 17.1143V0.5H27.5192Z"
                  stroke="#212B36"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-8 items-center gap-6 bg-white rounded-[40px] border">
          <img className="w-60" src="/images/home/img_22.png" />
          <div className="flex flex-col gap-2 items-start">
            <div
              className={`${bricolageGrotesque.className} text-2xl font-semibold self-stretch`}
            >
              Các lớp học linh hoạt
            </div>
            <div className="text-secondary text-xl">
              Lịch học phù hợp mọi thời gian biểu, cá nhân hóa từng học sinh.
            </div>
            <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <path
                  d="M27.5192 0.5V17.1143L28.3727 16.2607L39.2662 5.36621L43.2985 9.39844L32.4059 20.2939L31.5524 21.1475H48.1666V26.8525H31.5524L32.4059 27.7061L43.2985 38.5996L39.2662 42.6318L28.3727 31.7393L27.5192 30.8857V47.5H21.8141V30.8857L20.9606 31.7393L10.0651 42.6318L6.03284 38.5996L16.9274 27.7061L17.7809 26.8525H1.16663V21.1475H17.7809L6.03284 9.39941L10.066 5.36621L21.8141 17.1143V0.5H27.5192Z"
                  stroke="#212B36"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
