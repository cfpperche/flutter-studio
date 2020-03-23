import { Link } from '@material-ui/core';
import Router from 'next/router';
import React from 'react';

const Index = () => {
  return (
    <div>
      <h1> Hello World! </h1>
      <Link href="/design" onClick={() => Router.push('/design')}>
        Design
      </Link>
    </div>
  );
};

export default Index;
