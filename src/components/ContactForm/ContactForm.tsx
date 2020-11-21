import React from 'react';
import './ContactForm.styles.css';

const ContactForm = () => {
  return (
    <main className='form-container'>
      <h1>CONTACT</h1>
      <div className='top-form-section'>
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
      </div>

      <div className='contact-form-section'>
        <h2>CONTACT FORM</h2>
        <form className='form'>
          <section className='form-section first-name'>
            <label htmlFor='first-name'>First Name</label>
            <input id='first-name' type='text' />
          </section>
          <section className='form-section last-name'>
            <label htmlFor='last-name'>Last Name</label>
            <input id='last-name' type='text' />
          </section>
          <section className='form-section'>
            <label htmlFor='country'>Country</label>
            <input id='country' type='text' />
          </section>
          <section className='form-section'>
            <label htmlFor='email-address'>Email Address</label>
            <input id='email-address' type='email' />
          </section>
          <section className='form-section subject'>
            <label htmlFor='subject'>Subject</label>
            <input id='subject' type='text' />
          </section>
          <section className='form-section message'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' />
          </section>
        </form>
      </div>
    </main>
  );
};

export default ContactForm;
