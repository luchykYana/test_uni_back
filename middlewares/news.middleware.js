const {ErrorHandler, errors} = require('../errors');

const {NOT_VALID_BODY} = errors;

module.exports = {
    isNewsBodyValid: (validator) => (req, res, next) => {
        try {
            const {error, value} = validator.validate(req.body);

            if (error) {
                const message = NOT_VALID_BODY.message;

                throw new ErrorHandler(message, NOT_VALID_BODY.code);
            }

            req.body = value;

            next();
        } catch (e) {
            next(e);
        }
    },
};
