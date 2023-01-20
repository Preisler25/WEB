let save = (data, db)=>{
    const query1 =`INSERT INTO qa(username, useremail, question) VALUES ('${data.username}', '${data.email}', '${data.massage}')`;
    db.query(query1, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
}});}

let getAll = async(db) => {
    const query = 'SELECT * FROM qa';
    let data = await db.query(query);
    return data.rows;
}

module.exports = {
    save,
    getAll
};