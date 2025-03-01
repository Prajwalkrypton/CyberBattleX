// import { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'
// import './Navbar.css'

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false)
//   const location = useLocation()
  
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }
    
//     window.addEventListener('scroll', handleScroll)
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])
  
//   return (
//     <BootstrapNavbar 
//       expand="lg" 
//       fixed="top" 
//       className={`cyber-navbar ${scrolled ? 'scrolled' : ''}`}
//     >
//       <Container>
//         <BootstrapNavbar.Brand as={Link} to="/" className="navbar-brand">
//           <span className="brand-text">CYBER</span>
//           <span className="brand-text accent">BATTLE</span>
//           <span className="brand-text">X</span>
//         </BootstrapNavbar.Brand>
        
//         <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        
//         <BootstrapNavbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link 
//               as={Link} 
//               to="/" 
//               className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link 
//               as={Link} 
//               to="/features" 
//               className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}
//             >
//               Features
//             </Nav.Link>
//             <Nav.Link 
//               as={Link} 
//               to="/workflow" 
//               className={`nav-link ${location.pathname === '/workflow' ? 'active' : ''}`}
//             >
//               Workflow
//             </Nav.Link>
//             <Nav.Link 
//               as={Link} 
//               to="/about" 
//               className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
//             >
//               About
//             </Nav.Link>
//             <Nav.Link 
//               as={Link} 
//               to="/contact" 
//               className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
//             >
//               Contact
//             </Nav.Link>
//           </Nav>
//           <div className="ms-lg-3 mt-3 mt-lg-0">
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </BootstrapNavbar.Collapse>
//       </Container>
//     </BootstrapNavbar>
//   )
// }

// export default Navbar
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()  // Hook for navigation

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      className={`cyber-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="navbar-brand">
          <span className="brand-text">CYBER</span>
          <span className="brand-text accent">BATTLE</span>
          <span className="brand-text">X</span>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/features" className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}>
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="/workflow" className={`nav-link ${location.pathname === '/workflow' ? 'active' : ''}`}>
              Workflow
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Nav.Link>
          </Nav>
          <div className="ms-lg-3 mt-3 mt-lg-0">
            {/* Redirects to signup page */}
            <button className="btn btn-primary" onClick={() => navigate('/signup')}>
              Get Started
            </button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
