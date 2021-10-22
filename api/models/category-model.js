module.exports = class CategoryModel {
    id;
    name;

    errors = [];

    createFromReq(req) {
        if (!req.body.name) {
            this.errors.push("No name specified");
        }

        this.id = req.params.id;
        this.name = req.body.name;

        return this;
    }

    bindToSave() {
        let attributesToSave = [this.name];

        if (this.id) {
            attributesToSave.push(id);
        }

        return attributesToSave;
    }
}