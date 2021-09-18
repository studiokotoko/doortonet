import React, { useState } from 'react';
import ReactDom from 'react-dom';
import style from './header.module.css';
import Link from 'next/link';
import { onMouseIn,onMouseOut } from "./dependency/Cursor";
import { useRouter } from 'next/router';
import { RiMenu4Fill } from 'react-icons/ri';
import { useTransition, animated } from 'react-spring';

const Header = () => {

    const [isModalOpen, setisModalOpen] = useState(false);

    //menu modal transition animation
    const transition = useTransition(isModalOpen, {
        config:{mass:1,tension:100,friction:18},
        from: { x: -1000, y: 0 },
        enter: { x: 0, y: 0 },
        leave: { x: -1000, y: 0 },
    });

    //nav bar links
    const NavUL = () => {
        return (
            <ul className={style.ul}>
                <NavLink href="/" title="home" />
                <NavLink href="/service" title="service" />
                <NavLink href="/jobs" title="jobs" />
                <NavLink href="/login" title="login" />
                {isModalOpen && <NavLink href="/contact" title="contact" />}
            </ul>
        )
    }

    return (
        <>
            <div className={style.container}>
                <nav className={style.nav}>

                    {/* logo */}
                    <Link href="/" passHref>
                        <label className={style.logo}
                            onMouseEnter={() => onMouseIn(100, .4)}
                            onMouseLeave={onMouseOut}
                        >door to net</label>
                    </Link>

                    {/* nav bar for landscape screen */}
                    <div className={style.hideInMobile}>
                        <NavUL />
                    </div>

                    {/* contact us */}
                    <Link href="/contact" passHref>
                        <p onMouseEnter={() => onMouseIn(100, .4)}
                            onMouseLeave={onMouseOut} className={style.contact}>contact us</p>
                    </Link>

                    {/* menu button from mobile modal */}
                    <RiMenu4Fill onClick={() => { setisModalOpen(true) }} className={style.menuIcon} />
                
                </nav>

                {/* menu link from portrait screen */}
                <MobileMenuModal transition={transition}  closeIt={() => { setisModalOpen(false) }}>
                    <NavUL />
                </MobileMenuModal>

            </div>
        </>

    )
}

//nav links genrator
const NavLink = ({ href, title }) => {

    //router is use to get path
    const router = useRouter();

    //get style according to path of route
    const getStyle = () => {
        if (router.pathname === href) return style.list_active;
        return style.list;
    }

    //send back the link
    return <Link href={`${href}`} passHref>
        <li className={getStyle()}
            onMouseEnter={() => onMouseIn(70, .3)}
            onMouseLeave={onMouseOut}>{`${title}`}</li>
    </Link>
}

//mobile menu modal genrator
const MobileMenuModal = ({closeIt, children, transition }) => {

    //check if document is available
    if(!process.browser) return "";

    //send react portal modal
    return ReactDom.createPortal(
        <div>
            {transition((s, item) => (
                item ?
                    <animated.div style={s} className={style.menuModal}
                        onClick={() => { closeIt() }}>
                        {children}
                    </animated.div> : ""
            ))}
        </div>,
        document.getElementById('menu-modal')
    );
}

export default Header;
