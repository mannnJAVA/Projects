import"./hero.css";
import Speech from "./Speech";
import {animate, motion} from "motion/react";

const awardVariants = {
    initial:{
        x: -100,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
}
const Hero = () =>{
    return(
        <div className ="hero">
            <div className="hSection left">
                {/*TTLE */}
                <motion.h1 
                 initial={{ y: -100, opacity: 0}}
                 animate={{y: 0, opacity: 1}}
                 transition={{duration:1}}
                 className="hTitle"
                 >
                    Hey There,
                    <br/>
                 <span>I'm Mangesh</span>
                </motion.h1>
                {/*AWARDS */}
                <motion.div 
                    variants={awardVariants} 
                    initial="initial"
                    animate="animate" 
                    className="awards">
                    <motion.h2 variants={awardVariants} >Top Rated Designer</motion.h2>
                    <motion.p variants={awardVariants} >Loresse, quod rerum minima sint assumenda, temporibus in. Ex!</motion.p>
                    <motion.div variants={awardVariants}  className="awardList">
                        <motion.img variants={awardVariants}  src="/award2.png" alt="" />
                        <motion.img variants={awardVariants}  src="/award3.png" alt="" />
                        <motion.img variants={awardVariants}  src="/award1.png" alt="" />

                    </motion.div>
                </motion.div>
                {/*SCROLL SVG */}
                <a href="#services" className="scroll">
                  <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                        stroke="white"
                        strokeWidth="1"
                     />
         
                  </svg>
                </a>
            </div>

            <div className="hSection right">
             {/* FOLLOW */}
                <div className="follow">
                    <a href="/">
                        <img src="/instagram.png" alt="" />
                    </a>

                    <a href="/">
                        <img src="/facebook.png" alt="" />
                    </a>

                    <a href="/">
                        <img src="/youtube.png" alt="" />
                    </a>
                    <div className="followTextContainer">
                        <div className="followText">FOLLOW ME</div>
                    </div>
                </div>
                {/* BUBBLE */}
                <Speech />
                {/* CERTIFICATE */}
                <div className="certificate">
                    <img src="/certificate.png" alt="" />
                    CERTIFIED<br/>
                    PROFESSIONAL<br/>
                    FULLSTACK<br/>
                    DEVELOPER<br/>
                </div>
                {/*CONTACT */}
                <a href="/#contact" className="contactLink">
                    <div className="contactButton">
                        <svg viewBox="0 0 200 200" width="150" height="150">
                            <circle cx="100" cy="100" r="90" fill="pink" />
                            <path
                                id="innerCirclePath"
                                fill="none"
                                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                            />
                            <text  className="circleText">
                                <textPath xlinkHref="#innerCirclePath">Hire Now</textPath>
                            </text>
                            <text  className="circleText">
                                <textPath xlinkHref="#innerCirclePath" startOffset="44%">Contact Me</textPath>
                            </text>
                        </svg>
                        <div className="arrow">
                             <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="50"
                                height="50"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                              >
                                <line x1="6" y1="18" x2="18" y2="6" />
                                <polyline points="9 6 18 6 18 15" />
                              </svg>
                        </div>
                    </div>

                </a>

            </div>
            <div className="bg">
                {/*3d */}
                <div className="hImg">
                    <img src="/hero.png" alt="" />
                </div>
            </div>
    </div>
    );
};

export default Hero;