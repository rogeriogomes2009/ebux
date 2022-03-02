import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'
import Footer from '../components/Footer'

const Esbocos = () => {
  return (
    <div>
      <Head>
        <title>Esboços/Pregações - EBUX</title>
      </Head>
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <Container fluid className="bg-dark text-white text-center">
      <br />
      <br />
      <br />
        <h1 className="display-6 p-2">EM BREVE</h1>
        <h3 className="lead">Traremos novidades!</h3>
        <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     
      </Container>
      <Footer />
    </div>
  )
}
export default Esbocos