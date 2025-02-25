
import { useNavigate } from "react-router-dom"
function Header() {
const navigate = useNavigate()

    return (
      <>
   <header className="sticky-top" > 
    <nav className='nav    '>
    <div className='  w-100'> 
     <ul className=' d-flex p-0 m-0 list-unstyled justify-content-evenly'>
      <img height={140} id="logo" src="image/Captura de tela 2025-02-25 110424.png"></img>
      
      <li ><a onClick={()=> navigate("/")}>Principal</a></li>
       <li><a onClick={()=> navigate("/Historia")}>História</a></li>
     
      </ul>
      </div> 
    </nav>
   </header>
      </>
    )
  }
  
  export default Header
  