import React from "react";
import { Input } from "baseui/input";

const TextInput = (props: any) => {
  const {
    field,
    form: { touched, errors }
  } = props;

  return <Input {...props} {...field} />;
};

export default TextInput;
