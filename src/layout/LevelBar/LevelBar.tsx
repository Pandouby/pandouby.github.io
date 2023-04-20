import { FC, useEffect, useRef } from "react";
import "./styles.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface LevelBarProps{
    title?: string;
    percentage: number;
}

const LevelBar: FC<LevelBarProps> = ({title, percentage}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"],
    });

    const scaleX = useSpring(scrollYProgress)
    const width = useTransform(scaleX, [0, 0.4], [0, 1 * percentage]);
    const widthPercent = useTransform(width, (w) => `${w}%`);

    return(
        <motion.div className="level-bar-container" ref={ref} >
            {title && title}
            <div className="level-bar-wrapper" >
                <motion.div className="level-bar infill" style={{ width: widthPercent }}></motion.div>
                <div className="level-bar background"></div>
                <span>{percentage}%</span>
            </div>
        </motion.div>
    );
}

export default LevelBar;