import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/events/event-list';
import EventsSearch from './events-search';

function AllEventsPage(props) {
  const router = useRouter()
  const { events } = props;
  
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

  const events = await getAllEvents();

  return {
    props: {
      events: events
    },
    revalidate: 60
  }
}

export default AllEventsPage;