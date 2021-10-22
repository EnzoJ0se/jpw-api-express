const md5 = require('md5')

module.exports = class UserModel {
    id;
    name;
    email;
    password;

    errors = [];

    createFromReq(req) {
        if (!req.params.id) {
            this.verifyReqErrors(req);
        }

        this.id = req.params.id;
        this.name = req.body.name;
        this.email = req.body.email;
        this.password = md5(req.body.password);

        return this;
    }

    verifyReqErrors(req) {
        if (!req.body.password || !req.body.email) {
            this.errors.push("Invalid Credentials.");
        }
    }

    bindToSave() {
        let attributes = [
            this.name,
            this.email,
            this.password
        ];

        if (this.id) {
            attributes.push(this.id);
        }

        return attributes;
    }
}