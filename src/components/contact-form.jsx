import emailjs from '@emailjs/browser';
import {useRef,useEffect} from 'react';
import {motion} from "framer-motion"
import { useInView, useAnimation } from 'framer-motion';
export default function Contact(){
    const SERVICE_ID = "service_eiq62qs";
    const TEMPLATE_ID = "template_6b00fne";
    const PUBLIC_KEY = "qyEmFbnVZ-Tzjlou_";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target, PUBLIC_KEY)
        .then((result) => {
            alert("Message Sent Successfully")
        }, (error)=> {
            console.log(error.text);
            alert("Something went wrong !")
        });
        e.target.reset()
    };

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
        <motion.div variants={{
            hidden: {opacity:0, y:-100},
            visible:{opacity:1, y:0}, delay:3
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:1}}>
            <div className='contact-form' ref={ref}>
            <h3>Feel free to drop me a message</h3>
            <form onSubmit={handleOnSubmit}>
                <label for="from_name">Name</label>
                <input type='text' id='from_name' name="user_name"/>
                <label>Email</label>
                <input type='email' id='from_email' name='user_email'/>
                <label>Message</label>
                <textarea name='message'/>
                <input type='submit' value="Send"  className='submit-button'/>
            </form>
        </div>
        </motion.div>
    );
};