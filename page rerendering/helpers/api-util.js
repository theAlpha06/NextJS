export async function getAllEvents() {
  const response = await fetch('https://nextjs-19472-default-rtdb.firebaseio.com/.json');
  const data = await response.json();
  return data;
}

getAllEvents();

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}