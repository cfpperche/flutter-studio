import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 !important',
    width: '100% !important',
  },
}));

function SyntaxHighlight(props) {
  const codeNode = useRef(null);
  const source = useRef(trimCode());

  const { async, onHighlight } = props;

  const classes = useStyles();

  useEffect(() => {
    require('prismjs/prism');
    require('prismjs/components/prism-dart');
    require('prismjs/plugins/line-numbers/prism-line-numbers');
    window.Prism.highlightAll(async, onHighlight);
  }, [async]);

  function trimCode() {
    let sourceString = props.children;

    if (typeof sourceString === 'object' && sourceString.default) {
      sourceString = sourceString.default;
    }

    // Split the source into lines
    const sourceLines = sourceString.split('\n');

    // Remove the first and the last line of the source
    // code if they are blank lines. This way, the html
    // can be formatted properly while using fuse-highlight
    // component
    if (!sourceLines[0].trim()) {
      sourceLines.shift();
    }

    if (!sourceLines[sourceLines.length - 1].trim()) {
      sourceLines.pop();
    }

    // Find the first non-whitespace char index in
    // the first line of the source code
    const indexOfFirstChar = sourceLines[0].search(/\S|$/);

    // Generate the trimmed source
    let sourceRaw = '';

    // Iterate through all the lines
    sourceLines.forEach((line, index) => {
      // Trim the beginning white space depending on the index
      // and concat the source code
      sourceRaw += line.substr(indexOfFirstChar, line.length);

      // If it's not the last line...
      if (index !== sourceLines.length - 1) {
        // Add a line break at the end
        sourceRaw = `${sourceRaw}\n`;
      }
    });
    return sourceRaw;
  }

  return (
    <pre
      ref={codeNode}
      className={clsx(classes.root, 'language-dart line-numbers')}
    >
      <code>{source.current}</code>
    </pre>
  );
}

SyntaxHighlight.propTypes = {
  children: PropTypes.node,
  async: PropTypes.bool,
  onHighlight: PropTypes.func,
};
SyntaxHighlight.defaultProps = {
  children: undefined,
  async: false,
  onHighlight: undefined,
};

export default React.memo(SyntaxHighlight);
