import { Api } from "./api";

export const deleteForm = async (formId) => {
  try {
    const rs = await Api.delete(`/forms/${formId}`);
    if (rs?.status === 204) {
      return true;
    }
    return false;
  } catch (err) {
    return err.response?.data;
  }
};
