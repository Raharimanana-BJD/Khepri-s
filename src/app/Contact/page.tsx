"use client"

import React from "react";
import { useInView } from "react-intersection-observer";
function ContactPage() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <div className="h-screen pt-[20vh]">
      <div ref={ref} className={`transition-opacity ${inView ? "opacity-1" : "opacity-0"}`}>
         <span aria-label="Wave">👋</span>
      </div>
    </div>
  );
}

export default ContactPage;
