import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function ViewportWarning(props) {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open>
        asdasd
      </Backdrop>
    </div>
  );
}

export default ViewportWarning;
