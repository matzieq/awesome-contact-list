import React, { useState, useContext } from 'react';
import { StatefulButtonGroup, MODE } from 'baseui/button-group';
import { Button } from 'baseui/button';
import { Context } from '../StateProvider';


import ContactInfo from '../ContactInfo';
import TagInfo from '../TagInfo';
import FormModal from '../FormModal';

const MainView = () => {
  const [tab, setTab] = useState(0);
  const {modalOpen, setModalOpen} = useContext(Context);

  return (
    <>
      <StatefulButtonGroup mode={MODE.radio} onClick={(e, i) => setTab(i)}>
        <Button>Contacts</Button>
        <Button>Tags</Button>
      </StatefulButtonGroup>
      <Button onClick={() => setModalOpen(!modalOpen)}>Add</Button>
      <div>{tab === 0 ? <ContactInfo /> : <TagInfo />}</div>
      <FormModal formType={tab} />
    </>
  );
};

export default MainView;
