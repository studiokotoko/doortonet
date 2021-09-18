
import style from './techUsed.module.css';
import { onMouseIn,onMouseOut } from "../dependency/Cursor";

const discription = `If you want to start measuring performance in your app, pass a function to log 
results (for example: reportWeb Vitals(console.log)) If you want to start
 measuring per formance in your app, pass a function to log results (f
or example: reportWeb Vitals. If you want to start measuring performance in your app, pass a function to log 
results (for example: reportWeb Vitals(console.log)) If you want to start
 measuring per formance in your app, pass a function to log results (f
or example: reportWeb Vitals.`;

const icons = [1,2,3,4,5,6,7,8,9];

const TechUsed = ()=>{
    return(
        <div className={style.container}>
            <h1 onMouseEnter={() => onMouseIn(150, .3)}
                onMouseLeave={onMouseOut}>technology used</h1>
            <p onMouseEnter={() => onMouseIn(200, .3)}
                onMouseLeave={onMouseOut}>
                {discription}
            </p>
            <div className={style.iconsContainer}>
                {
                    icons.map((data,index)=>{
                        return <div onMouseEnter={() => onMouseIn(100, .05)}
                        onMouseLeave={onMouseOut} key={index} className={style.icon}> </div>
                    })
                }
            </div>
        </div>
    )
}

export default TechUsed;