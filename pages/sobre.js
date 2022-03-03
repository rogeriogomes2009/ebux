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
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/manifest.json"/>
<meta name="msapplication-TileColor" content="#ffffff"/>
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
<meta name="theme-color" content="#ffffff"/>
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
