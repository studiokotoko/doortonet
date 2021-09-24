import style from './whoWeAre.module.css';
import { onMouseIn, onMouseOut } from "../dependency/Cursor";
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

import { MdBusinessCenter } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import {RiTeamFill } from 'react-icons/ri';
import { CgIfDesign } from 'react-icons/cg';
import { RiTestTubeFill} from 'react-icons/ri';
import { RiServiceFill } from 'react-icons/ri';

import { BsFillHouseFill } from 'react-icons/bs';
import { MdLocalHospital } from 'react-icons/md';
import { FaFunnelDollar } from 'react-icons/fa';
import { IoMdBusiness } from 'react-icons/io';
import { ImAirplane } from 'react-icons/im';
import { FaCut } from 'react-icons/fa';

import { BiChevronDown } from 'react-icons/bi';

const IconService = [MdBusinessCenter,CgWebsite, RiTeamFill,CgIfDesign,
    RiTestTubeFill,RiServiceFill];
const IconIndustries = [BsFillHouseFill,MdLocalHospital,FaFunnelDollar,IoMdBusiness,ImAirplane,FaCut];

const WhoWeAre = () => {

    const [isService, setService] = useState(true);

    //menu modal transition animation
    const transition1 = useTransition(isService, {
        config: { mass: 1, tension: 100, friction: 18 },
        from: { x: -1000, y: 0 },
        enter: { x: 0, y: 0 },
        leave: { x: -1000, y: 0 },
    });

    //menu modal transition animation
    const transition2 = useTransition(!isService, {
        config: { mass: 1, tension: 100, friction: 18 },
        from: { x: 1000, y: 0 },
        enter: { x: 0, y: 0 },
        leave: { x: 1000, y: 0 },
    });

    const getStyle = (condition) => {
        if (condition) return style.nav;
        return style.nav_active;
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}
                onMouseEnter={() => onMouseIn(130, .3)}
                onMouseLeave={onMouseOut}>who we are</h1>
            <p className={style.discription}
                onMouseEnter={() => onMouseIn(170, .2)}
                onMouseLeave={onMouseOut}>{discription}</p>
            <ul>
                <li onClick={() => { setService(true) }} className={getStyle(isService)}
                    onMouseEnter={() => onMouseIn(90, .3)}
                    onMouseLeave={onMouseOut}>service</li>
                <li onClick={() => { setService(false) }} className={getStyle(!isService)}
                    onMouseEnter={() => onMouseIn(90, .3)}
                    onMouseLeave={onMouseOut}>industries</li>
            </ul>
            <div className={style.cardContainerContainer}>
                {
                    isService ?
                        <>
                            {transition1((s, item) => (
                                item ?
                                    <animated.div style={s} className={style.cardContainer}>
                                        {
                                            titleService.map((data, index) => {
                                                return <Card key={index} title={data} Icon={IconService[index]}/>
                                            })
                                        }
                                    </animated.div> : ""
                            ))}
                        </>
                        : <>
                            {transition2((s, item) => (
                                item ?
                                    <animated.div style={s} className={style.cardContainer}>
                                        {
                                            titleIndustries.map((data, index) => {
                                                return <Card key={index} title={data} Icon={IconIndustries[index]} />
                                            })
                                        }
                                    </animated.div> : ""
                            ))}
                        </>
                }
            </div>
        </div>
    )
}

const Card = ({ color, key,title,Icon}) => {
    return (
        <div className={style.card} style={{ backgroundColor: color }} 
        onMouseEnter={() => onMouseIn(150, .1)}
                    onMouseLeave={onMouseOut}>
                        <h2>{title}</h2>
                        <Icon className={style.icon} />
                        <p>
                        a majority of their customers will visit their 
website before making a purchase. An average American spends 23.6 
hours per week online and over 5 hours each day on their mobile devices.
So, suppose you want to be found where people spend a majority of their customers will visit their 
website before making a purchase. An average American spends 23.6 
hours per week online and over 5 hours each day on their mobile devices.
                        </p>
                        <BiChevronDown className={style.dropDown} />
        </div>
    )
}

export default WhoWeAre;

const titleService = ["enterprise software","website development",
"dedicated development team", "UI-UX design", "QA & testing", "product management"];
const titleIndustries = ["real estate","healthcare","retail & ecommerce",
"enterprise system development", "travel and hospitality", "salon management system"]

const discription = `a majority of their customers will visit their 
website before making a purchase. An average American spends 23.6 
hours per week online and over 5 hours each day on their mobile devices.
So, suppose you want to be found where people spend their time. In that
case, you must have accurate information about your organization available
in that place. So we are on the mission to provide tools`;