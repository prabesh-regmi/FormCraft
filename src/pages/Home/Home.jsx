import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { getForms, deleteForm } from "../../services";
import FormList from "../../components/FormList/FormList";
import ModalTemplateWithArgs from "../../components/common/modal/ModalTemplateWithArgs";
import DeleteConformationModal from "../../components/common/modal/DeleteConformation";
// import FormBuilder from "../../components/FormBuilder/FormBuilder";

function Home() {
  const [forms, setForms] = useState([]);
  const [deleteItem, setDeleteItem] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { user } = useSelector((state) => state.login);
  const fetchData = async () => {
    setIsLoading(true);
    const forms = await getForms();
    setForms(forms);
    setIsLoading(false);
  };
  const handleFormDeleteClick = async (id) => {
    setDeleteItem(id);
  };
  const onDelete = async () => {
    setIsDeleting(true);
    const deleted = await deleteForm(deleteItem);
    if (deleted) {
      setDeleteItem("");
      fetchData();
    }
    setIsDeleting(false);
  };
  const onDeleteCancel = () => {
    setDeleteItem("");
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl my-2">Forms:</h1>
        {user?.role === "admin" && (
          <Link to="/form/create" className="btn btn-sm btn-primary rounded">
            Create Form
          </Link>
        )}
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <FormList forms={forms} handleDelete={handleFormDeleteClick} />
      )}
      <ModalTemplateWithArgs
        isOpen={!!deleteItem}
        width="w-md"
        onClose={onDeleteCancel}
      >
        <DeleteConformationModal
          onConfirm={onDelete}
          onCancel={onDeleteCancel}
          isLoading={isDeleting}
        />
      </ModalTemplateWithArgs>
    </div>
  );
}

export default Home;
