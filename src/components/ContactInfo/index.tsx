import React, { useContext } from "react";
import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell,
  Table
  // StyledAction,
} from "baseui/table";
import { withStyle, useStyletron } from "baseui";

import { Caption1, Paragraph1 } from "baseui/typography";
import { Block } from "baseui/block";
import { Button } from "baseui/button";

import { Context } from "../StateProvider";

import TableItem from "./TableItem";

const NUMBER_OF_COLUMNS_IN_TABLE = 8;

const TableRow = withStyle(StyledRow, {
  margin: "10px 0",
  width: "100%"
});

const TableCell = withStyle(StyledCell, {
  width: `${100 / NUMBER_OF_COLUMNS_IN_TABLE}%`,
  overflow: "hidden"
});

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
        {columns.map(column => (
          <StyledHeadCell>{column}</StyledHeadCell>
        ))}
      </StyledHead>
      <StyledBody>
        {contacts.length ? (
          contacts.map((item: any, index: number) => (
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
                      (tag: any) => tag.id === skill
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
                      (contact: any) => contact.id !== item.id
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
