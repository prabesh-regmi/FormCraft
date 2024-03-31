import React from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import ErrorMessage from "../ErrorMessage";
function DatePicker({
    name,
    label,
    className = "",
    required = false,
    defaultValue,
}) {
    const {
        watch,
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <div className="w-full">
            <label
                className="block capitalize tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor={name}
            >
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value } }) => (
                    <ReactDatePicker
                        className={`appearance-none placeholder-gray-400 block w-full text-gray-700 border ${
                            errors[name] ? "border-red-500" : "border-gray-300"
                        }  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300 ${
                            watch(name) ? "bg-green-50" : "bg-white"
                        } ${className}`}
                        selected={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        placeholderText="DD/MM/YYYY"
                    />
                )}
            />
            {errors[name] && <ErrorMessage message={errors[name].message} />}
        </div>
    );
}

export default DatePicker;
