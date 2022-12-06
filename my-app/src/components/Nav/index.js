import React, {useEffect} from 'react';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




function Nav(props) {
  return(
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" >
        <NavLink className='nav-link' to='/'>
          <div className='text'>
            <h3 className='nav-little-front'>Machiko Carroll</h3>
          </div>
        </NavLink>
        <ul className='navbar'>
          <li className='nav-item'>
          <NavLink to='/about'>
            <div className='text'>About me</div>
          </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/portfolio'>
             <div className='text'>Portfolio</div>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact'>
             <div className='text'>Contact</div>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/resume'>
              <div className='text'>Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  )
}
  
//   return (
//     <>
//       <Navbar expand="lg" bg="dark" variant="dark" >
//         <Container>
//         <Navbar href="#home">Machiko Carroll</Navbar>
//         <Nav className="me-auto">
//           <Nav.Link href="#About">About me</Nav.Link>
//           <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
//           <Nav.Link href="#Contact">Contact</Nav.Link>
//           <Nav.Link href="#Resume">Resume</Nav.Link>
//           onClick={()=> setCurrentPage(page)}
//         </Nav>
//         </Container>
//         </Navbar>
//         <br />
//     </>
//   );
// }

export default Nav;