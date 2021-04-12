import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../helpers/api-util'
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';


function FilteredEventsPage(props) {

  const router = useRouter()

  const { filteredEvents } = props;

  // prop 'hasError' created in getServerSideProps
  if (props.hasError) {
      return (
        <Fragment>
          <ErrorAlert>
          <p>Invalid Filter, please adjust your values!</p>
          </ErrorAlert>
          <div>
            <Button link='/events'>Show All Events</Button>
          </div>
        </Fragment>
      );
  }

  

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
          <div className="center">
            <Button link='/events'>Show All Events</Button>
          </div>
      </Fragment>
    )
  }
  
  // Month is 0 indexed here so need to -1 to get correct month
  // The date constructor function expects the month to begin at 0 not at 1
  // const date = new Date(numYear, numMonth -1);  

  console.log(props.date.year[1])

  const date = new Date(props.date.year[0], props.date.month[1] -1);

  return (
    <Fragment>
      <h1>Filtered Events Page</h1>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

// each option is potentially likely here so better to gerate on the fly with getServerSideProps than try to set up pre-rendered guesses with getStaticProps and getStaticPaths
export async function getServerSideProps(context) {

  const { params } = context;

  const filterData = params.slug;
  console.log(filterData)

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) || 
    isNaN(numMonth) || 
    numYear > 2030 || 
    numYear < 2021 || 
    numMonth < 1 || 
    numMonth > 12
    ) {
      // have to return an object in getServerSideProps
      return {
        //set a hasError prop to true if the validation fails
        props: {
          hasError: true
        }
        // notFound: true - send to a 404 not found page
        //  redirect: {
        //   destination: /error
        // }
        // could also redirect to an error page here if had one
      };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    },
  };
}

export default FilteredEventsPage;