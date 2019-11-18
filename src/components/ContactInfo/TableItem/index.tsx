import React from "react";

import { styled, withStyle } from "baseui";

import { StyledCell } from "baseui/table";

import { Paragraph1 } from "baseui/typography";
import { StatefulTooltip } from "baseui/tooltip";

const NUMBER_OF_COLUMNS_IN_TABLE = 8;

const ParagraphWithOverflow = styled(Paragraph1, {
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});

const TableCell = withStyle(StyledCell, {
  width: `${100 / NUMBER_OF_COLUMNS_IN_TABLE}%`,
  overflow: "hidden"
});

const TableItem = (props: any) => (
  <TableCell>
    <ParagraphWithOverflow>
      <StatefulTooltip content={() => props.text}>{props.text}</StatefulTooltip>
    </ParagraphWithOverflow>
  </TableCell>
);

export default TableItem;
