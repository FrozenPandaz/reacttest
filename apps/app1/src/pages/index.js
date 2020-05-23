import React from 'react';
import { Link } from 'gatsby';

import { MyButton } from '@gatsby-test/my-button';

const IndexPage = () => (
  <div>
    <MyButton></MyButton>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
