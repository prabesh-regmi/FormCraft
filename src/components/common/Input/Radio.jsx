import React from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";

function Radio({ name, options, label, required = false }) {
    const {
        register,
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
            {options.map((option) => (
                <label
                    key={option.value}
                    className="inline-flex items-center mr-4 gap-2"
                >
                    <input
                        type="radio"
                        value={option.value}
                        {...register(name, {
                            required: required && "This field is required",
                        })}
                        className="form-radio h-4 w-4"
                    />
                    <span className="text-sm text-gray-700">
                        {option.label}
                    </span>
                </label>
            ))}
            {errors[name] && <ErrorMessage message={errors[name].message} />}
        </div>
    );
}

export default Radio;
