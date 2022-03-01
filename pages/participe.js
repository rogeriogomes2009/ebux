import React from 'react'
import Menu from '../components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'
import Footer from '../components/Footer'

const Participe = () => {
  return (
    <div>
         <Menu />
        <Container fluid className="bg-dark text-white text-center">
          <a>Indique um livro</a>
        </Container>
        <Footer/>    
    </div>
    )
}
export default Participe
