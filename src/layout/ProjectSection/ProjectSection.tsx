import { FC, useRef } from "react";
import "./styles.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectSection: FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "center center"],
  });

  const font = useTransform(scrollYProgress, [0.2, 1], [1, 0.45]);
  const fontSize = useTransform(font, (s) => `scale3d(${s},${s},1)`);

  return (
    <div className="section project-section">
      <motion.div className="project-title" ref={ref} style={{transform: fontSize}}>projects</motion.div>
    </div>
  );
};

export default ProjectSection;
