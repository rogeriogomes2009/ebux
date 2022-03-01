import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'
import Footer from '../components/Footer'

const biblicos = () => {
  return (
    <div>
      <Head>
        <title>Livros Bíblicos - EBUX</title>
      </Head>
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container fluid className="bg-dark text-white text-center">
        <h1 className="display-4">Livros Bíblicos</h1>
        <p className="lead">Escolha seu livro e tenha uma ótima leitura!</p>
        <div className="row">
          <div className="col-lg-4">
            <img src="1.jpg" className="img-fluid" width="100" height="140" />

            <h3>A tristeza de vocês se transformará em alegria</h3>
            <p>
            É uma chance de caminhar com a igreja, ao longo dos tempos e pelo mundo, enquanto ela caminha com seu Noivo na semana mais importante da história do mundo. 
            </p>
            <br/>
            <br/>
            <p>
              <a
                target="_blank"
                className="btn btn-secondary"
                href="https://drive.google.com/file/d/1nHByjl7fd5TWmMtKzsTE9Dxi2lZp6mK9/view?usp=sharing"
              >
                Baixar Livro &raquo;
              </a>
            </p>
            <hr />
          </div>
          <div className="col-lg-4">
            <img src="2.jpg" className="img-fluid" width="100" height="140" />

            <h3>
              Transformando
              <br /> o mundo
            </h3>
            <p>
            Neste livro, somos introduzidos às estratégias que o apóstolo Paulo usou em sua obra de evangelização e aprendemos com ele alguns fundamentos essenciais, como entender o lugar e cultura do povo, chegar onde as pessoas estão e apresentar Cristo através das Escrituras.
            </p>
            <p>
              <a
                target="_blank"
                className="btn btn-secondary"
                href="https://drive.google.com/file/d/1Tqh4M6Fthma25xB5KueBKRPZYJj7mVqd/view?usp=sharing"
              >
                Baixar Livro &raquo;
              </a>
            </p>
            <hr />
          </div>
          <div className="col-lg-4">
            <img src="3.jpg" className="img-fluid" width="100" height="140" />

            <h3>
              A melhor notícia
              <br /> da Páscoa
            </h3>
            <p>
            O que você celebra na Páscoa? E se eu lhe falasse que existe uma notícia mais doce que o chocolate? Mais cheia de vida que ovos? E mais alegre que o saltitar do coelho?
            </p>
            <br/>
            <br/>
            <p>
              <a
                target="_blank"
                className="btn btn-secondary"
                href="https://drive.google.com/file/d/1zz5WpHBt8in0rF_CGUh0r4q8E6hyronk/view?usp=sharing"
              >
                Baixar Livro &raquo;
              </a>
            </p>
            <hr />
          </div>
          <div className="col-lg-4">
            <img src="4.jpg" className="img-fluid" width="100" height="140" />

            <h3>
              Por que a Cruz?
            </h3>
            <p>
            como era possível que o Filho eterno de Deus, por quem e para quem foram criadas todas as coisas (ver Colossenses 1.15-16), acabasse, em sua natureza humana, morrendo uma das mortes mais cruéis e humilhantes já inventadas pelo homem?
            </p>
            <p>
              <a
                target="_blank"
                className="btn btn-secondary"
                href="https://drive.google.com/file/d/1c1CZCn_K0JqYB0bubWSo4qGO37LTqKx_/view?usp=sharing"
              >
                Baixar Livro &raquo;
              </a>
            </p>
            <hr />
          </div>
          <div className="col-lg-4">
            <img src="5.jpg" className="img-fluid" width="100" height="140" />

            <h3>
              A casa do Pai
            </h3>
            <p>
            Senhor, abra nossos olhos para que possamos ver as maravilhas da tua Lei. Ajuda-nos a entender tudo o que tens ensinado nessa passagem. Aplica o ensino aos nossos corações.
            </p>
            <br/>
            <p>
              <a
                target="_blank"
                className="btn btn-secondary"
                href="https://drive.google.com/file/d/16gjLKYWZJNJSgziU59u_z65l4PcNyCSX/view?usp=sharing"
              >
                Baixar Livro &raquo;
              </a>
            </p>
            <hr />
          </div>
          <div className="col-lg-4">
            <img src="6.jpg" className="img-fluid" width="100" height="140" />

            <h3>
              Creio
            </h3>
            <p>
            O Credo Apostólico é um dos mais antigos e belos documentos da Cristandade. Sua fórmula sucinta e fácil de gravar tem sido usada pela igreja cristã há quase dois mil anos e representa um verdadeiro compromisso de fé do cristão sincero.
            </p>
            <p>
              <a
                target="_blank"
                className="btn btn-secondary"
                href="https://drive.google.com/file/d/1QpvFblUxukdm4lF-feHQjugCmusM6nua/view?usp=sharing"
              >
                Baixar Livro &raquo;
              </a>
            </p>
            <hr />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}
export default biblicos
