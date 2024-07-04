import React, {useState,useRef,useEffect} from 'react';
import {delay, motion} from "framer-motion"
import { useInView, useAnimation } from 'framer-motion';
import C from '../assets/tech-icons/C.svg'
import android from '../assets/tech-icons/android-icon.svg'
import angular from '../assets/tech-icons/angular-icon.svg'
import django from '../assets/tech-icons/django-icon.svg'
import jquery from '../assets/tech-icons/jquery.svg'
import react from '../assets/tech-icons/react.svg'
import typescript from '../assets/tech-icons/typescript-icon.svg'
import css from '../assets/tech-icons/css-3.svg'
import flask from '../assets/tech-icons/flask.svg'
import html from '../assets/tech-icons/html-5.svg'
import javascript from '../assets/tech-icons/javascript.svg'
import nextjs from '../assets/tech-icons/nextjs-icon.svg'
import aws from '../assets/tech-icons/aws.svg'
import bash from '../assets/tech-icons/bash-icon.svg'
import cplus from '../assets/tech-icons/c-plusplus.svg'
import grashql from '../assets/tech-icons/graphql.svg'
import java from '../assets/tech-icons/java.svg'
import mongo from '../assets/tech-icons/mongodb-icon.svg'
import postgre from '../assets/tech-icons/postgresql.svg'
import spring from '../assets/tech-icons/spring-icon.svg'
import mysql from '../assets/tech-icons/mysql-icon.svg'
import python from '../assets/tech-icons/python.svg'
import git from '../assets/tech-icons/git-icon.svg'
import jenkins from '../assets/tech-icons/jenkins.svg'
import Docker from '../assets/tech-icons/docker-icon.svg'
import selenium from '../assets/tech-icons/selenium.svg'
import cypress from  '../assets/tech-icons/cypress-icon.svg'
import JUnit from '../assets/tech-icons/JUnit.svg'
import Rstudio from '../assets/tech-icons/RStudio.svg'
import tableau from '../assets/tech-icons/tableau-icon.svg'
import powerbi from '../assets/tech-icons/microsoft-power-bi.svg'
import jupyter from '../assets/tech-icons/jupyter.svg'
import rails from '../assets/tech-icons/rails.svg'
import kotlin from '../assets/tech-icons/kotlin-icon.svg'
import tailwind from '../assets/tech-icons/tailwindcss-icon.svg'
import flutter from '../assets/tech-icons/flutter.svg'
import azure from '../assets/tech-icons/microsoft-azure.svg'

import { Tooltip } from '@mui/material';



export default function Skills(){
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
        <div ref={ref}>
            <motion.div variants={{
                            hidden: {opacity:0, y:-100},
                            visible:{opacity:1, y:0}, delay:3
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration:1}}
                            className="skills-container"
                            >
            <div id="skills-header">
                <h1 style={{textDecoration:'underline'}}>List of technologies I worked with 👇</h1>
            </div>
            <h3 style={{paddingTop:'50px'}}>FrontEnd</h3>
            <div id="front-end-skills">
                <Tooltip title="JavaScript" arrow placement='top'>
                    <img src={javascript}/>
                </Tooltip>
                <Tooltip title="Flask" arrow placement='top'>
                    <img style={{background:'white', borderRadius:'10%'}} src={flask}/>
                </Tooltip>
                <Tooltip title="JQuery" arrow placement='top'>
                    <img style={{background:'white', borderRadius:'10%'}} src={jquery}/>
                </Tooltip>
                <Tooltip title="React" arrow placement='top'>
                    <img src={react}/>
                </Tooltip>
                <Tooltip title="Next.js" arrow placement='top'>
                    <img src={nextjs}/>
                </Tooltip>
                <Tooltip title="CSS" arrow placement='top'>
                    <img src={css}/>
                </Tooltip>
                <Tooltip title="HTML5" arrow placement='top'>
                    <img src={html}/>
                </Tooltip>
            </div>
            <h3 style={{paddingTop:'50px'}}>Backend</h3>
            <div id='back-end-skills'>
                <Tooltip title="Java" arrow placement='top'>
                    <img src={java}/>
                </Tooltip>
                <Tooltip title="C" arrow placement='top'>
                    <img src={C}/>
                </Tooltip>
                <Tooltip title="C++" arrow placement='top'>
                    <img src={cplus}/>
                </Tooltip>
                <Tooltip title="Python" arrow placement='top'>
                    <img src={python}/>
                </Tooltip>
                <Tooltip title="Android Studio" arrow placement='top'>
                    <img src={android}/>
                </Tooltip>
                <Tooltip title="MySQL" arrow placement='top'>
                    <img src={mysql}/>
                </Tooltip>
                <Tooltip title="PostgreSQL" arrow placement='top'>
                    <img src={postgre}/>
                </Tooltip>
                <Tooltip title="GraphQL" arrow placement='top'>
                    <img src={grashql}/>
                </Tooltip>
                <Tooltip title="mongo" arrow placement='top'>
                    <img src={mongo}/>
                </Tooltip>
                <Tooltip title="Java Spring" arrow placement='top'>
                    <img src={spring}/>
                </Tooltip>
            </div>
            <h3 style={{paddingTop:'50px'}}>Tools & Testing</h3>
            <div id='tools-testing-skills'>
                <Tooltip title="AWS" arrow placement='top'> 
                    <img src={aws} style={{background:'white', borderRadius:'10%'}}/>
                </Tooltip>
                <Tooltip title="Bash" arrow placement='top'>
                    <img src={bash}/>
                </Tooltip>
                <Tooltip title="Git" arrow placement='top'>
                    <img src={git}/>
                </Tooltip>
                <Tooltip title="Jenkins" arrow placement='top'>
                    <img src={jenkins}/>
                </Tooltip>

                <Tooltip title="Docker" arrow placement='top'>
                    <img src={Docker}/>
                </Tooltip>

                <Tooltip title="Selenium" arrow placement='top'>
                    <img src={selenium}/>
                </Tooltip>

                <Tooltip title="Cypress" arrow placement='top'>
                    <img src={cypress} style={{background:'white', borderRadius:'10%'}}/>
                </Tooltip>

                <Tooltip title="JUnit" arrow placement='top'>
                    <img src={JUnit}/>
                </Tooltip>
            </div>

            <h3 style={{paddingTop:'50px'}}>Data Analysis</h3>

            <div id='data-analysis-skills'>
                <Tooltip title="RStudio" arrow placement='top'>
                    <img src={Rstudio}/>
                </Tooltip>
                <Tooltip title="Tableau" arrow placement='top'>
                    <img src={tableau}/>
                </Tooltip>
                <Tooltip title="PowerBI" arrow placement='top'>
                    <img src={powerbi}/>
                </Tooltip>
                <Tooltip title="Jupter" arrow placement='top'>
                    <img src={jupyter}/>
                </Tooltip>
            </div>

            <h3 style={{paddingTop:'50px'}}>On My Radar 🙅🏽‍♂️</h3>

            <div id="current-radar-skills">
                <Tooltip title="TypeScript" arrow placement='top'>
                    <img src={typescript}/>
                </Tooltip>
                <Tooltip title="Angular" arrow placement='top'>
                    <img src={angular}/>
                </Tooltip>
                <Tooltip title="Django" arrow placement='top'>
                    <img src={django}/>
                </Tooltip>
                <Tooltip title="Ruby on Rails" arrow placement='top'>
                    <img src={rails}/>
                </Tooltip>
                <Tooltip title="Kotlin" arrow placement='top'>
                    <img src={kotlin}/>
                </Tooltip>
                <Tooltip title="Tailwind CSS" arrow placement='top'>
                    <img src={tailwind}/>
                </Tooltip>
                <Tooltip title="Flutter" arrow placement='top'>
                    <img src={flutter}/>
                </Tooltip>
                <Tooltip title="Microsoft Azure" arrow placement='top'>
                    <img src={azure}/>
                </Tooltip>
            </div>

            </motion.div>

        </div>
    );
}