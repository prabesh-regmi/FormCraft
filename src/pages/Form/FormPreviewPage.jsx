import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormsById } from "../../services/handleGetRequest";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import FormBuilder from "../../components/FormBuilder/FormBuilder";
import CodeBlock from "../../components/CodeBlock/CodeBlock";

function FormPreviewPage() {
    const { formId } = useParams();
    const [form, setForm] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState(false);
    const fetchData = async () => {
        setIsLoading(true);
        const form = await getFormsById(formId);
        setForm(form);
        setIsLoading(false);
    };
    const handlePayload = (payload) => {
        setPayload(payload);
    };
    useEffect(() => {
        fetchData();
    }, [formId]);
    return (
        <div className="max-w-5xl mx-auto px-4 my-10">
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <FormBuilder form={form} handlePayload={handlePayload} />
            )}
            {payload && (
                <div className="my-4">
                    <h3 className="text-sm font-bold py-2">Payload data:</h3>
                    <CodeBlock code={payload} language="json" />
                </div>
            )}
        </div>
    );
}

export default FormPreviewPage;
