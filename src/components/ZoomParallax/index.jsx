"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import im1 from "@/images/1.jpeg";
import im2 from "@/images/2.jpeg";
import im3 from "@/images/3.jpg";
import im4 from "@/images/4.jpg";
import im5 from "@/images/5.jpg";
import im6 from "@/images/6.jpg";
import im7 from "@/images/7.jpeg";
import { useScroll, useTransform, motion } from "framer-motion";

const ZoomParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: im1,
      scale: scale4,
    },
    {
      src: im2,
      scale: scale5,
    },
    {
      src: im3,
      scale: scale6,
    },
    {
      src: im4,
      scale: scale5,
    },
    {
      src: im5,
      scale: scale6,
    },
    {
      src: im6,
      scale: scale8,
    },
    {
      src: im7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale: scale }}
            className={styles.el}
          >
            <div className={styles.imgContainer}>
              <Image src={src} fill alt="" placeholder="blur" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ZoomParallax;
