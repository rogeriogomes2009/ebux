import Head from 'next/head'
import React from 'react'
import Menu from '../components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Spinner } from 'reactstrap'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Seja Bem Vindo - EBUX</title>
        <meta name='description' content='ebooks livros virtuais ebux biblioteca'/>
        <meta name='author' content='KADOSH'/>
      </Head>
      <Menu />
      Home
       <div className="d-flex justify-content-center">
      <Spinner color="info" />
        </div>
      </div>
  )
}
export default Index
