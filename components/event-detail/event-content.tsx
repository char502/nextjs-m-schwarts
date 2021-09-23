import { ReactChild, ReactFragment, ReactPortal } from 'react';
import classes from './event-content.module.css';

function EventContent(props: {
  children: boolean | ReactChild | ReactFragment | ReactPortal;
}) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
