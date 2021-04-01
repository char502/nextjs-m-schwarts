import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';


function FilteredEventsPage() {

  const router = useRouter()

  const filterData = router.query.slug

  // making sure that don't get an error just because don't have access to the url data yet
  if (!filterData) {
    return (
      <p className='center'>Loading...</p>
    )
  }

  // only want the first two bits of returned data in this example so target them specifically
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1]

  // The above will always be a string as it's encoded within the url, to transform it to a number (if it is a stringified number) put a + in front of it
  const numYear = +filteredYear
  const numMonth = +filteredMonth

  // check if not a number and year/month in certain ranges
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
          <p>Invalid Filter, please adjust your values!</p>
          </ErrorAlert>
          <div style={{ textAlign: 'center'}}>
            <Button link='/events'>Show All Events</Button>
          </div>
        </Fragment>
      );
  }

  // console.log(numYear)
  // console.log(numMonth)

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
          <div style={{ textAlign: 'center'}}>
            <Button link='/events'>Show All Events</Button>
          </div>
      </Fragment>
    )
  }
  
  // Month is 0 indexed here so need to -1 to get correct month
  // The date constructor function expects the month to begin at 0 not at 1
  const date = new Date(numYear, numMonth -1);


  return (
    <Fragment>
      <h1>Filtered Events Page</h1>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage;