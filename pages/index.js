// import { getFeaturedEvents } from '../dummy-data'
import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'

function HomePage(props) {

  // const FeaturedEvents = getFeaturedEvents();

  // const { featuredEvents } = props.featuredEvents

  console.log(props.featuredEvents)


  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  )
}

export async function getStaticProps() {
  
  const featuredEvents = await getFeaturedEvents() 

  console.log(featuredEvents)
  
  return {
    props: {
      featuredEvents: featuredEvents
    },
    revalidate: 10
  }
}

export default HomePage;