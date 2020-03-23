import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: '1 0 auto',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'stretch',
    background: '#1f1f1f',
  },
  basePanel: {
    alignSelf: 'stretch',
    backgroundColor: '#404040',
  },
  leftPanel: {
    flex: '0 1 auto',
    order: 0,
    borderRight: '1px solid #1a1a1a',
  },
  centerPanel: {
    flex: '1 1 auto',
    order: 0,
    background: '#E6E6E6',
  },
  rightPanel: {
    flex: '0 1 auto',
    order: 0,
    width: '250px',
    borderLeft: '1px solid #1a1a1a',
  },
});

function Design(props) {
  const classes = useStyles(props);

  return (
    <div className={clsx(classes.container)}>
      <div className={clsx(classes.basePanel, classes.leftPanel)}>
        col-left1
      </div>
      <div className={clsx(classes.basePanel, classes.centerPanel)}>
        col-center
      </div>
      <div className={clsx(classes.basePanel, classes.rightPanel)}>
        col-right
      </div>
    </div>
  );
}

export default Design;
