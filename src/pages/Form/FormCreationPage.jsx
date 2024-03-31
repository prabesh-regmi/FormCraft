import React, { useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import ModalTemplateWithArgs from "../../components/common/modal/ModalTemplateWithArgs";
import InputTypeModal from "../../components/common/modal/InputTypeModal";
import Close from "../../components/common/btns/Close";
import { saveForm } from "../../services";
import OptionCreateForm from "../../components/FormBuilder/OptionCreateForm";
import ErrorMessage from "../../components/common/ErrorMessage";
import SubmitSpinner from "../../components/common/SubmitSpinner";

function FormCreationPage() {
  const formMethods = useForm();
  const [isAddInputModalOpen, setIsAddInputModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: "inputs",
  });
  const onSubmit = async (payload) => {
    setIsSubmitting(true);
    setErrorMessage("");
    const savedForm = await saveForm(payload);
    if (savedForm?.id) {
      formMethods.reset();
      navigate(`/form-preview/${savedForm?.id}`);
    } else {
      setErrorMessage(savedForm?.message);
    }
    setIsSubmitting(false);
  };
  const closeModal = (payload = {}) => {
    const { value } = payload;
    if (value) append({ type: value });
    setIsAddInputModalOpen(false);
  };
  const openModal = () => setIsAddInputModalOpen(true);

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <h2 className="py-4 capitalize">Crete new form:</h2>
      <div>
        <FormProvider {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className="p-4 space-y-4"
          >
            <Input
              type="text"
              name="name"
              label="Form Name"
              placeholder="Enter form name ..."
              required
            />
            <div className="w-full">
              <p className="block capitalize tracking-wide text-gray-700 text-sm font-bold mb-2">
                Inputs
                <span className="text-red-500">*</span>
              </p>
              <div className="w-full">
                {fields.map((item, index) => (
                  <div key={item.id} className="p-2 m-2 border relative">
                    <div className="flex gap-2 flex-row">
                      <Input
                        type="text"
                        label="Input Type"
                        name={`inputs.${index}.type`}
                        placeholder="Please Select Type"
                        disabled
                      />

                      <Input
                        type="text"
                        name={`inputs.${index}.name`}
                        label="Field Name"
                        placeholder="Field name..."
                        required
                      />
                      <Input
                        type="text"
                        name={`inputs.${index}.label`}
                        label="Field Label"
                        placeholder="Field label..."
                        required
                      />
                      <Input
                        type="text"
                        name={`inputs.${index}.placeholder`}
                        label="Field Placeholder"
                        placeholder="Field placeholder..."
                      />
                    </div>
                    <div className="flex gap-2 flex-col my-2">
                      <Input
                        type="checkbox"
                        name={`inputs.${index}.required`}
                        label="Is field required"
                      />
                      <Input
                        type="checkbox"
                        name={`inputs.${index}.disabled`}
                        label="Is field disabled"
                      />
                    </div>
                    {["select", "radio"].includes(item.type) && (
                      <div>
                        <h4 className="text-md font-bold mb-2">Options</h4>
                        <OptionCreateForm
                          control={formMethods.control}
                          name={`inputs.${index}.options`}
                        />
                      </div>
                    )}

                    <Close
                      type="button"
                      className="absolute top-1 right-1 text-red-500 bg-transparent hover:bg-red-100 hover:text-red-600 rounded-lg text-sm p-1 ml-auto inline-flex items-center"
                      onClick={() => remove(index)}
                    />
                  </div>
                ))}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={openModal}
                    className="btn btn-sm bg-gray-600 hover:bg-gray-800 text-white rounded-full"
                  >
                    Add Input
                  </button>
                </div>
              </div>
            </div>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <button
              type="submit"
              className="btn flex btn-primary justify-center w-1/2 mx-auto rounded-full"
            >
              {isSubmitting ? (
                <div className="flex justify-center">
                  <SubmitSpinner className="w-8 text-white animate-spin" />
                </div>
              ) : (
                <span>Save Form</span>
              )}
            </button>
          </form>
        </FormProvider>
      </div>
      <ModalTemplateWithArgs
        isOpen={isAddInputModalOpen}
        width="w-md"
        onClose={closeModal}
      >
        <InputTypeModal onClose={closeModal} />
      </ModalTemplateWithArgs>
    </div>
  );
}

export default FormCreationPage;
