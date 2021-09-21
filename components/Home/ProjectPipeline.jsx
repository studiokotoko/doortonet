
import style from './ProjectPipeline.module.css';
import { onMouseIn,onMouseOut } from "../dependency/Cursor";
import Image from 'next/image';

const icon = [
    require('../../public/img/home/projectPipeline/pp0.svg'),
    require('../../public/img/home/projectPipeline/pp1.svg'),
    require('../../public/img/home/projectPipeline/pp2.svg'),
    require('../../public/img/home/projectPipeline/pp3.svg'),
    require('../../public/img/home/projectPipeline/pp4.svg'),
    require('../../public/img/home/projectPipeline/pp5.svg')
];

const ProjectPipeline = () => {
    return (
        <div className={style.container}>
            <h1 onMouseEnter={() => onMouseIn(150, .3)}
                onMouseLeave={onMouseOut}>project pipeline</h1>
            <p
            onMouseEnter={() => onMouseIn(100, .3)}
            onMouseLeave={onMouseOut}>Then you have to submit reamaing payment before making product public We will do daily maintenance for your website</p>
            <div className={style.taskContainer}>
                {
                    taskContain.map((data, index) => {
                        return <Task key={index} index={index} discription={data} image={icon[index]} />
                    })
                }
            </div>
        </div>
    )
}

const Task = ({ index, discription,image}) => {
    return (
        <div className={style.task} onMouseEnter={() => onMouseIn(200, .1)}
        onMouseLeave={onMouseOut}>
            <h5>{index+1}.</h5>
            <div className={style.icon}>
            <Image layout="fixed" width="80" src={image} alt="icon"/>
            </div>
            <p>{discription + discription}</p>
        </div>
    )
}

export default ProjectPipeline;


const taskContain = [
    `First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane`,
    `First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane`,
    `First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane`,
    `First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane`,
    `First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane`,
    `First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane
    First we will get all project requirement and bussiness plane`
]