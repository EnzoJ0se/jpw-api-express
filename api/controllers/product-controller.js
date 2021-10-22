const db = require("../database/database");
ProductModel = require('../models/product-model');

exports.get = (req, res) => {
    let sql = "select * from products";

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": err
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
    let sql = "select * from products where id = ?";

    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": err
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
    let model = (new ProductModel()).createFromReq(req);

    if (model.errors?.length) {
        return res.json({ "error": errors.join(",") });
    }

    const sql = 'INSERT INTO products (category_id, name, price) VALUES (?,?,?)';

    db.run(sql, model.bindToSave(), (err, result) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": err
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
    let model = (new ProductModel()).createFromReq(req);

    if (model.errors?.length) {
        return res.json({ "error": errors.join(",") });
    }

    const sql = `UPDATE products set
    category_id = COALESCE(?,category_id),
    name = COALESCE(?,name),
    price = COALESCE(?,price)
    WHERE id = ?`;

    db.run(sql, model.bindToSave(), (err, result) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": err
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
    const sql = 'DELETE FROM products WHERE id = ?';

    db.run(sql, req.params.id, (err, result) => {
        if (err) {
            return res.json({
                "code": 500,
                "error": err
            })
        }
        res.json({
            "code": 200,
            "message": "deleted", changes: this.changes
        })
    });
};