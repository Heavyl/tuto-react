import '../styles/Banner.css';
import logo from '../assets/logo.png'

function Banner() {
    const title = "La Maison Jungle"
    
    return (<div className="lmj-title">
        <img src={logo} alt="Logo de la Maison Jungle" className='lmj-logo'/>
        <h1>{title}</h1>
    </div>)
}

export default Banner