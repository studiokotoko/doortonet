
import Image from 'next/image';
import style from './Content.module.css';
import { onMouseIn,onMouseOut } from "../dependency/Cursor";

const imgDevelopment = require('../../public/img/serviceDevlopment.png');



const ContentDev = () => {
    return (
        <div className={style.container}>
            <p className={style.para} onMouseEnter={() => onMouseIn(200, .2)}
                            onMouseLeave={onMouseOut}>{topPara}</p>
            <div className={style.contImg}>
                <Image src={imgDevelopment} alt="info image" width="1000px" height="550px" />
            </div>
            <div className={style.list}>
                {
                    devDist.map((data, index) => {
                        return <div className={style.listContentDiv} key={index}>
                            <p className={style.listIndex} onMouseEnter={() => onMouseIn(100, .3)}
                            onMouseLeave={onMouseOut}>{`${index+1}.`}</p>
                            <p className={style.listContent} onMouseEnter={() => onMouseIn(100, .2)}
                            onMouseLeave={onMouseOut}>{data}</p>
                        </div>
                    })
                }
            </div>
            <p className={style.para} onMouseEnter={() => onMouseIn(200, .2)}
                            onMouseLeave={onMouseOut}>{downPara}</p>
        </div>
    )
}

export default ContentDev;


const devDist = [
    'Wikis are enabled by wiki software, otherwise known as', 'being a form of a content management system',
    'content is created without any defined owner or leader, and wikis have ', 'little inherent structure, allowing structure little inherent structure, allowing structure',
    'Wikis are enabled by wiki software, otherwise known as', 'being a form of a content management system',
    'content is created without any defined owner or leader, and wikis have ', 'little inherent structure, allowing structure little inherent structure, allowing structure',
    'Wikis are enabled by wiki software, otherwise known as', 'being a form of a content management system',
    'content is created without any defined owner or leader, and wikis have ', 'little inherent structure, allowing structure little inherent structure, allowing structure',
    'Wikis are enabled by wiki software, otherwise known as', 'being a form of a content management system',
    'content is created without any defined owner or leader, and wikis have ', 'little inherent structure, allowing structure little inherent structure, allowing structure',
    'Wikis are enabled by wiki software, otherwise known as', 'being a form of a content management system',
    'content is created without any defined owner or leader, and wikis have ', 'little inherent structure, allowing structure little inherent structure, allowing structure',
    'Wikis are enabled by wiki software, otherwise known as', 'being a form of a content management system',
    'content is created without any defined owner or leader, and wikis have ', 'little inherent structure, allowing structure little inherent structure, allowing structure'
]

const topPara = `Wikis are enabled by wiki software, otherwise known as 
wiki engines. A wiki engine, being a form of a content management system,
differs from other web-based systems such as blog software, in that the
content is created without any defined owner or leader, and wikis have 
little inherent structure, allowing structure to emerge according to the needs
of the users.[1] Wiki engines usually allow content to be written using a simplified markup
language and sometimes edited with the help of a rich-text editor.[2] There are dozens of
different wiki engines in use, both standalone and part of other software, such as bug tracking
systems. Some wiki engines are open source, whereas others are proprietary. Some permit control
over different functions (levels of access); for example, editing rights may permit changing,
adding, or removing material. Others may permit access without enforcing access control. Other
rules may be imposed to organize content. `


const downPara = `Wikis are enabled by wiki software, otherwise known as 
wiki engines. A wiki engine, being a form of a content management system,
differs from other web-based systems such as blog software, in that the
content is created without any defined owner or leader, and wikis have 
little inherent structure, allowing structure to emerge according to the needs
of the users.[1] Wiki engines usually allow content to be written using a simplified markup
language and sometimes edited with the help of a rich-text editor.[2] There are dozens of
different wiki engines in use, both standalone and part of other software, such as bug tracking
systems. Some wiki engines are open source, whereas others are proprietary. Some permit control
over different functions (levels of access); for example, editing rights may permit changing,
adding, or removing material. Others may permit access without enforcing access control. Other
rules may be imposed to organize content. `