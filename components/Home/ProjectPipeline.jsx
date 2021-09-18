
import style from './ProjectPipeline.module.css';
import { onMouseIn,onMouseOut } from "../dependency/Cursor";

const taskContain = [
    "First we will get all project requirement and bussiness plane",
    "Then we will design ui ux according to bussiness plane",
    "Once you finalize all ui ux for your product your have to pay 10% conformation fee",
    "Then we will develop complete project and upload it to server with in given deadline",
    "Then you have to submit reamaing payment before making product public",
    "We will do daily maintenance for your website"
]

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
                        return <Task key={index} index={index} discription={data} />
                    })
                }
            </div>
        </div>
    )
}

const Task = ({ index, discription }) => {
    return (
        <div className={style.task}>
            <h1 onMouseEnter={() => onMouseIn(100, .3)}
            onMouseLeave={onMouseOut}>{index+1}.</h1>
            <p onMouseEnter={() => onMouseIn(200, .2)}
            onMouseLeave={onMouseOut}>{discription + discription}</p>
        </div>
    )
}

export default ProjectPipeline;