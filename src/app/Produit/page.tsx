"use client";

import { Typography } from "@/components";
import { CardServices,dataProduit } from "@/lib/constant";
import React, { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

export default function ProduitPage() {
  return (
    <main className="min-h-[100dvh]">
      <section className="container py-[20vh]">
        <Typography variant="h1" className="text-secondary-500 mb-16 text-center">
          Nos produit
        </Typography>
        <VerticalTimeline lineColor="" className="-z-50">
          {dataProduit.map((item, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                id={item.id}
                contentStyle={{
                  boxShadow: "none",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                iconStyle={{
                  background: "rgb(15, 15, 15)",
                  fontSize: "1.5rem",
                  color:"rgb(245, 191, 4)",
                }}
                icon={item.icon}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  <Typography
                    variant="h3"
                    className="text-secondary-500"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-secondary-100"
                  >
                    {item.description}
                  </Typography>
                </motion.div>
              </VerticalTimelineElement>
            </Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </main>
  );
}
