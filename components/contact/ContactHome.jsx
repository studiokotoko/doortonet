
import style from './contact.module.css';
import LeftContant from './LeftContact';
import RightContact from './RightContact';


const ContactHome = () =>{
    return(
        <div className={style.container}>
            <LeftContant/>
            <RightContact/>
        </div>
    )
}


export default ContactHome;