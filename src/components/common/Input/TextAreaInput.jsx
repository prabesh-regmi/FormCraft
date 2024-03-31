import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";

function TextAreaInput({
    name,
    label,
    validate,
    disabled,
    required = false,
    className = "",
}) {
    const {
        register,
        getValues,
        formState: { errors },
    } = useFormContext();
    const [inputValue, setInputValue] = useState(getValues(name));
    const handleBlur = () => setInputValue(getValues(name));
    return (
        <div className="w-full">
            <label
                className="block capitalize tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor={name}
            >
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                rows={5}
                className={`appearance-none placeholder-gray-400 block w-full text-black border ${
                    errors[name] ? "border-red-500" : "border-gray-300"
                }  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300 ${
                    inputValue ? "bg-green-50" : "bg-white"
                } ${className}`}
                {...register(name, {
                    required: required ? "This field is required" : false,
                    validate,
                    disabled,
                    onBlur: handleBlur,
                })}
            />
            {errors[name] && <ErrorMessage message={errors[name].message} />}
        </div>
    );
}

export default TextAreaInput;
