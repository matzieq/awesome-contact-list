import React from "react";
import { StatefulTooltip } from "baseui/tooltip";
import { ParagraphWithOverflow, TableCell } from "../../styledComponents";

type TableItemProps = {
  text: string;
};

const TableItem = ({ text }: TableItemProps) => (
  <TableCell>
    <ParagraphWithOverflow>
      <StatefulTooltip content={() => text}>{text}</StatefulTooltip>
    </ParagraphWithOverflow>
  </TableCell>
);

export default TableItem;
