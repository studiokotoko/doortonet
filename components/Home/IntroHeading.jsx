
import introVideo from "../../public/video/intro.webm";
import style from './introHeading.module.css';
import { BsChevronCompactDown } from 'react-icons/bs';
import { onMouseIn,onMouseOut } from "../dependency/Cursor";
import { useRef,useEffect,useState } from "react";
import Image from 'next/image';

const headImage = require('../../public/img/homeHead.webp');
var time = 10000;

const IntroHeading = () => {

    const [isVideo,setVideo] = useState(false);

    const scrollDownContainerRef = useRef();

    const scrollDown = ()=>{
        scrollDownContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(()=>{
        if(time==0)setVideo(true);
        else setTimeout(()=>{
            setVideo(true);
            time=0;
        },time);
    },[])

    return (
        <>
            {/* video container */}
            <div className={style.container}>
                {
                    isVideo? <video className={style.video} autoPlay muted loop>
                    <source src={introVideo} type="video/webm" />
                     </video>:"" 
                }
            </div>

            {/* forground opacity */}
            <div className={style.forgroundContianer}>
            </div>

            {/* logo container */}
            <div className={style.logoContainer}>

                {/* logo */}
                <div className={style.logo}>
                    <Title s={style.d}  string="door" letter="D" /> &nbsp; &nbsp;
                    <Title s={style.t} string="to" letter="T" /> &nbsp; &nbsp;
                    <Title s={style.n} string="net" letter="N" /></div>

                {/* discription */}
                <div className={style.downIconContainer}
                onClick={scrollDown}
                onMouseEnter={() => onMouseIn(120, .3)}
                onMouseLeave={onMouseOut} >
                    <BsChevronCompactDown className={style.downIcon} />
                </div>
            </div>

            {/* scroll down to container */}
            <div className={style.scrollDownToContainer} 
            ref={scrollDownContainerRef}></div>
        </>
    );
}

//title logo
const Title = ({ s,string, letter }) => {
    return <div style={{ display: "inline-block" }} className={s}>
        <div className={style.title}>
            <p  onMouseEnter={() => onMouseIn(200, .1)}
                onMouseLeave={onMouseOut}>{letter}</p>
            <h5 onMouseEnter={() => onMouseIn(70, .2)}
                onMouseLeave={onMouseOut}>{string}</h5>
        </div>
    </div>
}


export default IntroHeading;