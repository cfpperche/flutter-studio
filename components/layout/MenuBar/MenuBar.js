import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuBar: {
    width: '100%',
    backgroundColor: '#555',
  },
}));

function MenuBar() {
  const classes = useStyles();

  return <div className={clsx(classes.menuBar)}>items</div>;
}

export default MenuBar;
