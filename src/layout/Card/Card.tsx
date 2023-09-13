import { FC, useRef } from "react";
import "./styles.scss";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

interface CardProps {
  title?: string;
  children: any;
  style?: {};
  onClick?: () => void;
  className?: string;
}

const Card: FC<CardProps> = ({
  title,
  children,
  style,
  className,
  ...props
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 100, 100, 0]);
  const scalePercentage = useTransform(scale, (s) => `${s}%`);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [5, 0, 0, 5]);
  const blur = useTransform(blurValue, (bv) => `blur(${bv}px)`);

  return (
    <motion.div
      layout
      className={`card-wrapper ${className}`}
      ref={ref}
      style={{ scale: scalePercentage, opacity, ...style, filter: blur}}
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
