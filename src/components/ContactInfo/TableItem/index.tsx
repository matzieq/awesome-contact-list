import React from "react";
import { StatefulTooltip } from "baseui/tooltip";
import { ParagraphWithOverflow, TableCell } from "../../styledComponents";

const TableItem = (props: any) => (
  <TableCell>
    <ParagraphWithOverflow>
      <StatefulTooltip content={() => props.text}>{props.text}</StatefulTooltip>
    </ParagraphWithOverflow>
  </TableCell>
);

export default TableItem;
