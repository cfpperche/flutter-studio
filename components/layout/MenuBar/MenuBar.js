import { makeStyles } from '@material-ui/core';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import clsx from 'clsx';
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const useStyles = makeStyles((theme) => ({
  menuBar: {
    width: '100%',
    backgroundColor: '#555',
    display: 'flex',
    flex: '0 0 auto',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftItems: {
    display: 'flex',
    flexFlow: 'row nowrap',
    flex: '1',
  },
  centerItems: {
    display: 'flex',
    flexFlow: 'row nowrap',
    flex: '2',
  },
  rightItems: {
    display: 'flex',
    flexFlow: 'row nowrap',
    flex: '1',
    '& $menuItem': {
      borderLeft: '1px solid #333333',
    },
  },
  menuItem: {
    cursor: 'pointer',
    display: 'flex',
    flex: '1 0 auto',
    alignSelf: 'stretch',
    padding: '10px 16px',
    transition: 'all 0.3s ease',
    color: '#ccc',
    '&:hover': {
      color: 'white',
      backgroundColor: '#404040',
    },
  },
}));

function MenuBar() {
  const classes = useStyles();

  return (
    <div className={clsx(classes.menuBar)}>
      <div className={clsx(classes.leftItems)}>left</div>
      <div className={clsx(classes.centerItems)}>
        <Select onChange={() => {}} options={options} />
      </div>
      <div className={clsx(classes.rightItems)}>
        <a
          className={clsx(
            classes.menuItem,
            'flex flex-row justify-center items-center'
          )}
        >
          <PhoneIphone />
          <span className="ml-1">Model</span>
        </a>
        <a
          className={clsx(
            classes.menuItem,
            'flex flex-row justify-center items-center'
          )}
        >
          <DeveloperModeIcon />
          <span className="ml-1">Source Code</span>
        </a>
        <a
          className={clsx(
            classes.menuItem,
            'flex flex-row justify-center items-center'
          )}
        >
          <PlaylistAddCheck />
          <span className="ml-1">PubSpec</span>
        </a>
      </div>
    </div>
  );
}

export default MenuBar;
