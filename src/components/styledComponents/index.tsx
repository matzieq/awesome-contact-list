import { StyledRow, StyledCell } from "baseui/table";
import { Paragraph1 } from "baseui/typography";
import { withStyle, styled } from "baseui";

const NUMBER_OF_COLUMNS_IN_TABLE = 8;

export const TableRow = withStyle(StyledRow, {
  margin: "10px 0",
  width: "100%"
});

export const TableCell = withStyle(StyledCell, {
  width: `${100 / NUMBER_OF_COLUMNS_IN_TABLE}%`,
  overflow: "hidden"
});

export const ParagraphWithOverflow = styled(Paragraph1, {
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});
