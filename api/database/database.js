const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');

const DBSOURCE = "db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');

        createSqlTables();
        createAdminUser();
    }
});

function createAdminUser() {
    const sql = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';

    db.run(
        sql,
        ["admin", "admin@example.com", md5("admin123456")],
        (err) => { });
}

function createSqlTables() {
    createUsersTable();
    createProductsTable();
    createCategoriesTable();

};

function createUsersTable() {
    db.run(
        `CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            email text UNIQUE,
            password text,
            token text,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => { });
}

function createProductsTable() {
    db.run(
        `CREATE TABLE products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                category_id INTEGER,
                name text,
                price text
                )`,
        (err) => { });
}

function createCategoriesTable() {
    db.run(
        `CREATE TABLE categories (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name text
                    )`,
        (err) => { });
}

module.exports = db;