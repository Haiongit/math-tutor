import React from "react";
import "./index.css";
import { Banner } from "@/components/home/Banner";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { Feedback } from "@/components/home/Feedback";
import NewsletterSection from "@/components/abouts/NewsLetterSection";
import CourseTabComponent from "@/components/courses/components/CourseTabComponent";

function HomePage() {
  return (
    <div>
      <Banner />
      <CourseTabComponent />
      <WhyUsSection />
      <Feedback />
      <NewsletterSection />
    </div>
  );
}

export default HomePage;
