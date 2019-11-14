import React, { useContext } from "react";
import { ListItem, ListItemLabel } from "baseui/list";
import { Context } from "../StateProvider";
import { Button } from "baseui/button";
import { styled } from "baseui";

const StyledList = styled("ul", {
  width: "100%",
  paddingRight: 0,
  paddingLeft: 0
});

const TagInfo = () => {
  const {
    tags,
    setTags,
    setIsEditing,
    setModalOpen,
    setEditedItemId
  } = useContext(Context);
  return (
    <StyledList>
      {tags.length ? (
        tags.map((tag: any) => (
          <ListItem
            key={tag.id}
            endEnhancer={() => (
              <>
                <Button
                  onClick={() => {
                    setIsEditing(true);
                    setEditedItemId(tag.id);
                    setModalOpen(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    const editedTags = tags.filter(
                      (currentTag: any) => currentTag.id !== tag.id
                    );
                    setTags(editedTags);
                  }}
                >
                  Delete
                </Button>
              </>
            )}
          >
            <ListItemLabel>{tag.name}</ListItemLabel>
          </ListItem>
        ))
      ) : (
        <ListItem>Much empty...</ListItem>
      )}
    </StyledList>
  );
};

export default TagInfo;
