import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { getForms } from "../../services/handleGetRequest";
import FormList from "../../components/FormList/FormList";
// import FormBuilder from "../../components/FormBuilder/FormBuilder";

function Home() {
    const [forms, setForms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = async () => {
        setIsLoading(true);
        const forms = await getForms();
        setForms(forms);
        setIsLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);
    // const testForm = {
    //     name: "Test Form",
    //     inputs: [
    //         {
    //             name: "name",
    //             label: "Product Name",
    //             type: "textArea",
    //             placeholder: "Enter Product name",
    //             required: true,
    //         },
    //         {
    //             name: "dob",
    //             label: "Date of birth",
    //             type: "date",
    //             placeholder: "Enter Date of birth",
    //             required: true,
    //         },
    //         {
    //             name: "isNew",
    //             label: "Is New",
    //             type: "checkbox",
    //         },
    //         {
    //             name: "animal",
    //             label: "Choose Animal",
    //             type: "select",
    //             required: true,
    //             options: [
    //                 {
    //                     value: "tiger",
    //                     label: "Tiger",
    //                 },
    //                 {
    //                     value: "elephant",
    //                     label: "elephant",
    //                 },
    //             ],
    //         },
    //     ],
    // };
    const defaultValue = { name: "Prabesh Regmi", animal: "tiger" };
    return (
        <div className="max-w-5xl mx-auto my-10 px-4">
            <h1 className="text-2xl my-2">Forms:</h1>
            {isLoading ? <LoadingSpinner /> : <FormList forms={forms} />}
            {/* <FormBuilder form={testForm} defaultValues={defaultValue} /> */}
        </div>
    );
}

export default Home;
