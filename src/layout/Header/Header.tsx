import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import "./styles.scss";

const Header: FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const translateNeg = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const translateXNeg = useTransform(translateNeg, (x) => `translateX(${x}px)`);
  const translatePos = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const translateXPos = useTransform(translatePos, (x) => `translateX(${x}px)`);
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const blur = useTransform(blurValue, (bv) => `blur(${bv}px)`);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <motion.div className="header" style={{position}}>
      <h1>
        <motion.span
          ref={ref}
          style={{ opacity, transform: translateXNeg}}
          className="titleSpan"
        >
          be creative
        </motion.span>
        <motion.span
          ref={ref}
          style={{ opacity, transform: translateXPos}}
          className="titleSpan"
        >
          change things
        </motion.span>
        <motion.span
          ref={ref}
          style={{ opacity, transform: translateXNeg}}
          className="titleSpan"         
        >
          for the better
          <span><p>by silvan dubach</p></span>
        </motion.span>
      </h1>
    </motion.div>
  );
};

export default Header;
