import { ReactChild, ReactFragment, ReactPortal } from 'react';
import classes from './error-alert.module.css';

function ErrorAlert(props: {
  children: boolean | ReactChild | ReactFragment | ReactPortal;
}) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
