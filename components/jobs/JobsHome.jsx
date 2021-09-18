
import style from './jobs.module.css';
import JobsLeft from './JobsLeft';
import JobsRight from './JobsRight';
import Notification from '../dependency/Notification';

const JobsHome = () =>{
    return(
        <div className={style.container}>
            <JobsLeft/>
            <JobsRight/>
        </div>
    )
}


export default JobsHome;