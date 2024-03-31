// routes/formRoutes.js

const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const formValidation = require('../../validations/form.validation');
const { formController } = require('../../controllers');

const router = express.Router();
router.get('/', formController.getForms);
router.post('/', auth('createForms'), validate(formValidation.createForm), formController.createForm);
router.get('/:formId', validate(formValidation.getForm), formController.getFormById);
router.put('/:formId', auth('updateForms'), validate(formValidation.updateForm), formController.updateForm);
router.delete('/:formId', auth('deleteForms'), validate(formValidation.deleteForm), formController.deleteForm);

/**
 * @swagger
 * tags:
 *   name: Forms
 *   description: Form management and retrieval
 */

/**
 * @swagger
 * /forms:
 *   get:
 *     summary: Get all forms
 *     description: Retrieve a list of all forms along with their inputs and options.
 *     tags: [Forms]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Form'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /forms/{formId}:
 *   get:
 *     summary: Get a form by ID
 *     description: Retrieve a form by its ID along with its inputs and options.
 *     tags: [Forms]
 *     parameters:
 *       - in: path
 *         name: formId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the form to retrieve
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Form'
 *       404:
 *         description: Form not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /forms:
 *   post:
 *     summary: Create a form
 *     description: Endpoint to create a new form.
 *     tags: [Forms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - inputs
 *             properties:
 *               name:
 *                 type: string
 *               inputs:
 *                 type: array
 *                 items:
 *                   $ref: '#/definitions/Input'
 *             example:
 *               name: "Example Form"
 *               inputs:
 *                 - type: "text"
 *                   name: "input1"
 *                   label: "Input 1"
 *                   required: true
 *     responses:
 *       201:
 *         description: "Form created successfully."
 *       400:
 *         description: "Bad request. Check your input data."
 *       500:
 *         description: "Internal server error."
 *   get:
 *     summary: "Get all forms"
 *     description: "Endpoint to retrieve all forms."
 *     tags: [Forms]
 *     parameters: []
 *     responses:
 *       200:
 *         description: "List of forms retrieved successfully."
 *         schema:
 *           type: "array"
 *           items:
 *             $ref: "#/definitions/Form"
 *       500:
 *         description: "Internal server error."
 * /forms/{formId}:
 *   put:
 *     summary: "Update a form"
 *     description: "Endpoint to update an existing form."
 *     tags: [Forms]
 *     parameters:
 *       - name: "formId"
 *         in: "path"
 *         description: "ID of the form to be updated"
 *         required: true
 *         type: "string"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - inputs
 *             properties:
 *               name:
 *                 type: string
 *               inputs:
 *                 type: array
 *                 items:
 *                   $ref: '#/definitions/Input'
 *             example:
 *               name: "Updated Form"
 *               inputs:
 *                 - type: "text"
 *                   name: "input1"
 *                   label: "Input 1"
 *                   required: true
 *     responses:
 *       200:
 *         description: "Form updated successfully."
 *       400:
 *         description: "Bad request. Check your input data."
 *       404:
 *         description: "Form not found."
 *       500:
 *         description: "Internal server error."
 *   delete:
 *     summary: "Delete a form"
 *     description: "Endpoint to delete an existing form."
 *     tags: [Forms]
 *     parameters:
 *       - name: "formId"
 *         in: "path"
 *         description: "ID of the form to be deleted"
 *         required: true
 *         type: "string"
 *     responses:
 *       204:
 *         description: "Form deleted successfully."
 *       404:
 *         description: "Form not found."
 *       500:
 *         description: "Internal server error."
 */



module.exports = router;
