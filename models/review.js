const mysql = require('../connection');

exports.insertreview = async (user_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO reviews SET ?`, user_obj);
    return data;
}
exports.getReviewById = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM reviews WHERE book_id = ?`, id);
    return data[0];
}
exports.getReviewAll = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM reviews`);
    return data; 
}
exports.insert = async (user_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO user SET ?`, user_obj);
    console.log(data);
    return data;
}
exports.getById = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM user WHERE user_id = ?`, id);
    return data[0];
}
exports.delete = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`DELETE FROM user WHERE user_id = ?`, id);
    return data;
}
exports.deletereview = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`DELETE FROM reviews WHERE review_id = ?`, id);
    return data;
}
exports.update = async (user_obj) => {
    console.log(user_obj);
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE user SET ? WHERE user_id = ?`, [user_obj, user_obj.user_id]);
    return data;
}
exports.updatereview = async (user_obj) => {
    console.log(user_obj);
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE reviews SET ? WHERE review_id = ?`, [user_obj, user_obj.review_id]);
    return data;
}