"use client";

import React, { useMemo, useState } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { CourseTab } from "@/components/courses/course-tab";
import { useCourses } from "@/hooks/queries/course";
import { CourseFilters, SortOption } from "@/api/types/course.type";
import { useRouter } from "next/navigation";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export default function CourseTabComponent() {
  const router = useRouter();

  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const courseTabFilters: CourseFilters = useMemo(() => {
    const filters: CourseFilters = {
      sort_by: SortOption.POPULAR,
    };

    if (selectedLabel) {
      filters.label = [selectedLabel];
    }

    return filters;
  }, [selectedLabel]);
  const {
    data: courseTabData,
    isLoading: isLoadingCourseTab,
    error: errorCourseTab,
  } = useCourses(courseTabFilters);
  const handleCourseClick = (courseId: string) => {
    router.push(`/course/${courseId}`);
  };

  const handleLabelChange = (label: string | null) => {
    setSelectedLabel(label);
  };

  return (
    <div className="py-32 flex flex-col items-center md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto md:px-10 px-5">
      <div className="flex lg:items-end self-stretch lg:gap-20 flex-col lg:flex-row md:mb-[48px] mb-4 items-start">
        <div className="hidden xl:block">
          <svg
            width="303"
            height="148"
            viewBox="0 0 303 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M134.844 57.0577C101.096 66.1103 91.615 47.0006 105.342 19.7676C83.3186 46.4937 63.1262 41.1491 58.9329 10.2925C61.1523 40.711 43.6549 52.292 17.3295 33.0633C38.5509 55.4493 33.6333 76.3333 0 77.4285C31.1155 82.4351 39.3964 102.521 15.0542 122.626C38.6255 108.232 57.2295 117.892 55.4452 147.509C63.8691 120.639 84.2791 116.412 102.277 140.434C91.2109 115.855 105.034 100.027 133.635 104.712C109.038 91.7162 111.736 70.535 134.847 57.0577H134.844Z"
              fill="#FF6B00"
            />
            <path
              d="M268.07 67.9085H248.956L262.469 54.319L256.775 48.592L243.26 62.1814V42.9631H235.204V62.1814L221.688 48.592L215.992 54.319L229.508 67.9085H210.394V76.0081H229.508L215.992 89.5976L221.688 95.3226L235.204 81.7352V100.953H243.26V81.7352L256.775 95.3226L262.469 89.5976L248.956 76.0081H268.07V67.9085Z"
              fill="#FF3DE0"
            />
            <path
              d="M36.5549 51.4279H58.2096C58.2096 51.4279 57.4927 32.0335 69.6644 32.0335C93.0202 32.0335 80.5949 140.144 137.091 140.158C178.597 140.168 171.654 71.7733 193.404 71.7733C215.153 71.7733 203.353 140.158 237.981 140.158C257.458 140.158 260.816 116.547 272.058 116.547C286.015 116.547 285.968 140.158 285.968 140.158H303C303 140.158 303.466 94.1092 271.875 94.1092C254.773 94.1092 251.516 112.972 240.66 112.972C218.735 112.972 233.943 40.3605 192.856 40.3605C155.35 40.3605 161.468 101.591 136.218 101.591C110.819 101.594 115.974 0.491211 72.4173 0.491211C36.5482 0.491211 36.5549 51.4279 36.5549 51.4279Z"
              fill="#0F46C4"
            />
            <path
              d="M119.705 38.015C117.125 33.2598 105.147 34.7704 92.9533 41.3884C90.1032 42.9362 87.4971 44.6255 85.2046 46.3667C85.1212 43.4964 84.7994 40.4162 84.214 37.238C81.7085 23.6368 75.3514 13.415 70.0163 14.4085C64.6811 15.4021 62.3867 27.2349 64.8922 40.8362C65.4776 44.0143 66.2744 47.0061 67.2189 49.7161C64.4582 48.9159 61.4233 48.2771 58.2109 47.8583C44.4744 46.0692 32.7536 48.9718 32.0383 54.3406C31.323 59.7094 41.8807 65.5125 55.6232 67.3005C58.8356 67.7193 61.9355 67.8773 64.8097 67.8108C63.187 70.187 61.6334 72.872 60.2336 75.7919C54.2474 88.2877 53.3598 100.306 58.2527 102.63C63.1457 104.954 71.9663 96.7092 77.9519 84.2103C79.3517 81.2905 80.4675 78.396 81.3028 75.6456C83.0594 77.9133 85.1352 80.2135 87.4822 82.4356C97.5223 91.9469 108.695 96.4713 112.436 92.5396C116.176 88.6079 111.067 77.7095 101.027 68.1952C98.6796 65.9731 96.2727 64.0256 93.9111 62.3914C96.6214 61.4179 99.4564 60.1547 102.307 58.6069C114.501 51.9889 122.291 42.769 119.711 38.0138L119.705 38.015Z"
              fill="#C7FF03"
            />
          </svg>
        </div>
        <div
          className={`${bricolageGrotesque.className} md:text-[64px] text-[40px] font-semibold md:leading-[80px] leading-12 lg:max-w-full max-w-[500px]`}
        >
          Các Khóa Học Nổi Bật
        </div>
        <div className="flex flex-col gap-4 max-w-[320px] mb-5">
          <div className="text-secondary text-xl">
            Tại đây, chúng tôi đã thiết kế các khóa học chuyên biệt để khơi dậy
            niềm đam mê và củng cố nền tảng toán học cho mọi lứa tuổi.
          </div>
        </div>
      </div>
      <CourseTab
        isHiddenTab={false}
        courses={courseTabData?.data || []}
        isLoading={isLoadingCourseTab}
        error={errorCourseTab}
        onCourseClick={handleCourseClick}
        onLabelChange={handleLabelChange}
        activeLabel={selectedLabel}
      />
    </div>
  );
}
