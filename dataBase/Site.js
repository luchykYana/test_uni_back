const {Schema, model} = require('mongoose');

const siteSchema = new Schema({
    statistic: {
        type: Number,
        required: true,
    },
    plus: {
        type: Number,
        required: true
    },
    dayOfWar: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

siteSchema.statics = {
    async createNews(siteObject) {
        return this.create(siteObject);
    }
};

module.exports = model('site', siteSchema);
