import React from 'react';
import TimelineItem from './TimelineItem'
import { education, experience } from '../assets/const/experience';
// require('../assets/css/timeline.css');

const Timeline = (props) => {
    const flag = props.title === 'experience';
    const titleName = flag ? experience: education;
    const base = "page-section timeline ";
    const bg = flag ? (base + 'bg-primary'): base;
    const tbase = "page-section-heading text-center text-uppercase mb-0 ";
    const tb = flag ? (tbase + 'text-white'): (tbase + 'text-secondary');
    const idn = flag ? 'experience' : 'education';

    return (
        <section className={bg} id={idn} >
            <div className="container">
                <h2 className={tb}>{props.title}</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fa fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                
                {
                    titleName.length > 0 && (
                        <div className="timeline-container">
                            {titleName.map((data, idx) => (
                                <TimelineItem data={data} key={idx} />
                            ))}
                        </div>

                    )
                }
            </div>
        </section>


    )
}
export default Timeline;