module.exports = function (app) {
    const controller = require('../controllers/product-controller');

    app.route('/products')
        .get(controller.get)
    
    app.route('/products')
        .post(controller.post);

    app.route('/products/:id')
        .get(controller.find)
    
    app.route('/products/:id')
        .put(controller.update)
    
    app.route('/products/:id')
        .delete(controller.delete);
}