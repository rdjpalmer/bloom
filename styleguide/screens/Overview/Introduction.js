import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../../components/Markdown/Markdown';
import introduction from './introduction.md';

import { markdown } from '../../typography.css';

const Introduction = () => (
  <div>
    <Helmet>
      <title>Introduction</title>
    </Helmet>
    <Markdown className={ markdown } overrideClassname>
      { introduction }
    </Markdown>
  </div>
);

export default Introduction;
