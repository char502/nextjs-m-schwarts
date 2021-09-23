import { RefObject, useRef } from 'react';

import Button from './ui/button';
import classes from './events-search.module.css';

function EventsSearch(props: any): JSX.Element {
  const yearInputRef: RefObject<HTMLSelectElement> = useRef();
  const monthInputRef: RefObject<HTMLSelectElement> = useRef();

  function submitHandler(e) {
    e.preventDefault();

    // Use current to get ACTUAL value the ref is connected to
    // in this case teh select element
    // this then allow us to access the value property
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    // don't have to call it onSearch, can call it whatever you like
    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearInputRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInputRef}>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
