import { useState, useContext } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {

  const [email, setEmail] = useState();
  const { showNotification } = useContext(NotificationContext);

  async function registrationHandler(event) {
    event.preventDefault();

    showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter.',
      status: 'pending'
    });

    const res = await fetch('/api/newsletter/register', {
      method: 'POST',
      body: JSON.stringify({email}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const resData = await res.json();
    if(res.status === 201) {
      showNotification({
        title: 'Success!',
        message: 'Successfully registered for newsletter.',
        status: 'success'
      });
    } else {
      showNotification({
        title: 'Error!',
        message: resData.message || 'Something went wrong.',
        status: 'error'
      });
    }
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
