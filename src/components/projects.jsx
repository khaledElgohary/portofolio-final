import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton, SvgIcon } from '@mui/material';
import Git from '../assets/tech-icons/github-icon.svg'
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

export default function Projects(){

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
        <div className="projects-container" ref={ref}>
            <motion.div variants={{
                            hidden: {opacity:0, y:-100},
                            visible:{opacity:1, y:0}, delay:3
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration:1}}
                            className="experience-container">
            <h1 style={{textDecoration:'underline'}}>Projects + Contributions</h1>
            <div id="projects" style={{paddingTop:'15px'}}>
                <h3 style={{fontSize:'25px'}}>Canadian Museum for Human Rights speech-to-text system</h3>
                <Card variant='outlined' style={{background:'#222528', color:'white', borderRadius:'2%',width:'50%'}} className='project-desc'>
                    <CardContent style={{justifyContent:'center', width:'100%'}}>
                    I had the pleasure to work with the Canadian Museum for Human Rights for this project. 
                    Leading a team of three students at the UofM, the goal for the project was to implement a speech recognition system for one of CMHR'S upcoming exhibits.
                    The CMHR's team requested 3 main features for the system which are fully local, displaying automatic live transcription, automatic language and voice detection, and finally
                    having an intent classifier to extract intents that will eventually trigger a video from the database. All 3 features were successfully implemented, my team and I utilized
                    OpenAI's Whisper library for enhanced automatic language detection and live transcription, Google's BERT for extracting intents, and Docker for final product contanerization.
                    </CardContent>
                </Card>

                <h3 style={{fontSize:'25px', paddingTop:'15px'}}>HighSchool Hub Android App</h3>                
                <IconButton onClick={()=>window.open('https://github.com/khaledElgohary/high-school-hub')} style={{background:'white'}} className='project-buttons'>
                    <GitIcon/>
                </IconButton>
                <Card variant='outlined' style={{background:'#222528', color:'white', borderRadius:'2%',width:'50%'}} className='project-desc'>
                    <CardContent style={{justifyContent:'center', width:'100%'}}>
                    This project was done for my Software Engineering class at the UofM. The idea originally came from an app me and my highschool friends wanted to develop, but never managed
                    to get the time to do it before heading off to university. The app's goal is to connect highschool students and staff that has lost connections, and to discover where they
                    are in life right now. The user would first create an account, select the school year and name where they want to connect with their friends from, and
                    then will have the ability to discover the students and staff that existed in this school at the specified year. I worked in an agile team during this project, and
                    contributed to developing features using Android Studio and always ensuring continous integration of backend with frontend, along with 100% test coverage as the codebase grew. Further,
                    contributed to code reviews, reviewing and approving gitlab merge requests, and also clearing off technical debt. 
                    </CardContent>
                </Card>

                <h3 style={{fontSize:'25px', paddingTop:'15px'}}>El-opie Web Scraping website</h3>
                <IconButton onClick={()=>window.open('https://github.com/khaledElgohary/Elopie-wesbite')} style={{background:'white'}} className='project-buttons'>
                    <GitIcon/>
                </IconButton>
                
                <Card variant='outlined' style={{background:'#222528', color:'white', borderRadius:'2%',width:'50%'}} className='project-desc'>
                    <CardContent style={{justifyContent:'center', width:'100%'}}>
                    As weird as the project name sounds, this is one of the most useful web apps I have contributed to. This project was done in a 12 hour hackathon organized by a student
                    club at UofM called DevClub which brings together all Computer Science students. UofM has the option for students to take courses with valid transfer credits at another university by submitting a letter of permission
                    &#40; El-opie= letter of permission, get it ?&#41;, but navigating the student registration website and displaying the courses students are eligible to take from certain faculties is exhausting. Hence, comes our hackathon
                    web app idea, El-opie allows students from all faculties at the UofM to search up certain courses at UofM that has valid tranfer credits at another university,or even search all courses that has valid
                    transfer credit by faculty. I was responsible for designing the frontend of the app, as well as integrating the frontend with backend. I used JQuery, Flask, HTML, and CSS for the development
                    of the front end for this app. Achieved 2nd place out of 77 competing groups in the hacakthon.
                    </CardContent>
                </Card>

                <h3 style={{fontSize:'25px', paddingTop:'15px'}}>Julisten Website</h3>
                <IconButton onClick={()=>window.open('https://github.com/khaledElgohary/Julisten-Website')} style={{background:'white'}} className='project-buttons'>
                    <GitIcon/>
                </IconButton>
                <Card variant='outlined' style={{background:'#222528', color:'white', borderRadius:'2%',width:'50%'}} className='project-desc'>
                    <CardContent style={{justifyContent:'center', width:'100%'}}>
                    This website was developed as a group project for a Human Computer Interaction course I took at the UofM. The website features a website inspired by spotify for music and
                    mutlimedia. A core functionality of my team's design is the web app's ability to visualize the user's media queue, and have the ability to manipulate it by dragging and dropping
                    media into the queue. Reflecting on this project, I'm proud my team and I developed this website only using JQuery, JavaScript, HTML, and CSS. Achieved top 5% of my class for
                    the project.
                    </CardContent>
                </Card>

                <h3 style={{fontSize:'25px', paddingTop:'15px'}}>And much more..... Feel free to checkout my github profile for other projects I worked on 🤌🏻</h3>

            </div>
                            
            </motion.div>
        </div>
    );
}