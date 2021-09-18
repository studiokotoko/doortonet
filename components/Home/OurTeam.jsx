
import style from './ourTeam.module.css';
import { onMouseIn, onMouseOut } from "../dependency/Cursor";
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import Image from 'next/image';

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.3
];

const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const team = `If you want to start measuring performance in your app, pass a function to log 
results (for example: reportWeb Vitals(console.log)) If you want to start
measuring per formance in your app, pass a function to log results (for example: reportWeb Vitals.`;

const teamName = ["sakshi", "atharva", "shubham", "aadya", "pratik", "java"];
const teamProfile = ["finance manager", "lead developer", "lead developer", "ui / ux designer",
 "system architecture", "happy index manager"];

const profilePicture = [
    require('../../public/img/team/0.png'),require('../../public/img/team/1.png'),
    require('../../public/img/team/2.png'),require('../../public/img/team/3.png'),
    require('../../public/img/team/4.png'),require('../../public/img/team/5.png')
]

const OurTeam = () => {
    return (
        <div className={style.container}>
            <h1 onMouseEnter={() => onMouseIn(150, .3)}
                onMouseLeave={onMouseOut} >our team</h1>
            <p onMouseEnter={() => onMouseIn(200, .2)}
                onMouseLeave={onMouseOut}>{team}</p>
            <div className={style.teamContainer}>
                {
                    teamName.map((data, index) => {
                        return <TeamCard key={index} 
                        name={data} profile={teamProfile[index]} 
                        photo={profilePicture[index]} />;
                    })
                }
            </div>

        </div>
    )
}

const TeamCard = ({name,profile,photo}) => {

    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const props = useSpring({ xys });

    return (
        <div  ref={ref}>
            <animated.div
                className={style.teamCard}
                style={{ transform: props.xys.to(trans)}}
                onMouseLeave={() => set([0, 0, 1])}
                onMouseMove={(e) => {
                    const rect = ref.current.getBoundingClientRect();
                    set(calc(e.clientX, e.clientY, rect));
                }}>
            <div  className={style.teamProfile}>
                <Image src={photo} alt="p" />
            </div>
            <span className={style.name}>{name}</span>
            <span className={style.profile}>{profile}</span>
            </animated.div>
        </div>
    );
}

export default OurTeam;