
import style from './ourMission.module.css';
import { onMouseIn, onMouseOut } from "../dependency/Cursor";
import Image from 'next/image';

const visionImg = require('../../public/img/home/vision.svg');
const missionImg = require('../../public/img/home/mission.svg');

const OurMission = () => {
    return (
        <div className={style.container}>
            <h1 onMouseEnter={() => onMouseIn(150, .3)}
                onMouseLeave={onMouseOut} >OUR  MISSION</h1>
            <p onMouseEnter={() => onMouseIn(200, .2)}
                onMouseLeave={onMouseOut}>{mainContent}</p>
            <div className={style.cardContainer}>
                <Card title="vision" svgImg={visionImg} content={vision}/>
                <Card title="mission" svgImg={missionImg} content={mission}/>
            </div>
        </div>
    )
}

const Card = ({title,svgImg,content})=>{

    return(
        <div className={style.card} onMouseEnter={() => onMouseIn(200, .2)}
        onMouseLeave={onMouseOut}>
            <div className={style.cardImg}>
                <Image  width="200px" src={svgImg} alt="svg" />
            </div>
            <h3 className={style.cardTitle}>{title}</h3>
            <p className={style.cardContent}>{content}</p>
        </div>
    )
}

export default OurMission;

const mission = `Our mission is to enhancing the business growth of our customers
with creative Design and Development to deliver market-defining high-quality 
solutions that create value and reliable competitive advantage for our clients
around the world. We will do it with our innovative backend system architecture 
which will reduce the cost of the website maintenance by 10 times. Which will 
help small businesses to compete with big players.`;

const vision =`As technology disrupts all established norms bringing complexity
 and uncertainty, alongside new opportunities to improve the world.
  We help our clients gain a competitive advantage and improve the 
  lives of people around the globe. We know that Customer’s growth is our growth, 
  so we commit our customers to help in achieving their business goals. We want to be known
 as the reliable, innovative and user friendly software service provider in IT industry.`;

const mainContent = `A business’s online presence, regardless of industry, 
can have a massive impact on its success. In this day and age, some 
businesses still don’t realize that a majority of their customers will
visit their website before making a purchase. An average American spends
23.6 hours per week online and over 5 hours each day on their mobile devices.
So, suppose you want to be found where people spend their time. In that case, 
you must have accurate information about your organization available in that place.
So we are on the mission to provide tools to businesses which will help to
 present themself to the world `;