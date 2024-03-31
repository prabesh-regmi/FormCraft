// Joi Validation Schema
const Joi = require('joi');
const { objectId } = require('./custom.validation');

const optionSchema = Joi.object({
  label: Joi.string().required().messages({
    'any.required': 'Label is required.',
    'string.empty': 'Label cannot be empty.'
  }),
  value: Joi.string().required().messages({
    'any.required': 'Value is required.',
    'string.empty': 'Value cannot be empty.'
  }),
});

const InputSchema = Joi.object({
  type: Joi.string().required().messages({
    'any.required': 'Type is required.',
    'string.empty': 'Type cannot be empty.'
  }),
  name: Joi.string().required().messages({
    'any.required': 'Name is required.',
    'string.empty': 'Name cannot be empty.'
  }),
  label: Joi.string().required().messages({
    'any.required': 'Label is required.',
    'string.empty': 'Label cannot be empty.'
  }),
  value: Joi.string().allow(null).allow('').messages({
    'string.base': 'Value must be a string.',
  }),
  required: Joi.boolean().default(false).messages({
    'boolean.base': 'Required must be a boolean.'
  }),
  placeholder: Joi.string().allow(null).allow('').messages({
    'string.base': 'Placeholder must be a string.'
  }),
  disabled: Joi.boolean().default(false).messages({
    'boolean.base': 'Disabled must be a boolean.'
  }),
  options: Joi.array().items(optionSchema).optional().messages({
    'array.base': 'Options must be an array.',
  })
});

const createForm = {
  body: Joi.object({
    name: Joi.string().required().messages({
      'any.required': 'Name is required.',
      'string.empty': 'Name cannot be empty.'
    }),
    inputs: Joi.array().items(InputSchema).required().messages({
      'any.required': 'Input fields are required.',
      'array.base': 'Input fields must be an array.',
      'array.empty': 'Input fields array cannot be empty.'
    })
  })
};
const updateForm = {
  params: Joi.object({
    formId: Joi.string().required().custom(objectId).messages({
      'any.required': 'Form Id is required.',
      'string.empty': 'Form id cannot be empty.'
    }),
  }),
  body: Joi.object({
    name: Joi.string().required().messages({
      'any.required': 'Name is required.',
      'string.empty': 'Name cannot be empty.'
    }),
    inputs: Joi.array().items(InputSchema).required().messages({
      'any.required': 'Input fields are required.',
      'array.base': 'Input fields must be an array.',
      'array.empty': 'Input fields array cannot be empty.'
    })
  })
};
const getForm = {
  params: Joi.object({
    formId: Joi.string().required().custom(objectId).messages({
      'any.required': 'Form Id is required.',
      'string.empty': 'Form id cannot be empty.'
    }),
  }),
};
const deleteForm = {
  params: Joi.object({
    formId: Joi.string().required().custom(objectId).messages({
      'any.required': 'Form Id is required.',
      'string.empty': 'Form id cannot be empty.'
    }),
  }),
};

module.exports = {
  InputSchema,
  optionSchema,
  getForm,
  createForm,
  updateForm,
  deleteForm
};
