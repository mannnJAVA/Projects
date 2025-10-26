import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Blog Application",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eum nulla repudiandae deserunt praesentium aut obcaecati, iusto quasi repellat reiciendis quod in enim cumque at fuga aliquam maxime non dolorem.",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eum nulla repudiandae deserunt praesentium aut obcaecati, iusto quasi repellat reiciendis quod in enim cumque at fuga aliquam maxime non dolorem.",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eum nulla repudiandae deserunt praesentium aut obcaecati, iusto quasi repellat reiciendis quod in enim cumque at fuga aliquam maxime non dolorem.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eum nulla repudiandae deserunt praesentium aut obcaecati, iusto quasi repellat reiciendis quod in enim cumque at fuga aliquam maxime non dolorem.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eum nulla repudiandae deserunt praesentium aut obcaecati, iusto quasi repellat reiciendis quod in enim cumque at fuga aliquam maxime non dolorem.",
    link: "/",
  },
];
const imgVariants = {
  initial: { x: -500, y: 500, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const textVariants = {
  initial: { x: 500, y: 500, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", staggerChilderen: 0.4 },
  },
};
const ListItem = ({ item }) => {
  const ref = useRef();
  const isInview = useInView(ref, { margin: "-100px" });
  return (
    <div className="pItem" ref={ref}>
      {" "}
      <motion.div
        variants={imgVariants}
        animate={isInview ? "animate" : "initial"}
        className="pImg"
      >
        {" "}
        <img src={item.img} alt="" />{" "}
      </motion.div>{" "}
      <motion.div
        variants={textVariants}
        animate={isInview ? "animate" : "initial"}
        className="pText"
      >
        {" "}
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>{" "}
        <motion.p variants={textVariants}>{item.desc}</motion.p>{" "}
        <motion.a variants={textVariants} href={item.link}>
          {" "}
          <button> View Project</button>{" "}
        </motion.a>{" "}
      </motion.div>{" "}
    </div>
  );
};
const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  }, []);
  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );
  return (
    <div className="portfolio" ref={ref}>
      {" "}
      <motion.div className="pList" style={{ x: xTranslate }}>
        {" "}
        <div
          className="empty"
          style={{ width: window.innerWidth - containerDistance }}
        />{" "}
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}{" "}
      </motion.div>{" "}
      <section /> <section /> <section /> <section /> <section />{" "}
      <div className="pProgress">
        {" "}
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          {" "}
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />{" "}
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />{" "}
        </svg>{" "}
      </div>{" "}
    </div>
  );
};
export default Portfolio;
