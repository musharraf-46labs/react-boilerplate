/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector, connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';

// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer, { initialState } from './reducer';
import saga from './saga';
import Item from './item';
import { getUser } from '../App/actions';

const key = 'home';

export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);
  const state1 = useSelector(state => state.home || initialState);
  console.log('state1', state1);
  return (
    <div>
      <div>
        {/**
        <Section>
          
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="username">
             
              
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </Form>
          <ReposList {...reposListProps} />
        </Section>
         */}

        {state1 &&
          state1.api.map(i => (
            <div>
              <Item
                image={i.image}
                price={i.price}
                year={i.year}
                id={i.id}
                rating={i.rating}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(HomePage);
