import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Styled Components for the FAQ section
const Section = styled.section`
  padding: 60px 0;
  background-color: #f9fafb;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
 
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  color: #1f2937;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: 20px;
  /* background-color: white; */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const Question = styled.div`
  padding: 16px;
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled(motion.div)`
  padding: 16px;
  font-size: 1rem;
  color: #4b5563;
  background-color: #f9fafb;
`;

const ArrowIcon = styled.div`
  font-size: 1.25rem;
  color: #4b5563;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  transition: transform 0.3s ease;
`;

const faqData = [
  {
    question: "What is the purpose of this FAQ?",
    answer: "The FAQ section provides answers to common questions about our services and features. It's designed to help users find information quickly.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact customer support via email at support@example.com or through our live chat on the website.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee on all our products. If you're not satisfied, simply contact us within 30 days for a full refund.",
  },
  {
    question: "Are your services available internationally?",
    answer: "Yes, we provide our services globally. No matter where you are located, we can assist you with your needs.",
  },
];

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <Container>
        <Title>Frequently Asked Questions</Title>
        {faqData.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <ArrowIcon isOpen={openIndex === index}>⌄</ArrowIcon>
            </Question>
            <Answer
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
            >
              {faq.answer}
            </Answer>
          </FAQItem>
        ))}
      </Container>
    </Section>
  );
};

export default FAQS;
