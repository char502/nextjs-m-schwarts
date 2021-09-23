import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

import { IEventProps } from '../dummy-data';

function HomePage(): JSX.Element {
  const featuredEvents: IEventProps[] = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
