const {newsService} = require('../services');
const {News, Site} = require('../dataBase');

module.exports = {
    getAdmin: async (req, res, next) => {
        try {
            const info = await newsService.getAdminInfo(req.query);

            res.json(info);
        } catch (e) {
            next(e);
        }
    },
    getNews: async (req, res, next) => {
        try {
            const news = await newsService.getAllNews(req.query);

            res.json(news);
        } catch (e) {
            next(e);
        }
    },

    getSite: async (req, res, next) => {
        try {
            const info = await newsService.getSiteInfo(req.query);

            res.json(info);
        } catch (e) {
            next(e);
        }
    },

    createNews: async (req, res, next) => {
        try {
            const news = req.body;

            const newOne = await News.createNews(news);

            res.json(newOne);
        } catch (e) {
            next(e);
        }
    },

    updateSite: async (req, res, next) => {
        try {
            const {id} = req.params;
            const site = req.body;

            console.log(id);
            console.log(site);

            const newSite = await Site.findByIdAndUpdate(id, site, {new: true});

            console.log(newSite);

            res.json(newSite);
        } catch (e) {
            next(e);
        }
    }
}
