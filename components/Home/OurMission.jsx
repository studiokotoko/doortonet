
import style from './ourMission.module.css';
import { onMouseIn,onMouseOut } from "../dependency/Cursor";

const mission = `If you want to start measuring performance in your app, pass a function to log 
results (for example: reportWeb Vitals(console.log)) If you want to start
 measuring per formance in your app, pass a function to log results (f
or example: reportWeb Vitals. If you want to start measuring performance in your app, pass a function to log 
results (for example: reportWeb Vitals(console.log)) If you want to start
 measuring per formance in your app, pass a function to log results (f
or example: reportWeb Vitals.`;

const OurMission = ()=>{
    return(
        <div className={style.container}>
            <h1  onMouseEnter={() => onMouseIn(150, .3)}
                 onMouseLeave={onMouseOut} >OUR  MISSION</h1>
            <p   onMouseEnter={() => onMouseIn(200, .2)}
                 onMouseLeave={onMouseOut}>{mission}</p>
        </div>
    )
}

export default OurMission;