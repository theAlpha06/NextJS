import Image from 'next/image'
import classes from './page.module.css'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if(!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary
  }
}

export default function MealDetailsPage({ params }) {

  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\\n/g, '\n');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={`https://foodies-nextjs.s3.amazonaws.com${meal.image}`} fill alt='.' />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions,
        }}></p>
      </main>
    </>
  )
}