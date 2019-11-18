import React, { useContext } from "react";
import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledCell
} from "baseui/table";

import { Caption1 } from "baseui/typography";
import { Block } from "baseui/block";
import { Button } from "baseui/button";

import { Context } from "../StateProvider";

import TableItem from "./TableItem";
import { TableRow, TableCell } from "../styledComponents";
import Contact from "../../interfaces/Contact.interface";
import Tag from "../../interfaces/Tag.interface";

const ContactInfo = () => {
  // const [useCss] = useStyletron();

  const {
    contacts,
    setContacts,
    tags,
    // modalOpen,
    setModalOpen,
    setIsEditing,
    setEditedItemId
  } = useContext(Context);

  const columns = [
    "Full Name",
    "Email",
    "Phone Number",
    "Company Name",
    "Department",
    "Date added",
    "Skills",
    "Actions"
  ];

  return (
    <StyledTable>
      <StyledHead $width="100%">
        {columns.map((column, index) => (
          <StyledHeadCell key={index}>{column}</StyledHeadCell>
        ))}
      </StyledHead>
      <StyledBody>
        {contacts.length ? (
          contacts.map((item: Contact, index: number) => (
            <TableRow key={index}>
              <TableItem text={item.name} />
              <TableItem text={item.email} />
              <TableItem text={item.phone} />
              <TableItem text={item.company} />
              <TableItem text={item.department} />
              <TableItem text={item.dateAdded} />
              <TableCell>
                <Block>
                  {item.skills.map((skill: string, index: number) => {
                    const currentTag = tags.find(
                      (tag: Tag) => tag.id === skill
                    );
                    const tagName = currentTag ? currentTag.name : "Error";
                    return <Caption1 key={index}>{tagName}</Caption1>;
                  })}
                </Block>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setIsEditing(true);
                    setEditedItemId(item.id);
                    setModalOpen(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    const editedContacts = contacts.filter(
                      (contact: Contact) => contact.id !== item.id
                    );
                    setContacts(editedContacts);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <StyledCell>Nothing to see here, move along</StyledCell>
          </TableRow>
        )}
      </StyledBody>
    </StyledTable>
  );
};
export default ContactInfo;
