import Head from 'next/head'
import React from 'react'
import Menu from '../components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'


const Header = () => {
  return (
<div>
<Head>     
        <title>Seja Bem Vindo - EBUX</title>
        <meta name='description' content='ebooks livros virtuais ebux biblioteca'/>
        <meta name='author' content='KADOSH'/>
      </Head>
      <Menu />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <Container className = 'bg-white text-center'>
           <img src='young.png' className="img-fluid"/>
        </Container>
</div>
  )
}
export default Header