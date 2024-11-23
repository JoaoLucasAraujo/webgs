
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2e7d32; /* Verde escuro */
  color: white;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const SocialLinks = styled.div`
  margin: 10px 0;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Educação Energética. Todos os direitos reservados.</p>
      <SocialLinks>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </SocialLinks>
      <p>Desenvolvido com amor e dedicação.</p>
    </FooterContainer>
  );
};

export default Footer;