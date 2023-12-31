'use client';

export default function Error({ error }) {
  return <main className="error">
    <h1>Failed to create Meal</h1>
    <p>{error.message}</p>
  </main>
}