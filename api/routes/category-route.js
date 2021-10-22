module.exports = function (app) {
    const controller = require('../controllers/category-controller');

    app.route('/categories')
        .get(controller.get)

    app.route('/categories')
        .post(controller.post);

    app.route('/categories/:id')
        .get(controller.find)
        
    app.route('/categories/:id')
        .post(controller.update)

    app.route('/categories/:id')
        .delete(controller.delete);
}