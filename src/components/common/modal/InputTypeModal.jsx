import { FormProvider, useForm } from "react-hook-form";
import Input from "../Input";
import Close from "../btns/Close";

const typeOptions = [
  {
    label: "Text",
    value: "text",
  },
  {
    label: "Textarea",
    value: "textArea",
  },
  {
    label: "Select",
    value: "select",
  },
  {
    label: "CheckBox",
    value: "checkbox",
  },
  {
    label: "Radio",
    value: "radio",
  },
  {
    label: "Date",
    value: "date",
  },
];
function InputTypeModal({ onClose }) {
  const formMethods = useForm();
  const onSubmit = (payload) => {
    onClose(payload.type);
  };
  return (
    <div
      className="px-8 bg-white rounded-lg shadow min-w-44"
      style={{ width: "500px" }}
    >
      <Close
        type="button"
        className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        onClick={() => onClose()}
      />
      <div className="py-6">
        <FormProvider {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className="p-4 space-y-4"
          >
            <Input
              type="select"
              label="Input Type"
              name="type"
              placeholder="Please Select Type"
              options={typeOptions}
              disabled
            />
            <div className="text-center">
              <button
                className="btn  py-2 px-6 btn-primary rounded"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default InputTypeModal;
