import * as React from 'react';
/* tslint:disable-next-line */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchStationsElements, fetchInformationElements } from '../actions';
import { Main, MainWrapper, BodyWrapper, Paragraph } from '../utils/constant/styles';
import { WrapperStatusInfoBar } from '../components/StatusInfoBar/styles';

import List from '../components/List';
import Search from '../components/Search';
import Item from '../components/Item';
import Header from '../components/Header';
import Loader from '../components/Loader';
import StatusInfoBar from '../components/StatusInfoBar';
import Button from '../components/Button';

// helpers
import { mergeArrayObjects } from '../helpers/mergeArrayObjects';
import { sum } from '../helpers/sum';

interface LayoutContainerProps {
  dispatch: any;
  stations?: StationsProps;
  infromation?: InformationProps;
}

interface StationsProps {
  stations?: ItemsProps;
}

interface ItemsProps {
  data?: DataProps;
}

interface DataProps {
  stations?: {
      station_id?: string;
      name?: string;
      address?: string;
      lat?: number;
      lon?: number;
      capacity?: number;
    }[];
    length?: number;
}

interface InformationProps {
  infromation?: ItemsInformationProps;
}

interface ItemsInformationProps {
  data?: DataInformationProps;
}

interface DataInformationProps {
  stations?: {
    is_installed?: number;
    is_renting?: number;
    is_returning?: number;
    last_reported?: number;
    num_bikes_available?: number;
    num_docks_available?: number;
    station_id?: string;
    }[];
    length?: number;
}

const LayoutContainer = ({ dispatch, stations, infromation }: LayoutContainerProps) => {
  const loadItemStep = 20;
  const firstLoadItemAmount = 40;

  const [loadItems, setLoadItems] = useState(firstLoadItemAmount);
  const [searchText, setSearchText] = useState('');

  const st: any = [];
  let al: any = [];
  let freeSpots: number = 0;
  let bikesAvailable: number = 0;
  let stationsLine: any[] = [];
  let infromationLine: any[] = [];

  const statn = stations.stations;
  const info = infromation.infromation;

  useEffect(() => {
    dispatch(fetchStationsElements());
    dispatch(fetchInformationElements());
  }, []);

  if (info && info.data) {
    stationsLine = info.data.stations;
  }

  if (statn && statn.data) {
    infromationLine = statn.data.stations;
  }

  if (stationsLine.length > 0 && infromationLine.length > 0) {
    al = mergeArrayObjects(stationsLine, infromationLine);
    freeSpots = sum(al, 'num_docks_available');
    bikesAvailable = sum(al, 'num_bikes_available');

    al = al
      .filter((item: any) => searchText.length > 0 ? item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) : item);

    al
      .slice(0, loadItems)
      .map((item: any) => item && st.push(<Item key={item.station_id} item={item} />));
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  return <BodyWrapper>
    <MainWrapper>
      <Header />
      <Main>
          <Search onSearch={onChange}/>
          <WrapperStatusInfoBar>
            <StatusInfoBar status={freeSpots} text="Free spots" />
            <StatusInfoBar status={bikesAvailable} text="Available bikes" />
          </WrapperStatusInfoBar>
          <hr />
          {al.length > 0 ?
            <>
              <List st={st} />
              <Button
                onSetLoadItems={() => setLoadItems(loadItems + 10)}
                text={loadItems >= al.length ? `All ${al.length} stations showed` : `Show more ${loadItemStep} stations`}
                disabled={loadItems >= al.length}
              />
            </>
            // No loader cause al.length === 0
            : al.length === 0 && searchText.length > 0 ?
            <Paragraph withPadding>Nothing found</Paragraph> : <Loader />
          }
      </Main>
      </MainWrapper>
  </BodyWrapper>;
};

const mapState = function mapStateToProps(state: { stations: StationsProps, infromation: InformationProps }) {
  const { stations, infromation } = state;

  return { stations, infromation };
};

export default connect(mapState)(LayoutContainer);
