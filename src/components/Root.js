import React from 'react';

import Index from 'components/Index';
import AboutMe from 'components/AboutMe';
import ConsultingAndTraining from 'components/ConsultingAndTraining';
import OpenSource from 'components/OpenSource';
import HireMe from 'containers/HireMeContainer';

export default () => (
  <div>
    <Index />
    <AboutMe />
    <ConsultingAndTraining />
    <OpenSource />
    <HireMe />
    <footer>
      <div className="content">
        <p>Copyright &copy; 2017 Tomas Weiss</p>
      </div>
    </footer>
  </div>
);
