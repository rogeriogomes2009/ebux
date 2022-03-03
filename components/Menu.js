import React, { useState } from 'react'

import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="warning fixed-top" light expand="md" className="fs-5">
          
          <NavbarBrand className="fw-bold fs-1" href="/">
          <img src='logo.png' className="img-fluid center" />
          </NavbarBrand>
          
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className='justify-content-end'>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/">Página Principal</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sobre">Sobre Nós</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/participe">Indique um livro</NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Categorias
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem href='/tecnologia'>Tecnologia</DropdownItem>
                  <DropdownItem href='/biblicos'>Bíblicos</DropdownItem>
                  <DropdownItem href='/esbocos'>Esboços/Sermões</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
       
      </Navbar>
    </div>
  )
}
export default Menu
