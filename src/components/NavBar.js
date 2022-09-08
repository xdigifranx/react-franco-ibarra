import CartWidget from './CartWidget' ;


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
			<a className="nav-link texto" href=" #">seccion 1</a>
			<a className="nav-link texto" href=" #">seccion 2</a>
			<a className="nav-link texto" href=" #">seccion 3</a>
			
		</div>
		</div>
		<CartWidget/>
	</div>
	</nav>
    );
    
}

export default NavBar;