import React from 'react'
import Link from 'next/link'
import { Container } from 'reactstrap'
import { ImBriefcase, ImFacebook2, ImGithub, ImLinkedin, ImMail, ImWhatsapp } from 'react-icons/im'
import styles from '../components/Footer.module.css'


const Footer = () => {
  return (
    <div>
      <Container fluid className="bg-dark text-white text-center">
       <br/>
       Desenvolvido por: Rogerio Gomes - KADOSHDEV &copy;<br/>
       <ul className={styles.social_list}>
         <Link target='_blank' href='https://github.com/rogeriogomes2009/'>
         <ImGithub className='m-4' />
         </Link>
         <ImLinkedin className='m-4'/>
         <ImFacebook2 className='m-4'/>
         <ImWhatsapp className='m-4'/>
         <ImBriefcase className='m-4'/>
         <ImMail className='m-4'/>
      </ul>
       <br/>
       <br/>
      </Container>
    </div>
  )
}
export default Footer
