import './navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget'

const NavbarComp = () => {
    return (
    <header>
        <Navbar className='header_container_navbar bg-leo' expand="lg">
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand className='navbar__logo animate__animated animate__bounce'><Link to={"/"}><img src='../assets/multimedia/images/general/logo.png' alt="logo" className='w-100'/></Link></Navbar.Brand>
                <CartWidget/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="header_container_navbar--links__container">
                    <NavDropdown className='enlace enlace-prin' title="Catálogo" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to={'categoria/brocheros'} className='enlace'>Brocheros</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'categoria/carteras'} className='enlace'>Carteras</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'categoria/mochilas'} className='enlace'>Mochilas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'categoria/neceseres'} className='enlace'>Neceseres</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'categoria/portatodo'} className='enlace'>Portatodo</Link></NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item><Link to={'/categorias'} className='enlace'>Ver todo</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Link to={"/contacto"} className="header__navlink enlace enlace-prin">Contacto</Link>
                    <Link to={"/medios"} className="header__navlink enlace enlace-prin">Medios de Pago</Link>
                    <a className="header__navlink enlace enlace-prin" href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falarakhaneceseres%2Fposts%2F4078876035479333&show_text=true&width=500" target="_blank" rel="noopener noreferrer">Ventas al por mayor</a>
                    <a className="header__navlink enlace enlace-prin" href="https://www.instagram.com/stories/highlights/17909957731855954/" target="_blank" rel="noopener noreferrer"><BsInstagram/> Instatips</a>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </header>
    )
}

export default NavbarComp