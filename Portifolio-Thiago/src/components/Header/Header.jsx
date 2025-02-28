import { Link } from "react-router-dom"

// assets
import '../Header/Header.css'
import Linkedin from '../../assets/Linkedin.png'
import GitHub from '../../assets/gitHub.png'

function Header () {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-around">

                    <nav>
                        <ul className="d-flex">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Projetos</Link></li>
                        <li><Link to="/">Tecnologias</Link></li>
                        <li><Link to="/">Sobre mim</Link></li>
                        </ul>
                        
                    </nav>
                    <nav>
                    <a 
                        href="https://www.linkedin.com/in/thiagosafreitas/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src={Linkedin} alt="LinkedIn" />
                    </a>

                    <a 
                        href="https://github.com/ThiagodeSaFreitas" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src={GitHub} alt="GitHub" />
                    </a>

                    </nav>
                   
                </div>
            </div>
        </header>
    )
}

export default Header