const mysql = require('./connection');

exports.insert = async (auction_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO reviews SET ?`, auction_obj);
    return data;
}

exports.getById = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM reviews WHERE id = ?`, id);
    return data[0];
}

exports.update = async (auction_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE reviews SET ? WHERE id = ?`, [auction_obj, auction_obj.id]);
    return data;
}


exports.insert = async (auction_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO user SET ?`, auction_obj);
    return data;
}

exports.getById = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM user WHERE id = ?`, id);
    return data[0];
}

exports.update = async (auction_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE user SET ? WHERE id = ?`, [auction_obj, auction_obj.id]);
    return data;
}
