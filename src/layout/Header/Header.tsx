import { FC, useRef } from "react";
import "./styles.scss"
import { delay, motion, useScroll, useTransform } from "framer-motion";

const Header: FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [100, 50]);
    const scalePercentage = useTransform(scale, (s) => `${s}%`);
    const blurValue = useTransform(scrollYProgress, [0, 1], [0, 5]);
    const blur = useTransform(blurValue, (bv) => `blur(${bv}px)`);

    
    console.log(scrollYProgress);

    return(
       <motion.div className="header" ref={ref} style={{opacity, scale: scalePercentage, filter: blur}}>
            <h1>welcome,</h1>
            <h1>to my portfolio</h1>
            <p>by silvan dubach</p>
            <hey></hey>
       </motion.div>
    );
};

export default Header;