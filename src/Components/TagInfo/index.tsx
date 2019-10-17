import React, { useContext } from 'react';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Context } from '../StateProvider';
import { Button } from 'baseui/button';

const TagInfo = () => {
  const { tags } = useContext(Context);
  return (
    <ul>
      {tags.map((tag: any) => (
        <ListItem key={tag.id}>
          <ListItemLabel>{tag.name}</ListItemLabel>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </ListItem>
      ))}
    </ul>
  );
};

export default TagInfo;
