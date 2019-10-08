import React, { useState } from 'react';
import { ButtonGroup } from 'baseui/button-group';
import { Button } from 'baseui/button';
import ContactInfo from '../ContactInfo';
import TagInfo from '../TagInfo';

const MainView = () => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <ButtonGroup onClick={(e, i) => setTab(i)}>
        <Button>Contacts</Button>
        <Button>Tags</Button>
      </ButtonGroup>
      <div>{tab === 0 ? <ContactInfo /> : <TagInfo />}</div>
    </>
  );
};

export default MainView;
