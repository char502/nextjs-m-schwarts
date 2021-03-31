
import { getAllEvents } from '../../dummy-data'

function AllEventsPage() {

  const allEvents = getAllEvents()

  console.log(allEvents)

  return (
    <div>
      <h1>All Events</h1>
    </div>
  )
}

export default AllEventsPage;