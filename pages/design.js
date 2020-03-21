import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles({
  root: {
    flex: '1',
    background: '#1f1f1f',
  },
  leftPanel: {
    background: 'red',
  },
  centerPanel: {
    background: 'green',
  },
  rightPanel: {
    background: 'yellow',
  },
});

function Design(props) {
  const classes = useStyles(props);

  return (
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.leftPanel)}>col-left</div>
      <div className={clsx(classes.centerPanel)}>col-center</div>
      <div className={clsx(classes.rightPanel)}>col-right</div>
    </div>
  );
}

export default Design;
