import React, { useState, useContext } from 'react';
import { StatefulButtonGroup, MODE } from 'baseui/button-group';
import { Button } from 'baseui/button';
import { Context } from '../StateProvider';

import ContactInfo from '../ContactInfo';
import TagInfo from '../TagInfo';
import FormModal from '../FormModal';

import { withStyle, styled, useStyletron } from 'baseui';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation,
} from 'react-router-dom';

const Container = styled('div', {
  margin: '0 40px',
});

const MainHeader = styled('header', {
  backgroundColor: '#333',
});

const AppTitle = styled('h1', {
  fontSize: '30px',
  color: '#fff',
  margin: 0,
  padding: '50px 100px',
});

const StyledNav = styled('nav', {
  width: '500px',
  margin: '0 auto',
});

const StyledNavLink = styled(NavLink, {
  backgroundColor: '#fff',
  color: '#000',
  fontSize: '30px',
  padding: '20px 40px',
  textDecoration: 'none',
});

const MainView = () => {
  const [tab, setTab] = useState(0);
  const [useCss] = useStyletron();
  const {
    // modalOpen,
    setModalOpen,
    setContacts,
    setTags,
    setIsEditing,
    // setEditedItemId,
  } = useContext(Context);

  return (
    <Router>
      <MainHeader>
        <AppTitle>Awesome Contact List</AppTitle>
        <StyledNav>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>

          <StyledNavLink to="/tags">Tags</StyledNavLink>
        </StyledNav>
      </MainHeader>
      <Container>
        <Button
          onClick={() => {
            setModalOpen(true);
            setIsEditing(false);
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => {
            setContacts([]);
            setTags([]);
          }}
        >
          Clear Storage(DEBUG)
        </Button>
        <Switch>
          <Route path="/contacts">
            <ContactInfo />
          </Route>
          <Route path="/tags">
            <TagInfo />
          </Route>
          <Route exact path="/">
            <Redirect to="/contacts" />
          </Route>
        </Switch>
        <FormModal formType={tab} />
      </Container>
    </Router>
  );
};

export default MainView;
