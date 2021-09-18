
import style from './NavBar.module.css';
import { onMouseIn,onMouseOut } from "../dependency/Cursor";

const NavBar = ({changeState,getState}) => {

    const getStyle = (toReturn)=>{
        return toReturn?{
            color:"#777",
            fontWeight:"100"
        }:
        {};
    }

    console.log(changeState)

    return (
        <div className={style.container}>
            <p style={getStyle(!getState)}
            onMouseEnter={() => onMouseIn(70, .3)}
            onMouseLeave={onMouseOut}
            onClick={()=>changeState(true)}>development</p>
            <p style={getStyle(getState)}
            onMouseEnter={() => onMouseIn(70, .3)}
            onMouseLeave={onMouseOut}
            onClick={()=>changeState(false)}>maintenance</p>
        </div>
    )
}

export default NavBar;