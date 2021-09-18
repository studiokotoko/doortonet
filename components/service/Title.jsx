
import style from './Title.module.css';
import { onMouseIn, onMouseOut } from "../dependency/Cursor";

const string = `our service`;

const Title = () => {
    return (
        <>
            {
                string.split("").map((data, index) => {
                    if(data===" ")return <p className={style.titleBlank}>&nbsp;</p>;
                    return <p className={style.titleStyle} key={index}
                    onMouseEnter={() => onMouseIn(120, .2)}
                            onMouseLeave={onMouseOut}>{data}</p>
                })
            }
        </>
    )
}

export default Title;