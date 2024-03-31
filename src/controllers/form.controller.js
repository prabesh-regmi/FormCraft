// FormController.js

const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { formService } = require('../services');

const getFormById = catchAsync(async (req, res) => {
    const { formId } = req.params;
    const form = await formService.getFormById(formId);
    res.status(httpStatus.OK).json(form);
});

const getForms = catchAsync(async (req, res) => {
    const forms = await formService.getForms();
    res.status(httpStatus.OK).json(forms);
});

const createForm = catchAsync(async (req, res) => {
    const formData = req.body;
    const form = await formService.createForm(formData, req.user.id);
    res.status(httpStatus.CREATED).json(form);
});

const updateForm = catchAsync(async (req, res) => {
    const { formId } = req.params;
    const formData = req.body;
    const updatedForm = await formService.updateForm(formId, formData);
    res.status(httpStatus.OK).json(updatedForm);
});

const deleteForm = catchAsync(async (req, res) => {
    const { formId } = req.params;
    await formService.deleteForm(formId);
    res.status(httpStatus.NO_CONTENT).end();
});

module.exports = {
    createForm,
    updateForm,
    deleteForm,
    getFormById,
    getForms
};
