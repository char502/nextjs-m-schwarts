import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from './events-search';

function AllEventsPage() {
  const events = getAllEvents()

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

export default AllEventsPage;