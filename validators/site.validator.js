const Joi = require('joi');

const siteValidator = Joi.object({
    statistic: Joi
        .number()
        .required(),
    plus: Joi
        .number()
        .required(),
    dayOfWar: Joi
        .number()
        .required(),
    time: Joi
        .string()
        .required()
})

module.exports = {
    siteValidator,
}
