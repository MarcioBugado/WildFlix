import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/wildflixlogo.png';


function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img style={{height:"60px"}} src={Logo} alt="Logo WildFlix" />
      </a>
      <p>
        Orgulhosamente criado com apoio da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
