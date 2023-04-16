import { FC, ReactNode } from 'react';;
import './styles.scss';

interface CardProps {
    title: string;
    children: any;
}

const Card: FC<CardProps> = ({title, children}) => {
    return(
        <div className='card-wrapper'>
            <div className='card card-front'>
                <h2 className='card-title'>{title}</h2>
                <div className='card-content'>
                    {children}
                </div>
            </div>
            <div className='card card-back'></div>
        </div>
    );
}

export default Card;