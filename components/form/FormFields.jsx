import { TextField } from "@shopify/polaris";
import { forwardRef } from "react";

export const InputTextField = forwardRef(
  ({ onChange, onBlur, name, label, type = "text", error, autoComplete = "off" }, ref) => (
    <TextField
      type={type}
      label={label}
      error={error}
      autoComplete={autoComplete}
      ref={ref}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
);
