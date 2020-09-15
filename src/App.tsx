import * as React from 'react';
import LayoutContainer from './container/LayoutContainer';

import { GlobalStyle } from './utils/constant/styles';

const App = ({ children }: any) => (
  <React.Fragment>
    <GlobalStyle />
      {children}
      <LayoutContainer />
  </React.Fragment>
);

export default App;
