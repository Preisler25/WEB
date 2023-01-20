let saveToDb = (data, db)=>{
    const query1 =`INSERT INTO qa(username, useremail, question) VALUES ('${data.username}', '${data.email}', '${data.massage}')`;
    db.query(query1, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
}});}

module.exports = {
    saveToDb,

};