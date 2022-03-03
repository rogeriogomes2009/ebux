import React from 'react'
import Link from 'next/link'
import { Container } from 'reactstrap'
import { ImBriefcase, ImFacebook2, ImGithub, ImLinkedin, ImMail, ImWhatsapp } from 'react-icons/im'
import styles from '../components/Footer.module.css'


const Footer = () => {
  return (
    <div>
      <Container fluid className="md:bg-dark m-8 text-white text-center" expand="md">
       <br/>
       Desenvolvido por: Rogério Gomes - KADOSHDEV &copy;<br/>
       <ul className={styles.social_list}>
         <a target='_blank' href='https://www.github.com/rogeriogomes2009/'>
         <ImGithub className='m-4' />
         </a>
         <a target='_blank' href='https://www.linkedin.com/in/rogeriogomes2009/'>
         <ImLinkedin className='m-4'/>
         </a>
         <a target='_blank' href='https://www.facebook.com/kadoshdev/'>
         <ImFacebook2 className='m-4'/>
         </a>
         <a target='_blank' href='https://wa.me/5521972300670'>
         <ImWhatsapp className='m-4'/>
         </a>
         <a target='_blank' href='https://resume-rogeriogomes2009.vercel.app/'>
         <ImBriefcase className='m-4'/>
         </a>
         <a target='_blank' href='mailto:kadoshdev@gmail.com'>
         <ImMail className='m-4'/>
         </a>
      </ul>
       <br/>
       <br/>
      </Container>
    </div>
  )
}
export default Footer
