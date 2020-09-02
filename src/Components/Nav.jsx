import React, { useEffect, useState} from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';


const Nav = () =>{


    const [ScrollBlackT, setScrollBlack] = useState();

    const scroll = () => {
        if (window.scrollY > 100) {
            setScrollBlack(true);
            
        } else
            setScrollBlack(false);
    }


    useEffect(() => {
        window.addEventListener("scroll",  function scroll(){
            
        })
        return () => {
            window.removeEventListener("scroll", scroll);
        }
    },[])


    return (
        <>
            <nav className={`navbar ${ScrollBlackT && "scroolbar_black"}`}>
                <Link to="/">
                <img 
                    className="nav_img"
                    src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
                    alt="Netflix Logo"                
                    />
                    </Link>
            </nav>
        </>
    )
}


export default Nav;