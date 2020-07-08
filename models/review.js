const mysql = require('./connection');

exports.insert = async (auction_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO bookclub SET ?`, auction_obj);
    return data;
}

exports.getById = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM bookclub WHERE id = ?`, id);
    return data[0];
}

exports.update = async (auction_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE bookclub SET ? WHERE id = ?`, [auction_obj, auction_obj.id]);
    return data;
}
