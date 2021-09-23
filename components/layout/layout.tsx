import { Fragment, ReactChild, ReactFragment, ReactPortal } from 'react';
import MainHeader from './main-header';

function Layout(props: {
  children: boolean | ReactChild | ReactFragment | ReactPortal;
}): JSX.Element {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
