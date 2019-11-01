import React, { useState, createContext, useEffect } from "react";
import { localStorageName } from "../../Lib/constants";
export const Context = createContext<any>(null);

const { Provider } = Context;

const getData = () =>
  localStorage.getItem(localStorageName) == null
    ? { contactData: [], tagData: [] }
    : JSON.parse(localStorage.getItem(localStorageName) || "");

export const StateProvider = ({ children }: any) => {
  const [contacts, setContacts] = useState(getData().contactData);
  const [tags, setTags] = useState(getData().tagData);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      localStorageName,
      JSON.stringify({
        contactData: contacts,
        tagData: tags
      })
    );
  });

  return (
    <Provider
      value={{ contacts, setContacts, tags, setTags, modalOpen, setModalOpen }}
    >
      {children}
    </Provider>
  );
};
