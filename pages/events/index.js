import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from './events-search';

function AllEventsPage(props) {
  // const events = getAllEvents()

  const { events } = props

  console.log(events)

  const router = useRouter()
  // All react hooks need to be called directly in your component function 
  // NOT in any nested block statements

  function findEventsHandler(year, month) {

    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath)
  }

  return (
    <Fragment>
      <h1>All Events</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    'https://events-nextjs-data-fetching-default-rtdb.firebaseio.com/events.json'
  )
  const data = await response.json();

  const transformedEvents = [];

  for (const key in data) {
    transformedEvents.push({
      id: key,
      ...data[key]
    })
  }

  console.log(transformedEvents)
  
  return {
    props: {
      events: transformedEvents
    }
  }
}

export default AllEventsPage;