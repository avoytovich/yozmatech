import React from 'react';

import Header from './../Header';
import InternalLayout from './../InternalLayout';

import './layout.css';
import { menuCategories } from '../../helper/constants';

const layout = props => (
  <>
    <Header />
    <InternalLayout/>
  </>
);

export default layout;
