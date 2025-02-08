"use client"

import styled from 'styled-components'
import Applogo from "../assets/5738077.png"
import Marketing from "../assets/marketing.png"
import Logo from "../assets/LogoMaker.png"

// Services Data
const services = [
  {
    icon: <img src={Marketing} alt="Digital Marketing" />,
    title: "Digital Marketing",
    description:
      "Boost your online presence with our cutting-edge digital marketing strategies.",
  },
  
  {
    icon: <img src={Applogo} alt="Web and App Development" />,
    title: "Web and App Development",
    description:
      "Build powerful, user-friendly mobile apps for iOS and Android platforms.",
  },
  {
    icon: <img src={Logo} alt="Logo Design" />,
    title: "Logo Design",
    description:
      "Craft unique, memorable logos that represent your brand identity.",
  },
]

const Section = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
`

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  background-image: {banner};
`

const Title = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(to bottom right, #6a4cfc, #4b3d88);
  -webkit-background-clip: text; 
  color: transparent;
  /* Gradient for background */
  @media (min-width: 792px) {
    font-size: 2.5rem;
  }
  @media (max-width: 420px) {
    font-size: 2.5rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ServiceCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px); /* Slight lift on hover */
  }
`

const IconWrapper = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 50%;
  width: 200px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;  /* Ensure the icon stays above the Info layer */
  
  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const ServiceText = styled.div`
  text-align: center;
  color: #2d2d2d;
  z-index: 1;  /* Ensure the text stays above the Info layer */
`

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`

const ServiceDescription = styled.p`
  color: #4a4a4a;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

// Info Section (overlay style)
const Info = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;  
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  border-radius: 1rem;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 0;
  
  ${ServiceCard}:hover & {
    opacity: 1;
    z-index: 2; 
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;  
  left: 50%; 
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${ServiceCard}:hover & {
    /* opacity: 1; */
    transform: translate(-50%, -50%); /* Keep the button centered */
  }
`

const Button = styled.button`
  /* Background gradient for the button */
  background: linear-gradient(to bottom right, #6a4cfc, #4b3d88); /* Gradient for background */
  
  /* Make text white */
  color: white; /* Set text color to white */
  
  padding: 0.5rem 1rem;
  border-radius: 99px;
  font-weight: bold;
  border: none; /* Remove border if not needed */
  text-transform: uppercase; /* Optional, for better readability */
  
  /* Optional hover effect for background */
  &:hover {
    background: linear-gradient(to bottom right, #4b3d88, #6a4cfc); /* Slightly different gradient on hover */
    cursor: pointer;
  }
`;




export default function OurServices() {
  return (
    <Section id="services">
      <Container >
        <Title>Our Services</Title>
        <Grid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceText>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceText>

              {/* Info Section */}
              <Info>
                <ButtonWrapper>
                  <Button>Learn More</Button>
                </ButtonWrapper>
              </Info>
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
