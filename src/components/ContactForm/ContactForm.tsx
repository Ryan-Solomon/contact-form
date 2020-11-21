import React from 'react';
import './ContactForm.styles.css';

const ContactForm = () => {
  return (
    <main className='form-container'>
      <h1>CONTACT</h1>
      <section className='form-info'>
        <h2>INFORMATION</h2>
        <h4>Lorem, ipsum dolor sit amet elit. Facilis, nam.</h4>
        <h4>Lorem, ipsum dolor sit amet elit. Facilis, nam.</h4>
        <h4>Lorem, ipsum dolor sit amet elit. Facilis, nam.</h4>
      </section>
      <section className='faq-thingy'>
        <div className='card'>
          <h4>Lorem ipsum dolor sit amet.</h4>
        </div>
        <div className='card'>
          <h4>Lorem ipsum dolor sit amet.</h4>
        </div>
        <div className='card'>
          <h4>Lorem ipsum dolor sit amet.</h4>
        </div>
        <div className='card'>
          <h4>Lorem ipsum dolor sit amet.</h4>
        </div>
      </section>

      <h2>CONTACT FORM</h2>
      <form>
        <section className='form-section'>
          <label htmlFor='first-name'>First Name</label>
          <input id='first-name' placeholder='First Name' type='text' />
        </section>
        <section className='form-section'>
          <label htmlFor='last-name'>Last Name</label>
          <input id='last-name' placeholder='Last Name' type='text' />
        </section>
        <section className='form-section'>
          <label htmlFor='country'>Country</label>
          <input id='country' placeholder='Country' type='text' />
        </section>
        <section className='form-section'>
          <label htmlFor='email-address'>Email Address</label>
          <input id='email-address' placeholder='Email Address' type='email' />
        </section>
        <section className='form-section'>
          <label htmlFor='subject'>Subject</label>
          <input id='subject' placeholder='Subject' type='text' />
        </section>
        <section className='form-section'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' placeholder='Message' />
        </section>
      </form>
    </main>
  );
};

export default ContactForm;
