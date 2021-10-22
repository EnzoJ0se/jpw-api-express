module.exports = class ProductModel {
    id;
    category_id;
    name;
    price;

    errors = [];

    createFromReq(req) {
        if (!req.params.id) {
            this.validateRequest(req);
        }

        this.id = req.params.id;
        this.name = req.body.name;
        this.price = req.body.price;
        this.category_id = req.body.category_id;

        return this;
    }

    validateRequest(req) {
        const missingFields = []

        if (!req.body.name) {
            missingFields.push('name');
        }

        if (!req.body.price) {
            missingFields.push('price');
        }

        if (!req.body.category_id) {
            missingFields.push('category_id');
        }

        this.errors = missingFields;
    }

    bindToSave() {
        let attributes = [
            this.name,
            this.category_id,
            this.price
        ];

        if (this.id) {
            attributes.push(this.id);
        }

        return attributes;
    }
}