import { Backdrop, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { MdDesktopWindows } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignitems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '320px',
    padding: '20px',
  },
}));

function ViewportWarning(props) {
  const classes = useStyles();
  const [size, setSize] = useState([0, 0]);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (size[0] < 1024) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [size]);

  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };

  return (
    <Backdrop className={classes.backdrop} open={showWarning}>
      <div className={classes.container}>
        <Typography variant="h2" className={clsx('flex justify-center')}>
          <MdDesktopWindows />
        </Typography>
        <Typography variant="h6" className={clsx('text-center')}>
          Your browser is too small
        </Typography>
        <Typography variant="h6" className={clsx('text-center')}>
          Resize your browser to be at least 900px wide to get back into design
          mode.
        </Typography>
      </div>
    </Backdrop>
  );
}

export default ViewportWarning;
