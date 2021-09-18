
import style from './contact.module.css';
import formStyle from '../dependency/style/form.module.css';
import {useState} from 'react';
import {HOST} from '../../config/index.js';
import Notification from '../dependency/Notification';

const RightContact = () => {

    const [note,setNote]= useState(false);


    const registerApplication = async (event) => {
        event.preventDefault();

        try{
            const res = await fetch(`${HOST}/api/dtn/resume/add`,{
                body: JSON.stringify({
                    name:event.target.name.value,
                    position:event.target.position.value,
                    email:event.target.email.value,
                    mobile_number:event.target.mobile_no.value,
                    portfolio_link:event.target.portfolio_link.value,
                    about:event.target.about.value
                }),
                headers:{
                    'content-Type':'application/json'
                },
                method:'POST'
            });

            setNote(true);
        }catch(err){
            console.log(err);
        }
    }


    return (
        <div className={style.rightContact}>
            <div className={formStyle.form}>

                {/* title */}
                <h2 className={formStyle.title}> your resume </h2>

                <form onSubmit={registerApplication}>


                    {/* name */}
                    <label htmlFor="name">name</label>
                    <input id="name" placeholder="enter your name" name="name" type="text" autoComplete="on" required />


                    {/* email */}
                    <label htmlFor="email">email</label>
                    <input id="email" placeholder="your email id" name="email" type="eamil" autoComplete="on" required />


                    {/* mobile number */}
                    <label htmlFor="mobile_no">mobile number</label>
                    <input id="mobile_no" placeholder="mobile number" name="mobile_no" type="tel" autoComplete="on" />
                    

                    {/* text area */}
                    <label htmlFor="message">message</label>
                    <input className={formStyle.textArea} id="message" name="message"  placeholder="message" type="text"/>

                    {/* submit button */}
                    <button type="submit">send message</button>

                </form>
            </div>
            {
                note?<Notification note="we will contact you soon" buttonName="OK"
                moduleState={note} closeIt={()=>{setNote(false)}}/>:""
            }
        </div>
    )
}

export default RightContact;