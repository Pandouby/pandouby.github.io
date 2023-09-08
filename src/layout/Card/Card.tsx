import { FC, ReactNode, useRef, useState } from "react";
import "./styles.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Button/button";
import { SiGithub } from "react-icons/si";

interface CardProps {
  title: string;
  children: any;
  offset?: number;
  style?: any;
  onClick?: any;
}

const Card: FC<CardProps> = ({
  title,
  children,
  offset = 0,
  style,
  ...props
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [0, offset * -1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const scalePercentage = useTransform(scale, (s) => `${s}%`);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div
      layout
      className={"card-wrapper"}
      ref={ref}
      style={{ y: yOffset, scale: scalePercentage, opacity, ...style }}
      {...props}
    >
      <div className="card card-front">
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          {children}
        </div>
      </div>
      <div className="card card-back"></div>
    </motion.div>
  );
};

export default Card;
