import { useState } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {

  const [email, setEmail] = useState()

  async function registrationHandler(event) {
    event.preventDefault();

    const res = await fetch('/api/newsletter/register', {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const resData  = await res.json();
    console.log(resData);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit'>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
