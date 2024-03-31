import React from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";

function CheckBox({ name, label, value, required = false }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          defaultValue={value}
          {...register(name, {
            required: required && "This field is required",
          })}
          className="form-checkbox h-4 w-4"
        />
        <span className="text-sm text-gray-700">
          {label}
          {required && <span className="text-red-500">*</span>}
        </span>
      </label>
      {errors[name] && <ErrorMessage message={errors[name].message} />}
    </div>
  );
}

export default CheckBox;
