
import style from './Service.module.css';
import Title from './Title';
import NavBar from './NavBar';
import ContentDev from './ContentDev';
import ContentMaintenance from './ContentMaintenance';
import {useState} from 'react';

const Service = ()=>{

    const [isDevActive,setDev] = useState(true);


    return(
        <div className={style.container}>
            <div className={style.headImageContainer}></div>
            <div className={style.title}>
                <Title/>
            </div>
            <NavBar changeState={(state)=>{setDev(state)}} getState={isDevActive}/>
            {
                isDevActive?<ContentDev/>:
                <ContentMaintenance/>
            }
        </div>
    );
}


export default Service;