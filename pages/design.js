import { makeStyles, hexToRgb } from '@material-ui/core';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { LeftSidebar } from '~/components/layout/LeftSidebar';
import MenuBar from '~/components/layout/MenuBar/MenuBar';
import { ViewportWarning } from '~/components/ui/ViewportWarning';
import { Scrollbars } from '~/components/ui/Scrollbars';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: '1 0 auto',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'stretch',
    background: '#1f1f1f',
    maxHeight: '100vh',
  },
  basePanel: {
    alignSelf: 'stretch',
    backgroundColor: '#555',
  },
  leftPanel: {
    flex: '0 1 auto',
    order: 0,
    borderRight: '1px solid #1a1a1a',
  },
  centerPanel: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center',
    flex: '1 0 auto',
    order: 0,
    maxHeight: '100vh',
    '& $topBar': {
      order: 0,
      flex: '0 0 auto',
      alignSelf: 'stretch',
    },
    '& $modelPanel': {
      order: 1,
      height: '100vh',
      maxHeight: '100vh',
    },
    '& $bottomBar': {
      order: 2,
      flex: '0 0 auto',
      alignSelf: 'stretch',
    },
  },
  topBar: {
    minHeight: 40,
    borderBottom: '1px solid #1a1a1a',
  },
  modelPanel: {
    backgroundColor: '#E6E6E6',
    overflow: 'hidden',
    position: 'relative',
  },
  bottomBar: {
    minHeight: 32,
    borderTop: '1px solid #1a1a1a',
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
  const modelPanelNode = useRef(null);
  return (
    <div className={clsx(classes.container)}>
      <div className={clsx(classes.basePanel, classes.leftPanel)}>
        <LeftSidebar />
      </div>
      <div className={clsx(classes.basePanel, classes.centerPanel)}>
        <div className={clsx(classes.basePanel, classes.topBar)} />
        <div
          className={clsx(classes.basePanel, classes.modelPanel)}
          ref={modelPanelNode}
        >
          <Scrollbars className="overflow-auto" ref={modelPanelNode}>
            asdasd
          </Scrollbars>
        </div>
        <div className={clsx(classes.basePanel, classes.bottomBar)} />
      </div>
      <div className={clsx(classes.basePanel, classes.rightPanel)} />
      <ViewportWarning />
    </div>
  );
}

export default Design;
