import { FC, ReactNode, useRef, useState } from "react";
import "./styles.scss";
import Card from "./Card";
import { Doughnut } from "react-chartjs-2";

interface ProjectCardProps {
  title: string;
  children: any;
  offset?: number;
  style?: any;
  data?: any;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, children, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Used Technologies',
      },
      legend: {
        display: true,
      }
    },
    responsive: true,
    aspectRatio: 3/1,
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        }
    },
    cutoutPercentage: 90,
  };

  return (
    <Card title={title} data-isOpen={isOpen} onClick={handleClick}>
      {children}
      {isOpen && <Doughnut className="doughnut" data={data} options={options}/>}
    </Card>
  );
};

export default ProjectCard;
