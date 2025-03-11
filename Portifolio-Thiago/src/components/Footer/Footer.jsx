import { Link } from "react-router-dom"

//assets
import '../Footer/Footer.css'
import Linkedin from '../../assets/Linkedin.png'
import GitHub from '../../assets/gitHub.png'
import Whatsapp from '../../assets/Whatsapp2.png'
import Email from '../../assets/email2.png'

function Footer () {
    return (

        <footer>
          <div className="container">
                        <div className="al-center d-flex jc-space-around">
        
                        <nav>
                    <ul>
                        <li>
                            <a 
                                href="https://wa.me/5585988017630" 
                                target="_blank" 
                               
                            >
                                <img src={Whatsapp} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:thiagosafreitas@hotmail.com">
                            <img src={Email} alt="" />
                            </a>
                        </li>
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
         
        </footer>
      
            
    )
}

export default Footer