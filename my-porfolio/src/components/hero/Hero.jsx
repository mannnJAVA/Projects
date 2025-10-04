import"./hero.css";
import Speech from "./Speech";
const Hero = () =>{
    return(
        <div className ="hero">
            <div className="hSection left">
                {/*TTLE */}
                <h1 className="hTitle">Hey There,<br/>
                <span>I'm Mangesh</span>
                </h1>
                {/*AWARDS */}
                <div className="awards">
                    <h2>Top Rated Designer</h2>
                    <p>Loremsit tempore eveniet adipisci, ratione sunt quis perferendis nostrum aliquam itaque commodi esse, quod rerum minima sint assumenda, temporibus in. Ex!</p>
                    <div className="awardList">
                        <img src="/award1.png" alt="" />
                        <img src="/award2.png" alt="" />
                        <img src="/award3.png" alt="" />

                    </div>
                </div>
                {/*SCROLL SVG */}
                <a href="#services">
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
    </div>
    );
};

export default Hero;