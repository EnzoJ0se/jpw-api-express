const db = require("../database/database");
CategoryModel = require('../models/category-model');

exports.get = (req, res) => {
    let sql = "select * from categories";

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": res.message
            })
        }
        res.json({
            "code": 200,
            "message": "success",
            "data": rows
        })
    });
};

exports.find = (req, res) => {
    let sql = "select * from categories where id = ?";

    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": res.message
            })
        }
        res.json({
            "code": 200,
            "message": "success",
            "data": row
        })
    });
}

exports.post = (req, res) => {
    let model = (new CategoryModel()).createFromReq(req);

    if (model.errors?.length) {
        return res.json({ "error": model.errors.join(",") });
    }

    const sql = 'INSERT INTO categories (name) VALUES (?)';

    db.run(sql, model.bindToSave(), (err, result) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": res.message
            })
        }

        res.json({
            "code": 200,
            "message": "success",
            "data": result,
            "id": this.lastID
        });
    });
};

exports.update = (req, res) => {
    let model = (new CategoryModel()).createFromReq(req);

    if (model.errors?.length) {
        return res.json({ "error": errors.join(",") });
    }

    const sql = `UPDATE categories set
    name = COALESCE(?,name)
    WHERE id = ?`;

    db.run(sql, model.bindToSave(), (err, result) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": res.message
            })
        }
        res.json({
            "code": 200,
            message: "success",
            data: result,
            changes: this.changes
        })
    });
};

exports.delete = (req, res) => {
    const sql = 'DELETE FROM categories WHERE id = ?';

    db.run(sql, req.params.id, (err, result) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": res.message
            })
        }
        res.json({
            "code": 200,
            "message": "deleted", changes: this.changes
        })
    });
};