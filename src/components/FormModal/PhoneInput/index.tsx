import React, { useState } from "react";
import { PhoneInput as Input, COUNTRIES } from "baseui/phone-input";

const PhoneInput = (props: any) => {
  const [country, setCountry] = useState(COUNTRIES.PL);
  const [text, setText] = useState("");
  const {
    field,
    field: { onChange },
    form: { touched, errors }
  } = props;

  return (
    <Input
      // {...props}
      // {...field}
      country={country}
      onCountryChange={(e: any) => setCountry(e.option)}
      text={text}
      onTextChange={(e: any) => setText(e.currentTarget.value)}
    />
  );
};

export default PhoneInput;
