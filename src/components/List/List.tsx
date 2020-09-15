import * as React from 'react';
/* tslint:disable-next-line */

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { ContentList } from './styles';

interface ListProps {
  st: () => void;
}

const List = ({ st }: ListProps) => {
  return (
    <ContentList>
      <CSSTransitionGroup
        component={React.Fragment}
        transitionName="appear" 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {st}
      </CSSTransitionGroup>
    </ContentList>
  );
};

export default List;
