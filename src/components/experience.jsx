import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {motion} from "framer-motion"
import { useInView, useAnimation } from 'framer-motion';
import React, {useRef,useEffect} from 'react';

export default function Experience(){

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible");
        }
        else{
            mainControls.start("hidden")
        }
        }, [isInView]);

        const globeEl = useRef();

        useEffect(() => {
        if (globeEl.current) {
            globeEl.current.controls().enableZoom = false;
            }
    }, []);

    return(
        <div className="experience-container" ref={ref}>
            <motion.div variants={{
                            hidden: {opacity:0, y:-100},
                            visible:{opacity:1, y:0}, delay:3
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration:1}}
                            className="experience-container">
            <h1 style={{textDecoration:'underline'}}>Places I contributed/worked at + Learned a lot from 🧠</h1>
            <div id='experience'>
                <Timeline position='alternate'>
                    <TimelineItem>
                        <TimelineOppositeContent color="white" className='ex-text'>
                            05/2024 - Now
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent className='ex-text'>Caremate - FullStack Developer</TimelineContent>
                    </TimelineItem>


                    <TimelineItem>
                        <TimelineOppositeContent color="white" className='ex-text'>
                            Canadian Museum for Human Rights - UofM Industrial Project
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent className='ex-text'>12/2023 - 04/2024 </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent color="white" className='ex-text'>
                            10/2022 - 04/2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent className='ex-text'>Pacific Institute for the Mathematical Sciences - Data Analyst</TimelineContent>
                        
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent color="white" className='ex-text'>
                            Senior Resident Advisor - University of Manitoba Student Residences
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                        </TimelineSeparator>
                        <TimelineContent className='ex-text'>08/2022 - 04/2023 </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            </motion.div>
        </div>
    );
}