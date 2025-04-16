import './contactForm.css'

export function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Your Name" className="form-input" />
      <input type="email" placeholder="Your Email" className="form-input" />
      <textarea placeholder="Your Message" className="form-textarea"></textarea>
      <button type="submit" className="form-button">Send</button>
    </form>
  )
}