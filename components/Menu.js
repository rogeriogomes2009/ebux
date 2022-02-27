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
      <Navbar color="warning" light expand="md" className="fs-5">
        <Container>
          <NavbarBrand className="fw-bold fs-1" href="/">
            EBUX
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
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
                  <DropdownItem>Tecnologia</DropdownItem>
                  <DropdownItem>Bíblicos</DropdownItem>
                  <DropdownItem>Esboços/Sermões</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Outras</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default Menu
