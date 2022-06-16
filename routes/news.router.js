const router = require('express').Router();

const {newsController} = require('../controllers');
const {newsMiddleware} = require('../middlewares');
const {createNewsValidator} = require('../validators/news.validator');
const {siteValidator} = require('../validators/site.validator');

router.get('/',
    newsController.getAdmin
);

router.get('/news',
    newsController.getNews
);

router.get('/news/admin',
    newsController.getSite
);

router.put('/news/admin/:id',
    newsMiddleware.isNewsBodyValid(siteValidator),
    newsController.updateSite
);

router.post('/news',
    newsMiddleware.isNewsBodyValid(createNewsValidator),

    newsController.createNews
);

module.exports = router;
