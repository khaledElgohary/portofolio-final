import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import  Button  from 'react-bootstrap/Button';
import React, {useState,useRef,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {motion} from "framer-motion"
import { useInView, useAnimation } from 'framer-motion';
import Globe from "react-globe.gl"


export default function Aboutme(){

    const pointsData = [
        { lat: 31.2001, lng: 29.9187, size: 500, color: 'red', label: 'Alexandria-Egypt, where I come from' },
        { lat: 49.8954, lng: -97.1385, size: 500, color: 'blue', label: 'Living in Winnipeg Canada' },
        { lat: 64.1470, lng: 21.9408, size:500, color:'green', label:'Reykjavik in Iceland-dream destination :)'}
    ];
    
    const [isVisible,setVisible]= useState(true);
    const prevScrollPos = useRef(0);
    useEffect(() => {
        const toggleVisibility = () => {
          const currentScrollPos = window.scrollY;
    
          if (currentScrollPos > 60 && currentScrollPos > prevScrollPos.current) {
            setVisible(false);
          } else if (currentScrollPos < 60) {
            setVisible(true);
          }
    
          prevScrollPos.current = currentScrollPos;
        };
    
        window.addEventListener('scroll', toggleVisibility);
    
        return () => window.removeEventListener('scroll', toggleVisibility);
      }, []);

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
        <div className='about-me-container'>
            {isVisible && (
                <Button id="down-btn" style={{ background: 'transparent', border: 'transparent' }}>
                <KeyboardDoubleArrowDownIcon
                    style={{ backgroundColor: 'transparent', color: 'white' }}
                />
                </Button>
            )}
            <div id='about-me-intro' ref={ref}>
                    <motion.div variants={{
                            hidden: {opacity:0, y:-100},
                            visible:{opacity:1, y:0}
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration:1}}
                            className='motion-container'
                    >
                        <h1 style={{textDecoration:'underline'}}>About me</h1>
                        <Card variant='outlined' style={{background:'#222528', color:'white', borderRadius:'2%',width:'30%'}}>
                        <CardContent style={{justifyContent:'center'}}>
                            Hello, I'm Khaled 👋 !
                            I'm a Computer Science fresh grad from the University of Manitoba.
                            I love diving into new technologies and learning -_-
                        </CardContent>
                        </Card>
                    </motion.div>
            </div>
                <div id='globe' ref={ref}>
                <motion.div variants={{
                            hidden: {opacity:0, y:-100},
                            visible:{opacity:1, y:0}
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration:1}}
                            className='globe-container'
                    >
                    <h3>Feel free to spin around</h3>
                    <Globe
                    ref={globeEl}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    pointsData={pointsData}
                    pointColor="color"
                    pointRadius={0.0}
                    backgroundColor="#141619"
                    width={800}
                    labelText="label"
                    labelDotRadius={0.5}
                    labelAltitude={0}
                    labelsData={pointsData}
                    labelLat="lat"
                    labelLng="lng"
                    labelSize={1.5}
                    >
                    </Globe>
                </motion.div>
                </div>
        </div>
    );
}