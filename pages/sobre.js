import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import { Container } from 'reactstrap'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const Sobre = () => {
  return (
    <div>
      <Head>
        <title>Sobre Nós - EBUX</title>
      </Head>
         <Menu />
         <br/>
         <br/>
         <br/>
         <Container fluid className="bg-dark text-white text-center pt-5">
         <br/>
          <h3 className="lead pt-2">Este app foi desenvolvido para experimentar habilidades como desenvolvedor Fullstack.<br/>
          Nele foram usadas tecnologias e ferramentas como: NextJS, ReactJS, Express, Bootstrap, NodeJS, React-Icons, entre outros.<br/>
          Caso você queira entrar em contato comigo, basta acessar qualquer dos link's apresentados<br/>
          no rodapé da página. Caso queira contribuir com um livro que seja opensource, fique a vontade.<br/>
          Para isso basta acessar o link INDIQUE UM LIVRO no topo da página.<br/> 
          Grato por seu acesso!</h3>
          <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         
         <br/>
         <br/>
        </Container>
        <Footer />
    </div>
    )
}
export default Sobre
