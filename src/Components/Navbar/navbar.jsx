import './Navbar.css'
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  return (

  
    <div className="navbar">
      <img src="./public/images/Logo.jpg" alt="" />
      <button className="toggle-button"><IoMenu/>
        <ul className="navbarList">
          <li><button><a href="#">Home</a></button></li>
          <li><button><a href="#">Catalogo</a></button></li>
          <li><button><a href="#">Iniciar Sesion</a></button></li>
        </ul>
      </button> 
      <div className='navbarDestok'>
        
        <ul className="navbarList">
          <li><button><a href="#">Home</a></button></li>
          <li><button><a href="#">Catalogo</a></button></li>
          <li><button><a href="#">Iniciar Sesion</a></button></li>
        </ul>

      </div>
      
    </div>
    


    
  );
}