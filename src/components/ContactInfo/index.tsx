import React, { useContext } from "react";
import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell
  // StyledAction,
} from "baseui/table";
import { withStyle, useStyletron } from "baseui";

import { Caption1 } from "baseui/typography";
import { Block } from "baseui/block";
import { Button } from "baseui/button";

import { Context } from "../StateProvider";

const TableRow = withStyle(StyledRow, {
  margin: "10px 0"
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

  return (
    <StyledTable>
      <StyledHead $width="80vw">
        <StyledHeadCell>Full Name</StyledHeadCell>
        <StyledHeadCell>Email</StyledHeadCell>
        <StyledHeadCell>Phone Number</StyledHeadCell>
        <StyledHeadCell>Company name</StyledHeadCell>
        <StyledHeadCell>Department</StyledHeadCell>
        <StyledHeadCell>Date added</StyledHeadCell>
        <StyledHeadCell>Skills</StyledHeadCell>
        <StyledHeadCell>Actions</StyledHeadCell>
      </StyledHead>
      <StyledBody>
        {contacts.length ? (
          contacts.map((item: any, index: number) => (
            <TableRow key={index}>
              <StyledCell>{item.name}</StyledCell>
              <StyledCell>{item.email}</StyledCell>
              <StyledCell>{item.phone}</StyledCell>
              <StyledCell>{item.company}</StyledCell>
              <StyledCell>{item.department}</StyledCell>
              <StyledCell>{item.dateAdded}</StyledCell>
              <StyledCell>
                <Block>
                  {item.skills.map((skill: string, index: number) => {
                    const currentTag = tags.find(
                      (tag: any) => tag.id === skill
                    );
                    const tagName = currentTag ? currentTag.name : "Error";
                    return <Caption1 key={index}>{tagName}</Caption1>;
                  })}
                </Block>
              </StyledCell>
              <StyledCell>
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
              </StyledCell>
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
