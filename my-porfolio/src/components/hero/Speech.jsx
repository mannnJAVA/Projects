import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';
const Speech = () =>{
    return (
        <motion.div 
            animate={{opacity: [0,1]}}
            transition={{ duration:1  }}
            className="bubbleContainer">
            <div className="bubble">
                <TypeAnimation
      sequence={[
        1000,
        // Same substring at the start will only be typed out once, initially
        'Mangesh Shreya Dipali Pragati sdkfjklsdjf sdfjsdklfj sdfjsl',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce slfkls aslkf aslf aslf slf food for Hamsters',
        1000,
       
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    />
            </div>
            <img src="/man.png" alt="" />
        </motion.div>
    );
}

export default Speech