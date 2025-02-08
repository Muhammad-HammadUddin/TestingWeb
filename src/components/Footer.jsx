import styled from 'styled-components';

// Styled Components
const FooterWrapper = styled.footer`
  background:linear-gradient(to bottom right, #6a4cfc, #4b3d88);
  color: #333;
  padding: 2rem 10rem;
  display: grid;
  width: 100%;
    grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const Nav = styled.nav`
  margin-bottom: 2rem;
  
`;
const Contact = styled.div`
`

const FooterTitle = styled.h6`
  font-size: 1.25rem;
  
  margin-bottom: 1rem;
  color: black;
`;

const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: black;
    transform: translateY(10%);
    font-size: 16px;
  }
`;

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  &:hover {
    color:black;
  }
`;

const SvgIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Nav>
        <FooterTitle>Services</FooterTitle>
        <FooterLink href="#">Branding</FooterLink>
        <FooterLink href="#">Design</FooterLink>
        <FooterLink href="#">Marketing</FooterLink>
        <FooterLink href="#">Advertisement</FooterLink>
      </Nav>
      <Nav>
        <FooterTitle>Company</FooterTitle>
        <FooterLink href="#">About us</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
        <FooterLink href="#">Jobs</FooterLink>
        <FooterLink href="#">Press kit</FooterLink>
      </Nav>
      <Nav>
        <FooterTitle>Social</FooterTitle>
        <SocialLinks>
          <SocialIcon href="#">
            <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </SvgIcon>
          </SocialIcon>
          <SocialIcon href="#">
            <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </SvgIcon>
          </SocialIcon>
          <SocialIcon href="#">
            <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </SvgIcon>
          </SocialIcon>
          <Contact>
            <p>info@company.com</p>
            <p>+123 456 789</p>
          </Contact>
        </SocialLinks>
      </Nav>
    </FooterWrapper>
  );
}

export default Footer;
