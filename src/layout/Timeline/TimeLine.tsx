import { FC } from 'react';
import './styles.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiCodecademy, SiCodechef, SiJavascript, SiXdadevelopers } from 'react-icons/si';
import Card from '../Card/Card';
import variables from '/src/styles/theme-variables.scss';

const TimeLine: FC = () => {
  return (    
    <VerticalTimeline>
      <VerticalTimelineElement
        className="timeline-element"
        contentStyle={{ background: 'rgb(33, 150, 243)' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2024 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<SiJavascript />}
      >
        <h3 className="vertical-timeline-element-title">Junior Software Developer @ti&m</h3>
        <h4 className="vertical-timeline-element-subtitle">Zürich, Switzerland</h4>
        <p>
          Junior Frontend Developer
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="timeline-element"
        date="2020 - 2024"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<SiJavascript />}
      >
        <h3 className="vertical-timeline-element-title">Apprentice @ti&m</h3>
        <h4 className="vertical-timeline-element-subtitle">Zürich, Switzerland</h4>
        <p>
          
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLine;
