import React from "react";
import DatePicker from "./DatePicker";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
import NormalInput from "./NormalInput";
import Select from "./Select";
import TextAreaInput from "./TextAreaInput";

export default function index(props) {
  if (props.type === "checkbox") return <CheckBox {...props} />;
  if (props.type === "date") return <DatePicker {...props} />;
  if (props.type === "radio") return <Radio {...props} />;
  if (props.type === "select") return <Select {...props} />;
  if (props.type === "textArea") return <TextAreaInput {...props} />;
  return <NormalInput {...props} />;
}
