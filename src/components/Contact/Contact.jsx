import './Contact.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";



function Contact() {
  // Reference to the form for resetting it after submission
  const formRef = useRef();

  function sendMail(e) {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs.sendForm("service_exh9uwb", "template_59dgrci", formRef.current, "8LDnZmauIGpVCZaRz")
      .then(() => {
          alert("Message sent successfully!");
          formRef.current.reset(); // Clear the form fields
      })
      .catch(() => {
          alert("Failed to send message. Please try again.");
      });
  }

  return (
    <section id='contact'>
        <div className='contactHeader'>
            <h1>Contact Me</h1>
        </div>
        <div className='contactBody'>
            <div className='contactOptions'>
            <article className='contactCard'>
                <MdOutlineEmail className='contactIcon'/>
                <h4>Email</h4>
                <h5>harvey.ji123@gmail.com</h5>
            </article>
            <article className='contactCard'>
                <IoPhonePortraitOutline className='contactIcon'/>
                <h4>Phone</h4>
                <h5>+1 (913) 915-4114</h5>
            </article>
            </div>
            <div className='contactFormContainer'>
                <Form ref={formRef} onSubmit={sendMail} className='contactForm'>
                    <FloatingLabel controlId="name" label="Your Name" className="floatingFormLabel">
                        <Form.Control type="text" name="name" placeholder="Your Name" required />
                    </FloatingLabel>
                    <FloatingLabel controlId="email" label="Email address" className="floatingFormLabel">
                        <Form.Control type="email" name="email" placeholder="name@example.com" required />
                    </FloatingLabel>
                    <FloatingLabel controlId="message" label="Message" className="floatingFormLabel">
                        <Form.Control as="textarea" name="message" placeholder="Your message" style={{ height: '100px' }} required />
                    </FloatingLabel>
                    <Button variant="primary" type="submit" className='contactFormButton'>Send</Button>
                </Form>
            </div>  
        </div>
    
    </section>
  );
}

export default Contact;