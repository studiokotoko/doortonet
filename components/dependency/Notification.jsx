
import ReactDom from 'react-dom';
import { onMouseIn, onMouseOut } from "../dependency/Cursor";
import style from './style/notification.module.css';
import { useTransition, animated } from 'react-spring';


const Notification = ({ note, returnUrl, buttonName, moduleState,closeIt }) => {

    //menu modal transition animation
    const transition = useTransition(moduleState, {
        config: { mass: 1, tension: 100, friction: 18 },
        from: { x: 0, y: -1000 },
        enter: { x: 0, y: 0 },
        leave: { x: 0, y: -1000 },
    });


    if (!process.browser) return "";

    return ReactDom.createPortal(
        <div>
            {transition((s, item) => (
                item ?
                    <animated.div style={s} className={style.container}>
                        <div className={style.subContain}>
                            <p onMouseEnter={() => onMouseIn(100, .4)}
                                onMouseLeave={onMouseOut}>
                                {note}
                            </p>
                            <button onMouseEnter={() => onMouseIn(100, .4)}
                                onMouseLeave={onMouseOut} onClick={() => { closeIt() }}>
                                {buttonName}
                            </button>
                        </div>
                    </animated.div> : ""
            ))}
        </div>,
        document.getElementById('notification')
    )
}

export default Notification;