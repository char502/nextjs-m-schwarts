import React, { ReactChild, SVGProps } from 'react';
import classes from './logistics-item.module.css';

interface logisticsProps {
  children?: ReactChild;
  icon?: any;
}

const LogisticsItem: React.FC<logisticsProps> = (props: {
  children?: ReactChild;
  icon?: any;
}) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
