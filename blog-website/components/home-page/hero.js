import Image from 'next/image';
import classes from './hero.module.css'

function Hero() {
    return <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/shubh.png' alt='An image showing Shubham' width={500} height={500} />
      </div>
      <h1>Hi, I'm Shubham</h1>
      <p>
        I blog about web devvelopment - especially frontend framework like Angular or React.
      </p>
    </section>
}

export default Hero;