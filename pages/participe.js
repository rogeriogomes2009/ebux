import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'
import Footer from '../components/Footer'

const Participe = () => {
  return (
    <div>
      <Head>
        <title>Indique Livros - EBUX</title>
      </Head>
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container fluid className="bg-dark text-white text-center">
        <h1 className="display-6 p-4">Indique uma categoria e/ou livro</h1>
        <h3 className="lead">Coloque o link para download no campo abaixo!</h3>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form method="post">
                  <div className="form-group"></div>
                  <div>
                    <textarea
                      className="form-control"
                      rows="5"
                      name="comentario"
                    ></textarea>
                    <br />
                    <input type="submit" value="Adicionar" />
                    <br />
                  </div><br/>
                  <div className="card"></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  )
}
export default Participe
