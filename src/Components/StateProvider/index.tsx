import React, { useState, createContext } from 'react';
import data from '../MockData/data.json';
import tagData from '../MockData/tags.json';

export const Context = createContext<any>(null);

const { Provider } = Context;

export const StateProvider = ({ children }: any) => {
  const [contacts, setContacts] = useState(data);
  const [tags, setTags] = useState(tagData);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Provider
      value={{ contacts, setContacts, tags, setTags, modalOpen, setModalOpen }}
    >
      {children}
    </Provider>
  );
};
