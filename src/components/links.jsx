import Resume from "../assets/Khaled-Elgohary-Resume.pdf"
import { IconButton, SvgIcon } from '@mui/material';
import Git from '../assets/tech-icons/github-icon.svg'
import Button from 'react-bootstrap/Button';
import Linkedin from "../assets/tech-icons/linkedin-icon.svg"
import Email from "../assets/email-file-svgrepo-com.svg"
import {delay, motion} from "framer-motion"
import { useInView, useAnimation } from 'framer-motion';
import React, {useState,useRef,useEffect} from 'react';


function GitIcon(props){
    return(
        <SvgIcon {...props}>
            <image href={Git} height="100%" width="100%"/>
        </SvgIcon>
    );
}

function LinkedinIcon(props){
    return(
        <SvgIcon {...props}>
            <image href={Linkedin} height="100%" width="100%"/>
        </SvgIcon>
    );
}

function EmailIcon(props){
    return(
        <SvgIcon {...props}>
            <image href={Email} height="100%" width="100%"/>
        </SvgIcon>
    );
}

export default function Links(){

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
        <div id="resume" ref={ref}>
            <motion.div variants={{
                            hidden: {opacity:0, y:-100},
                            visible:{opacity:1, y:0}, delay:3
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration:1}}
                            className="links-container">
            <div className="links" >
            <h1 style={{textDecoration:'underline'}}>Let's Connect !</h1>
            <div className="links-content">
                <Button className="resume" variant="outline-light" href={Resume} download="Khaled's Resume" style={{width:'75%'}}>Download Resume</Button>
                <IconButton onClick={()=>window.open('https://github.com/khaledElgohary')} style={{background:'white', width:'15%'}} className='project-buttons'>
                    <GitIcon/>
                </IconButton>
                <IconButton onClick={()=>window.open('https://www.linkedin.com/in/khaled-elgohary2002/')} style={{background:'white', width:'15%'}} className='project-buttons'>
                    <LinkedinIcon/>
                </IconButton>

                <IconButton onClick={()=>window.location="mailto:khaled.dev1010@gmail.com"} style={{background:'white', width:'15%'}} className="project-buttons">
                    <EmailIcon/>
                </IconButton>
            </div>
            
            </div>
            </motion.div>
        </div>
    );
}