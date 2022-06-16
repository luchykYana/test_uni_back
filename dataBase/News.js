const {Schema, model} = require('mongoose');
const {number} = require('joi');

const newsSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    mainPhoto: {
        type: String
    },
    photos: {
        type: [String]
    },
    country: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

newsSchema.statics = {
    async createNews(newsObject) {
        return this.create(newsObject);
    }
};

module.exports = model('news', newsSchema);
