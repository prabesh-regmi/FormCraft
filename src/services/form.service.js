const httpStatus = require('http-status');
const inputService = require('./input.service');
const { Form, Input, Option } = require('../models');
const ApiError = require('../utils/ApiError');

async function checkFormNameTaken(name) {
    const form = await Form.findOne({ where: { name } })
    return !!form
}

const getFormById = async (formId) => {
    const form = await Form.findByPk(formId, {
        include: [{
            model: Input,
            as: 'inputs',
            include: [{
                model: Option,
                as: 'options'
            }],
            attributes: { exclude: ['createdAt', 'updatedAt', 'formId'] },
        }]
    });
    if (!form) {
        throw new Error('Form not found');
    }
    return form;
};

const getForms = async () => {
    const forms = await Form.findAll({
        include: [{
            model: Input,
            as: 'inputs',
            include: [{
                model: Option,
                as: 'options'
            }]
        }]
    });
    return forms;
};

async function createForm(formData, userId) {
    console.log("here------>")
    const { name, inputs } = formData;
    if (await checkFormNameTaken(name)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Form name already taken');
    }
    const form = await Form.create({ name,userId });
    await inputService.createInputs(inputs, form.id);
    return form;
}

async function updateForm(formId, formData) {
    try {
        const { name, inputs } = formData;
        const form = await Form.findByPk(formId);
        if (!form) {
            throw new Error('Form not found');
        }
        if (name !== form.name) {
            if (await checkFormNameTaken(name))
                throw new ApiError(httpStatus.BAD_REQUEST, 'Form name already taken');
            await form.update(formData);
        }
        await inputService.deleteInputsByFormId(formId)
        await inputService.createInputs(inputs, formId);
        return form;
    } catch (error) {
        throw error;
    }
}

async function deleteForm(formId) {
    const form = await Form.findByPk(formId);
    if (!form) {
        throw new Error('Form not found');
    }
    await inputService.deleteInputsByFormId(formId);
    await form.destroy();
}

module.exports = {
    createForm,
    updateForm,
    deleteForm,
    getFormById,
    getForms
};
