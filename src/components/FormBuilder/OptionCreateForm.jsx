import React from "react";
import { useFieldArray } from "react-hook-form";
import Input from "../common/Input";
import Close from "../common/btns/Close";

export default function OptionCreateForm({ control, name }) {
  const { fields, append, remove } = useFieldArray({ control, name });
  return (
    <div>
      {fields.map((item, optionIndex) => (
        <div
          key={item.id}
          className=" relative border p-2 m-2 flex items-center gap-2"
        >
          <Input
            type="text"
            name={`${name}.${optionIndex}.label`}
            label="Option Label"
            placeholder="Option label..."
            required
          />
          <Input
            type="text"
            name={`${name}.${optionIndex}.value`}
            label="Option value"
            placeholder="Option value..."
            required
          />
          <Close
            type="button"
            className="absolute top-1 right-1 text-red-500 bg-transparent hover:bg-red-100 hover:text-red-600 rounded-lg text-sm p-0.5 ml-auto inline-flex items-center"
            onClick={() => remove(optionIndex)}
          />
        </div>
      ))}
      <div className="text-center">
        <button
          type="button"
          onClick={() => append({ label: "", value: "" })}
          className="border text-xs py-1 px-3 border-primary hover:bg-primary hover:text-white rounded-full"
        >
          Add option
        </button>
      </div>
    </div>
  );
}
