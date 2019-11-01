import React, { useContext } from "react";
import { ListItem, ListItemLabel } from "baseui/list";
import { Context } from "../StateProvider";
import { Button } from "baseui/button";

const TagInfo = () => {
  const { tags, setTags } = useContext(Context);
  return (
    <ul>
      {tags.length ? (
        tags.map((tag: any) => (
          <ListItem key={tag.id}>
            <ListItemLabel>{tag.name}</ListItemLabel>
            <Button>Edit</Button>
            <Button
              onClick={() => {
                const editedTags = tags.filter(
                  (currentTag: any) => currentTag.id !== tag.id
                );
                console.log(editedTags);
                setTags(editedTags);
              }}
            >
              Delete
            </Button>
          </ListItem>
        ))
      ) : (
        <ListItem>Much empty...</ListItem>
      )}
    </ul>
  );
};

export default TagInfo;
