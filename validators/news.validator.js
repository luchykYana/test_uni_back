const Joi = require('joi');

const createNewsValidator = Joi.object({
    title: Joi
        .string()
        .required()
        .trim(),

    mainPhoto: Joi
        .string(),

    photos: Joi
        .array(),

    country: Joi
        .string()
        .required(),

    text: Joi
        .string()
        .required(),

    time: Joi
        .string()
        .required(),
});

module.exports = {
    createNewsValidator,
}
