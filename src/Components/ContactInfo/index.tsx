import React from 'react';
import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell,
  StyledAction,
} from 'baseui/table';
import { withStyle, useStyletron } from 'baseui';
import data from '../MockData/data.json';
import {
  Label1,
  Label2,
  Caption1,
  Caption2,
  Paragraph1,
  Paragraph2,
} from 'baseui/typography';
import { Block } from 'baseui/block';

const TableRow = withStyle(StyledRow, {
  margin: '10px 0',
  // border: '1px solid dodgerblue',
});

const ContactInfo = () => {
  const [useCss] = useStyletron();
  return (
    <StyledTable>
      <StyledHead $width="1500px">
        <StyledHeadCell>Full Name</StyledHeadCell>
        <StyledHeadCell>Email</StyledHeadCell>
        <StyledHeadCell>Phone Number</StyledHeadCell>
        <StyledHeadCell>Company name</StyledHeadCell>
        <StyledHeadCell>Department</StyledHeadCell>
        <StyledHeadCell>Date added</StyledHeadCell>
        <StyledHeadCell>Skills</StyledHeadCell>
      </StyledHead>
      <StyledBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <StyledCell>{item.name}</StyledCell>
            <StyledCell>{item.email}</StyledCell>
            <StyledCell>{item.phone}</StyledCell>
            <StyledCell>{item.company}</StyledCell>
            <StyledCell>{item.department}</StyledCell>
            <StyledCell>{item.dateAdded}</StyledCell>
            <StyledCell>
              <Block>
                {item.skills.map(skill => (
                  <Caption1>{skill}</Caption1>
                ))}
              </Block>
            </StyledCell>
          </TableRow>
        ))}
      </StyledBody>
    </StyledTable>
  );
};
export default ContactInfo;
