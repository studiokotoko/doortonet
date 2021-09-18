
import style from './contact.module.css';
import { onMouseIn, onMouseOut } from "../dependency/Cursor";

const LeftContant = () => {
    return (
        <div className={style.leftContant}>
            <h1 onMouseEnter={() => onMouseIn(150, .4)}
                onMouseLeave={onMouseOut}>contact &nbsp; us</h1>
            <div className={style.contantGrid}>
                <table>
                    <tr>
                        <th>mobile no</th>
                        <th>:</th>
                        <td>9765015214</td>
                    </tr>
                    <tr>
                        <th>email id</th>
                        <th>:</th>
                        <td>PRATIK SHAHKAR@GMAIL.COM</td>
                    </tr>
                    <tr>
                        <th>address</th>
                        <th>:</th>
                        <td>If you want to start measuring <br/>
                            performance in your app, pass <br/>
                            a function to log results.
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default LeftContant;