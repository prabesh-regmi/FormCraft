import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../common/Input";

function FormBuilder({ form, handlePayload, defaultValues = {} }) {
  const formMethods = useForm({ defaultValues });
  const onSubmit = (payload) => {
    handlePayload(payload);
  };
  return (
    <FormProvider {...formMethods}>
      <h3 className="text-xl text-gray-700 capitalize mt-4">{form.name}</h3>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="p-4 space-y-4"
      >
        {form?.inputs?.map((field) => (
          <Input key={field.name} {...field} />
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </FormProvider>
  );
}

export default FormBuilder;
