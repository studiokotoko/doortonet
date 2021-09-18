import style from './jobs.module.css';
import { onMouseIn,onMouseOut } from "../dependency/Cursor";
import Image from 'next/image';

const content = `If you want to start measuring performance in your app, 
pass a function to log results (for example: reportWeb
Vitals(console.log)) If you want to start measuring per
formance in your app, pass a function to log results (for example: reportWeb Vitals(console.log)).`;

const work_with_us =  require('../../public/img/work_with_us.png');

const JobsLeft = () => {
    return (
        <div className={style.jobsLeftContainer}>
            <h1 onMouseEnter={() => onMouseIn(100, .4)}
                onMouseLeave={onMouseOut}>work with us</h1>
            <p  onMouseEnter={() => onMouseIn(150, .4)}
                onMouseLeave={onMouseOut}>{content}</p>
            <div onMouseEnter={() => onMouseIn(200, .15)}
                onMouseLeave={onMouseOut} className={style.image}>
                <Image src={work_with_us} alt="photo" />
            </div>
            
        </div>
    )
}

export default JobsLeft;