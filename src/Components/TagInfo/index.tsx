import React from 'react';
import { ListItem, ListItemLabel } from 'baseui/list';
import tags from '../MockData/tags.json';

const TagInfo = () => {
  return (
    <ul>
      {tags.map(tag => (
        <ListItem key={tag.id}>
          <ListItemLabel>{tag.name}</ListItemLabel>
        </ListItem>
      ))}
    </ul>
  );
};

export default TagInfo;
