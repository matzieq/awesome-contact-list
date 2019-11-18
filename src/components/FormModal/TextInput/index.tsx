import React from "react";
import { Input } from "baseui/input";

const TextInput = (props: any) => {
  const { field } = props;

  return <Input {...props} {...field} />;
};

export default TextInput;
