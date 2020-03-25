import {
  FaBars,
  FaEnvelope,
  FaFolderOpen,
  FaGlobe,
  FaTrash,
} from 'react-icons/fa';

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  iconBar: {
    width: '100%',
    backgroundColor: '#555',
    '& a': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      padding: '16px',
      transition: 'all 0.3s ease',
      color: '#ccc',
      fontSize: '24px',
      '&:hover': {
        color: 'white',
        backgroundColor: '#404040',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 'auto',
        bottom: '-1px',
        left: '10px',
        height: '1px',
        width: '36px',
        background: '#333333',
      },
    },
  },
  active: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function LeftSidebar(props) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.iconBar)}>
      <a>
        <FaBars />
      </a>
      <a>
        <FaFolderOpen />
      </a>
      <a>
        <FaEnvelope />
      </a>
      <a>
        <FaGlobe />
      </a>
      <a>
        <FaTrash />
      </a>
    </div>
  );
}

export default LeftSidebar;
