import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Router from 'next/router';
import PerfectScrollbar from 'perfect-scrollbar';
import PropTypes from 'prop-types';
import React, { createRef, useCallback, useEffect, useRef } from 'react';

let isMobile;

const handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd',
};
Object.freeze(handlerNameByEvent);

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Scrollbars = React.forwardRef((props, ref) => {
  ref = ref || createRef();
  const ps = useRef(null);
  const handlerByEvent = useRef(new Map());
  const classes = useStyles();
  const { customScrollbars } = props;

  const hookUpEvents = useCallback(() => {
    Object.keys(handlerNameByEvent).forEach((key) => {
      const callback = props[handlerNameByEvent[key]];
      if (callback) {
        const handler = () => callback(ref.current);
        handlerByEvent.current.set(key, handler);
        ref.current.addEventListener(key, handler, false);
      }
    });
    // eslint-disable-next-line
    }, [ref]);

  const unHookUpEvents = useCallback(() => {
    handlerByEvent.current.forEach((value, key) => {
      if (ref.current) {
        ref.current.removeEventListener(key, value, false);
      }
    });
    handlerByEvent.current.clear();
  }, [ref]);

  const destroyPs = useCallback(() => {
    // console.info("destroy::ps");

    unHookUpEvents();

    if (!ps.current) {
      return;
    }
    ps.current.destroy();
    ps.current = null;
  }, [unHookUpEvents]);

  const createPs = useCallback(() => {
    // console.info("create::ps");

    if (isMobile || !ref || ps.current) {
      return;
    }

    ps.current = new PerfectScrollbar(ref.current, props.option);

    hookUpEvents();
  }, [hookUpEvents, props.option, ref]);

  useEffect(() => {
    const MobileDetect = require('mobile-detect');
    const md = new MobileDetect(window.navigator.userAgent);
    isMobile = md.mobile();
  }, []);

  useEffect(() => {
    function updatePs() {
      if (!ps.current) {
        return;
      }
      ps.current.update();
    }

    updatePs();
  });

  useEffect(() => {
    if (customScrollbars) {
      createPs();
    } else {
      destroyPs();
    }
  }, [createPs, customScrollbars, destroyPs]);

  const scrollToTop = useCallback(() => {
    if (ref && ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [ref]);

  useEffect(() => {
    if (props.scrollToTopOnChildChange) {
      scrollToTop();
    }
  }, [scrollToTop, props.children, props.scrollToTopOnChildChange]);

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      if (props.scrollToTopOnRouteChange) {
        scrollToTop();
      }
    });
    Router.events.on('routeChangeError', () => {
      if (props.scrollToTopOnRouteChange) {
        scrollToTop();
      }
    });
  }, [scrollToTop, props.scrollToTopOnRouteChange]);

  useEffect(
    () => () => {
      destroyPs();
    },
    [destroyPs]
  );

  // console.info('render::ps');
  return (
    <div
      id={props.id}
      className={clsx(classes.root, props.className)}
      style={
        props.customScrollbars && (props.enable || true) && !isMobile
          ? {
              position: 'relative',
              overflow: 'hidden',
            }
          : {}
      }
      ref={ref}
    >
      {props.children}
    </div>
  );
});

Scrollbars.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  onScrollY: PropTypes.func,
  onScrollX: PropTypes.func,
  onScrollUp: PropTypes.func,
  onScrollDown: PropTypes.func,
  onScrollLeft: PropTypes.func,
  onScrollRight: PropTypes.func,
  onYReachStart: PropTypes.func,
  onYReachEnd: PropTypes.func,
  onXReachStart: PropTypes.func,
  onXReachEnd: PropTypes.func,
  scrollToTopOnRouteChange: PropTypes.bool,
  scrollToTopOnChildChange: PropTypes.bool,
  customScrollbars: PropTypes.bool,
  enable: PropTypes.bool,
  className: PropTypes.string,
  option: PropTypes.shape({
    wheelPropagation: PropTypes.bool,
  }),
};

Scrollbars.defaultProps = {
  id: undefined,
  children: undefined,
  className: '',
  enable: true,
  customScrollbars: true,
  scrollToTopOnChildChange: true,
  scrollToTopOnRouteChange: true,
  option: {
    wheelPropagation: true,
  },
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined,
};

export default Scrollbars;
