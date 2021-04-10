import React, { Component } from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'


 class Menu extends Component {
   constructor(props) {
     super()
   
  
   }
   
  render() {
    return (
      <>

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home" className='text-info'><h1>New life Hospital</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="ml-auto top-fixed">
     
                <Link className='nav-link text-info' to='/'>Home</Link>
                <Link className='nav-link text-info' to='/About'>About</Link>
                <Link className='nav-link text-info' to='/Contact'>Contact</Link>
                <Link className='nav-link text-info' to='/Servics'>Servics</Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>

{this.props.children}
        
      </>
    )
  }
}
export default Menu
