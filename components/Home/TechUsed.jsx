
import style from './techUsed.module.css';
import { onMouseIn,onMouseOut } from "../dependency/Cursor";
import Image from 'next/image';

const icons = [
    require('../../public/img/home/useTech/0.svg'),require('../../public/img/home/useTech/1.svg'),
    require('../../public/img/home/useTech/2.svg'),require('../../public/img/home/useTech/3.svg'),
    require('../../public/img/home/useTech/4.svg'),require('../../public/img/home/useTech/5.svg'),
    require('../../public/img/home/useTech/6.svg'),require('../../public/img/home/useTech/7.svg'),
    require('../../public/img/home/useTech/8.svg')];

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
                        onMouseLeave={onMouseOut} key={index} className={style.icon}> 
                        <Image src={icons[index]} alt="icons"/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default TechUsed;


const discription = `If you want to start measuring performance in your app, pass a function to log 
results (for example: reportWeb Vitals(console.log)) If you want to start
 measuring per formance in your app, pass a function to log results (f
or example: reportWeb Vitals. If you want to start measuring performance in your app, pass a function to log 
results (for example: reportWeb Vitals(console.log)) If you want to start
 measuring per formance in your app, pass a function to log results (f
or example: reportWeb Vitals.`;