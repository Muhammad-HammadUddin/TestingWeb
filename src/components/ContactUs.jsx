import { useState } from "react"
import styled from "styled-components"
import { User, Mail, MessageSquare, Send } from "lucide-react"

// Styled components
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #e0d0ff, #ccd9f5);
  padding: 16px;
  overflow: hidden;
`

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr; /* Single column for small screens */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* Two columns for larger screens */
  }
  background: white;
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const LeftSection = styled.div`
  width: 100%;
  background: linear-gradient(to bottom right, #6a4cfc, #4b3d88);
  padding: 48px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 48px;
  }
`

const RightSection = styled.div`
  width: 100%;
  padding: 48px;
`

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`

const Subheading = styled.p`
  font-size: 18px;
  margin-bottom: 32px;
`

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  margin-top: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #6a4cfc;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  height: 128px;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  margin-top: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #6a4cfc;
  }
`
// const Send=styled.button`
// `
const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #6a4cfc, #4b3d88);
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  &:hover {
    background: linear-gradient(to right, #5a3bd6, #45318b);
    transform: scale(1.05);
  }
  &:disabled {
    background: #b0a7dc;
    cursor: not-allowed;
  }
`

const Toast = styled.div`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: #48bb78;
  color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Set toast message
    setToastMessage({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setIsSubmitting(false)
    event.currentTarget.reset()

    // Hide toast after 5 seconds
    setTimeout(() => setToastMessage(null), 5000)
  }

  return (
    <Wrapper id="contact">
      <Container>
        {/* Left section (Image + header) */}
        <LeftSection>
          <div>
            <Heading>Get in Touch</Heading>
            <Subheading>
              We'd love to hear from you. Send us a message, and we'll respond as soon as possible.
            </Subheading>
          </div>
          <div className="relative h-64 md:h-auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUttGrplQu0DKNPmSsefLSRRmt9QPG8HY8Q&s"
              alt="Contact illustration"
              className="absolute bottom-0 left-0 w-full h-full object-cover rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </LeftSection>

        {/* Right section (Form) */}
        <RightSection>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name input */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center">
                <User className="w-5 h-5 mr-2 text-purple-500" />
                Name
              </label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>

            {/* Email input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-purple-500" />
                Email
              </label>
              <Input id="email" name="email" type="email" required placeholder="your@email.com" />
            </div>

            {/* Subject input */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input id="subject" name="subject" required placeholder="Subject" />
            </div>

            {/* Message input */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-purple-500" />
                Message
              </label>
              <Textarea id="message" name="message" required placeholder="Your message here..." />
            </div>

            {/* Submit button */}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send  />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </RightSection>
      </Container>

      {/* Toast notification */}
      {toastMessage && (
        <Toast>
          <strong>{toastMessage.title}</strong>
          <p>{toastMessage.description}</p>
        </Toast>
      )}
    </Wrapper>
  )
}
