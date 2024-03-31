import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function FormList({ forms }) {
    if (!forms || forms.length === 0)
        return <p className="text-sm py-2">No forms available!</p>;
    return (
        <div>
            {forms.map((form, index) => (
                <ul key={form.id}>
                    <Link
                        to={`/form-preview/${form.id}`}
                        className="my-4 border bg-green-50 py-2 px-6 flex justify-between rounded"
                    >
                        <div className="flex gap-2">
                            <p className="text-lg">{index + 1}.</p>
                            <h3 className="text-lg capitalize">{form.name}</h3>
                        </div>
                        <div
                            to={`/form-preview/${form.id}`}
                            className="flex gap-4 items-center"
                        >
                            <button
                                to={`/form-preview/${form.id}`}
                                className="text-blue-500"
                            >
                                <RemoveRedEyeIcon />
                            </button>
                            <button className="text-red-500">
                                <DeleteIcon />
                            </button>
                        </div>
                    </Link>
                </ul>
            ))}
        </div>
    );
}

export default FormList;
