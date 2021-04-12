// import { getFeaturedEvents } from '../dummy-data'
import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'

function HomePage(props) {

  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  )
}

export async function getStaticProps() {
  
  const featuredEvents = await getFeaturedEvents() 
  
  return {
    props: {
      featuredEvents: featuredEvents
    },
    revalidate: 10
  }
}

export default HomePage;