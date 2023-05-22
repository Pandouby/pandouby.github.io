import { FC, ReactNode, useRef } from 'react';;
import './styles.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CardProps {
    title: string;
    children: any;
    offset?: number;
    style?: any;
}

const Card: FC<CardProps> = ({title, children, offset = 0, style}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const yOffset = useTransform(scrollYProgress, [0, 1], [0, offset * -1]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const scalePercentage = useTransform(scale, (s) => `${s}%`);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return(
        <motion.div className='card-wrapper' ref={ref} style={{y: yOffset, scale: scalePercentage, opacity, ...style}} layout>
            <div className='card card-front'>
                <h2 className='card-title'>{title}</h2>
                <div className='card-content'>
                    {children}
                </div>
            </div>
            <div className='card card-back'></div>
        </motion.div>
    );
}

export default Card;