import CartWidget from './CartWidget' ;
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light colores animate__animated animate__bounce">
	<div className="container-fluid nav">
		<a className="navbar-brand" href="index.html">
		<h1 className="logo">Remerix</h1></a>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse nav "  id="navbarNavAltMarkup">
		<div className="navbar-nav">
			<Link to='/' className="nav-link texto" href=" #">Inicio</Link>
			<Link to='/1' className="nav-link texto" href=" #">Anime</Link>
			<Link to='/2' className="nav-link texto" href=" #">Comic</Link>
			<Link to='/3' className="nav-link texto" href=" #">Bandas</Link>
			
		</div>
		</div>
		<CartWidget/>
	</div>
	</nav>
    );
    
}

export default NavBar;