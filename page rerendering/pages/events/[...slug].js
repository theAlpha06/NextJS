import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import Head from 'next/head';

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

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name='description' content='A list of filtered events.' />
    </Head>
  )


  if (!events) {
    return <Fragment>
      {pageHeadData}
      <p className='center'>Loading...</p>
    </Fragment>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name='description' content={`All events for ${numMonth}/${numYear}`} />
    </Head>
  )


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
        {pageHeadData}
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
        {pageHeadData}
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
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
