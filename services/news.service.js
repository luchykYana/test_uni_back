const {News, Site, Admin} = require('../dataBase');

module.exports = {
    getAllNews: (query = {}) => {
        const {
            perPage = 20,
            page = 1,
            sortBy = 'createdAt',
            order = 'asc',
            ...filters
        } = query;

        const findObject = {};

        Object.keys(filters).forEach(filterParam => {
            switch (filterParam) {
                case 'email':
                    findObject.name = {$regex: `^${filters.email}`, $options: 'i'};
                    break;
            }
        });

        const orderBy = order === 'asc' ? -1 : 1;

        return News
            .find(findObject)
            .sort({[sortBy]: orderBy})
            .limit(+perPage)
            .skip((page - 1) * perPage);
    },

    getSiteInfo: (query = {}) => {
        const {
            perPage = 20,
            page = 1,
            sortBy = 'createdAt',
            order = 'asc',
            ...filters
        } = query;

        const findObject = {};

        Object.keys(filters).forEach(filterParam => {
            switch (filterParam) {
                case 'email':
                    findObject.name = {$regex: `^${filters.email}`, $options: 'i'};
                    break;
            }
        });

        const orderBy = order === 'asc' ? -1 : 1;

        return Site
            .find(findObject)
            .sort({[sortBy]: orderBy})
            .limit(+perPage)
            .skip((page - 1) * perPage);
    },

    getAdminInfo: (query = {}) => {
        const {
            perPage = 20,
            page = 1,
            sortBy = 'createdAt',
            order = 'asc',
            ...filters
        } = query;

        const findObject = {};

        Object.keys(filters).forEach(filterParam => {
            switch (filterParam) {
                case 'email':
                    findObject.name = {$regex: `^${filters.email}`, $options: 'i'};
                    break;
            }
        });

        const orderBy = order === 'asc' ? -1 : 1;

        return Admin
            .find(findObject)
            .sort({[sortBy]: orderBy})
            .limit(+perPage)
            .skip((page - 1) * perPage);
    }

};
