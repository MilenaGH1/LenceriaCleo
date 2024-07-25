import './Footer.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export const Footer = () => {
  return (
    <div>
        <div className='footer'>
          <img src="/images/Logo.jpg" alt="Logo" />

          <div className="info-contact">

            <h3>Nuestras redes sociales</h3>

            <a href="#"><FaInstagram />Mimi_scent</a>
            <a href="#"><FaWhatsapp />1106894533</a>

          </div>
          <ul className="footer-links">
            <li><a href="#">Terminos y condiciones</a></li>
            <li><a href="#">Trabaja con nosotros</a></li>
            <li><a href="#">Soporte</a></li>    
          </ul>
        </div>

        
    </div>

)
}
