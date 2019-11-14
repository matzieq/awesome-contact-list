import React, { useContext } from "react";
import { Button } from "baseui/button";
import { Context } from "../StateProvider";

import ContactInfo from "../ContactInfo";
import TagInfo from "../TagInfo";
import FormModal from "../FormModal";

import { withStyle, styled, useStyletron } from "baseui";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

const Container = styled("div", {
  margin: "0 40px"
});

const MainHeader = styled("header", {
  backgroundColor: "#333"
});

const AppTitle = styled("h1", {
  fontSize: "30px",
  color: "#fff",
  margin: 0,
  padding: "20px 40px"
});

const StyledNav = styled("nav", {
  padding: "0 40px"
});

const ButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between"
});

const StyledNavLink = styled(NavLink, {
  backgroundColor: "#fff",
  color: "#000",
  fontSize: "30px",
  padding: "20px 40px",
  textDecoration: "none",
  display: "inline-block"
});

const activeNavLinkStyles = {
  backgroundColor: "#ccc"
};

const MainView = () => {
  const [useCss] = useStyletron();
  const {
    // modalOpen,
    setModalOpen,
    setContacts,
    setTags,
    setIsEditing
    // setEditedItemId,
  } = useContext(Context);

  return (
    <Router>
      <MainHeader>
        <AppTitle>Awesome Contact List</AppTitle>
        <ButtonContainer>
          <StyledNav>
            <StyledNavLink
              activeClassName={useCss(activeNavLinkStyles)}
              to="/contacts"
            >
              Contacts
            </StyledNavLink>

            <StyledNavLink
              activeClassName={useCss(activeNavLinkStyles)}
              to="/tags"
            >
              Tags
            </StyledNavLink>
          </StyledNav>
          <Button
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
            }}
          >
            +
          </Button>
        </ButtonContainer>
      </MainHeader>
      <Container>
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
        <FormModal />
      </Container>
      <Button
        onClick={() => {
          setContacts([]);
          setTags([]);
        }}
      >
        Clear Storage(DEBUG)
      </Button>
    </Router>
  );
};

export default MainView;
