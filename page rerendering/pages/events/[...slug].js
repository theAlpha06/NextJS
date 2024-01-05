import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage() {

  const router = useRouter();
  const [events, setEvents] = useState()

  const filterData = router.query.slug;
  
  useEffect(() => {
    const fetchEvents = async () => {
      const data = await fetch('https://nextjs-19472-default-rtdb.firebaseio.com/.json');
      const events = await data.json();
      setEvents(events);
    }
    fetchEvents();
  }, []);


  if (!events) {
    return <p className='center'>Loading...</p>
  }

  console.log(filterData)

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear =+filteredYear;
  const numMonth =+filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });



  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
