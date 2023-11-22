import { useState } from "react";
import Head from "./Head"
import "./header.css"
import { Link } from 'react-router-dom';


const Header = () => {

    const [click, setClick] = useState(false)

    return (
        <>
            <Head />
            <header>
                <nav className="flexSB">
                    <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Cursos</Link></li>
                        <li><Link to="/about">Sobre</Link></li>
                        <li><Link to="/team">Equipe</Link></li>
                        <li><Link to="/pricing">Preços</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                    <div className="start">
                        <div className="button">OBTER  CERTIFICADO</div>
                    </div>
                    <button className="toggle" onClick={() => setClick(!click)}>
                        {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> }
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header