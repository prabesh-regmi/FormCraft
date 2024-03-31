/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

function FormList({ forms, handleDelete }) {
  const { user } = useSelector((state) => state.login);
  if (!forms || forms.length === 0)
    return <p className="text-sm py-2">No forms available!</p>;
  return (
    <div>
      {forms?.map((form, index) => (
        <ul key={form.id}>
          <div className="my-4 border bg-green-50 py-2 px-6 flex justify-between rounded">
            <Link
              to={`/form-preview/${form.id}`}
              className="flex gap-2 flex-grow"
            >
              <p className="text-lg">{index + 1}.</p>
              <h3 className="text-lg capitalize">{form.name}</h3>
            </Link>
            <div
              to={`/form-preview/${form.id}`}
              className="flex gap-4 items-center"
            >
              <Link to={`/form-preview/${form.id}`} className="text-blue-500">
                <RemoveRedEyeIcon />
              </Link>
              {user?.role === "admin" && (
                <button
                  onClick={() => handleDelete(form.id)}
                  className="text-red-500"
                >
                  <DeleteIcon />
                </button>
              )}
            </div>
          </div>
        </ul>
      ))}
    </div>
  );
}

export default FormList;
