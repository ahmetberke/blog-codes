const   Express = require("express"),
        router = Express(),
        articleController = require("../controllers/Article");
  
router.get('/:id/like', articleController.Like);
router.get('/:id', articleController.GetSingle);
router.get('/',articleController.GetAll);
router.post('/', articleController.New);
//router.delete('/:id', articleController.Delete);
//router.put('/:id', articleController.Update);
module.exports = router;