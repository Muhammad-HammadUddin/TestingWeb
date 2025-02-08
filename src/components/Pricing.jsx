import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Rocket, Star } from "lucide-react";
import styled from "styled-components";

// Styled components for the layout
const Section = styled.section`
  padding: 80px 0;
  background-color: white;
  overflow: hidden;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1; /* Keep it behind the content */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  transform: translateY(100%); /* Start fully below */
  overflow: hidden;
  cursor: pointer;
  padding: 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  color: transparent;
  background: linear-gradient(to bottom right, #6a4cfc, #4b3d88);
  -webkit-background-clip: text;Orange color */
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #4b5563; /* Gray color */
  margin-bottom: 32px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 64px;
  flex-wrap: wrap;

  @media only screen and (max-width: 792px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// Card Component with hover effects
const Card = styled(motion.div)`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.popular ? "#f97316" : "#e5e7eb")};
  box-shadow: ${(props) => (props.popular ? "0px 4px 16px rgba(0, 0, 0, 0.1)" : "none")};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover ${Info} {
    opacity: 1;
    transform: translateY(0); /* Move it up into view */
    z-index: 1; /* Bring it above card content */
  }

  &:hover {
    transform: translateY(-8px); 
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1); /* Add a shadow */
  }
`;

const PopularTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 16px;
  background-color: #f97316;
  color: white;
  font-size: 0.875rem;
  padding: 6px 12px;
  border-radius: 9999px;
`;

const CardIcon = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const CardDescription = styled.p`
  color: #6b7280; /* Gray color */
  margin-bottom: 16px;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 24px;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 24px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const CheckIcon = styled(Check)`
  width: 20px;
  height: 20px;
  color: #34d399; /* Green color */
  margin-right: 8px;
  margin-top: 2px;
`;

const Button = styled.button`
  width: 100%;
  background: linear-gradient(to bottom right, #6a4cfc, #4b3d88); /* Gradient for background */
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ea580c; /* Darker orange color on hover */
  }
`;

const pricingData = [
  {
    type: "service",
    name: "Web & App Development",
    price: 2499,
    description: "Custom web and mobile app development tailored to your business needs.",
    icon: <Rocket className="h-8 w-8 text-purple-500" />,
    features: [
      "Custom web and mobile app design",
      "Full-stack development",
      "User-friendly UI/UX",
      "E-commerce integration",
      "3 months of support",
    ],
  },
  {
    type: "service",
    name: "Logo Design",
    price: 999,
    description: "Create a unique and memorable brand identity with a custom logo design.",
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    features: [
      "Custom logo design",
      "2 design concepts to choose from",
      "Unlimited revisions",
      "Brand identity guidelines",
      "1 month of support",
    ],
  },
  {
    type: "service",
    name: "Digital Marketing",
    price: 4999,
    description: "Comprehensive digital marketing strategy to grow your online presence.",
    icon: <Star className="h-8 w-8 text-yellow-500" />,
    features: [
      "Social media strategy",
      "Content creation (20 posts)",
      "PPC campaign setup and management",
      "SEO optimization",
      "Monthly performance reports",
      "6 months of priority support",
    ],
  },
];

export default function PricingSection() {
  return (
    <Section id="pricing">
      <Container>
        <Title>Simple, Transparent Pricing</Title>
        <Subtitle>Choose the service that's right for your business</Subtitle>

        {/* Pricing Cards */}
        <CardGrid>
          {pricingData.map((item, index) => (
            <Card key={item.name} popular={item.popular}>
              {item.popular && <PopularTag>Most Popular</PopularTag>}
              <CardIcon>{item.icon}</CardIcon>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <Price>${item.price}</Price>
              <FeaturesList>
                {item.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <CheckIcon />
                    {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>
              <Button>Get Started</Button>
              {/* Hoverable Info Section */}
              <Info>
                <h3 className="text-2xl text-white">Learn More</h3>
              </Info>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
